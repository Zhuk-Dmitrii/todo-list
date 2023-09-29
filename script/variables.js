// _______________СОЗДАЕМ ПЕРЕМЕННЫЕ_____________________________________________
const headerFormElement = document.querySelector('.header__form') // находим элемент формы, который находится в хэдере
const headerInputTextElement = document.querySelector('.header__text-field') // находим инпут (окно ввода текста), который находится в форме хэдера. Тут мы пишем текст который хотим добавить при создании карточки.
const buttonDeleteAllElement = document.querySelector('.header__button-delete') // находим инпут (кнопка удаления), которая находится в форме хэдера. Эта кнопка удаляет полностью все карточки из нашего контента.
const mainContentElement = document.querySelector('.main') // находим элемент основного контента. Это блок где будут отображаться все наши тудушки (карточки)

export {
    headerFormElement,
    headerInputTextElement,
    buttonDeleteAllElement,
    mainContentElement
}