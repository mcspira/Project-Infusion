(() => {
    const $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    const $btnMenu = document.querySelector('.header__btnMenu')
    $btnMenu.removeAttribute('style')
})()