'use strict'

function setElHtml(selector, html) {
    const el = document.querySelector(`.${selector}`)
    el.innerHTML = html
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function removeClass(className, selector) {
    document.querySelector(`${selector}`).classList.remove(className)
}

function addClass(className, selector) {
    document.querySelector(`${selector}`).classList.add(className)
}
