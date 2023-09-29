// _______________СОЗДАЕМ ФУНКЦИЮ СОХРАНЕНИЯ ДАННЫХ В LocalStorage_______________________
function setData (item) {
    localStorage.setItem('todosCard', JSON.stringify(item))
}

// _______________СОЗДАЕМ ФУНКЦИЮ ПОЛУЧЕНИЯ ДАННЫХ ИЗ LocalStorage_______________________
function getData () {
    return JSON.parse(localStorage.getItem('todosCard'))
}

export { setData, getData }