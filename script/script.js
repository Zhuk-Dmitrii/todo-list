import { headerFormElement, headerInputTextElement, buttonDeleteAllElement, mainContentElement } from './variables.js'
import { setData, getData } from './function-helpers.js'

let todos = [] // пустой массив, в него мы будем добавлять обекты, содержащие информацию для отображение карточек из LocalStorage 

// ДЕЛАЕМ ПРОВЕРКУ НА НАЛИЧИЕ КАРТОЧЕК В LocalStorage
if (localStorage.getItem('todosCard')) {
    todos = getData()
    buildCardTodo()
}

// СОЗДАЕМ КАРТОЧКУ И ДОБАВЛЯЕМ ЕЕ НА СТРАНИЦУ
headerFormElement.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(event) {
    event.preventDefault()
    const date = new Date().toISOString()

    const todo = {
        id: Date.now(),
        date: new Date(date).toLocaleString(),
        text: headerInputTextElement.value,
        isChecked: false,
    }

    todos.push(todo)
    buildCardTodo()
    setData(todos)
    headerFormElement.reset()
}

// _______________СОЗДАЕМ ФУНКЦИЮ ПОСТРОЕНИЯ КАРТОЧКИ (ШАБЛОН)_____________________________________
function buildCardTodo() {
    let cardTodo = ''

    todos.forEach(function (item) {
        cardTodo += `
            <form class="card__form ${item.isChecked ? 'card__form-background' : ''}" id="${item.id}">
                <input class="card__checkbox" type="checkbox" ${item.isChecked ? 'checked' : ''}>
                <div class="card__content-text">${item.text}</div>
                <div class="card__content-other">
                    <input class="card__button-close" type="button" value="X">
                    <p class="card__date">${item.date}</p>
                </div>
            </form>
            `
        mainContentElement.innerHTML = cardTodo
    })
}

// УДАЛЯЕМ КОНКРЕТНУЮ КАРТОЧКУ
mainContentElement.addEventListener('click', handleClickDelete)

function handleClickDelete(event) {
    let { target } = event

    if (target.closest('.card__button-close')) {
        target.closest('.card__form').remove()
        todos = getData()
        todos.forEach(function (item, index) {
            if (item.id == target.closest('.card__form').id) {
                todos.splice(index, 1)
                setData(todos)
            }
        })
    }
}

// УДАЛЯЕМ ВСЕ КАРТОЧКИ
buttonDeleteAllElement.addEventListener('click', handleClickDeleteAll)

function handleClickDeleteAll(event) {
    let { target } = event

    if (target == buttonDeleteAllElement) {
        mainContentElement.innerHTML = ''
        todos = getData()
        todos.length = 0
        setData(todos)
    }
}

// СОХРАНЯЕМ checked В LocalStorage
mainContentElement.addEventListener('change', handleChangeCheckboxCards)

function handleChangeCheckboxCards(event) {
    let { target } = event
    todos = getData()

    todos.forEach(function (item) {
        if (item.id == target.closest('.card__form').id) {
            item.isChecked = target.checked
            if (item.isChecked) {
                document.getElementById(`${item.id}`).classList.toggle('card__form-background')
            } else {
                target.closest('.card__form').classList.toggle('card__form-background')
            }
            setData(todos)
        }
    })
}







