'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
    renderGallery()
}

function renderMeme() {
    const memes = getMeme()
    console.log(memes.selectedImgId);
    const elImg = new Image()
    elImg.src = `img/${memes.selectedImgId}.jpg`
    elImg.onload = () => {
        document.querySelector('h2').innerText = memes.lines[0].txt
        gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onSetLineTxt(event) {
    const text = event.target.value
    console.log(text);
    document.querySelector('h2').innerText = text
    getLineTxt()
}

function onDownload(elLink) {
    const drawContent = gElCanvas.toDataURL('draw/jpeg')
    elLink.href = drawContent
}

