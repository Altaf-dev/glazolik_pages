const LANG_ITEM = document.querySelectorAll('.lang-item')


//Выбор языка
LANG_ITEM.forEach((item) => {
    item.addEventListener('click', () => {
        LANG_ITEM.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})
