'use strict'

function renderGallery() {
    //console.log('gallery');
    const images = getImages()
    const strHtml = images.map((img) => `
    <img src="${img.url}" onclick="onImgSelect(${img.id})">
    `).join('')
    setElHtml('gallery', strHtml)
}

function onImgSelect(img) {
    console.log(img);
    setImg(img)
    renderMeme()
}