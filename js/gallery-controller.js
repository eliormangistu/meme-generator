'use strict'

function renderGallery() {
    const images = getImages()
    const strHtml = images.map((img) => `
    <img src="${img.url}" onclick="onImgSelect(${img.id})">
    `).join('')
    setElHtml('gallery', strHtml)
}

function onImgSelect(img) {
    document.querySelector('.about').classList.add('hidden')
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.editor').classList.remove('hidden')
    setImg(img)
    renderMeme()
}

function onRenderGallery() {
    document.querySelector('.editor').classList.add('hidden')
    document.querySelector('.about').classList.add('hidden')
    document.querySelector('.gallery').classList.remove('hidden')
    renderGallery()
}

function onAbout() {
    document.querySelector('.gallery').classList.add('hidden')
    document.querySelector('.editor').classList.add('hidden')
    document.querySelector('.about').classList.remove('hidden')
}