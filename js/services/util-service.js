'use strict'

function setElHtml(selector, html) {
    const el = document.querySelector(`.${selector}`)
    el.innerHTML = html
}