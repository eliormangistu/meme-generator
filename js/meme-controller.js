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
    //console.log(memes.selectedImgId);
    // const { txt, size, color } = memes.lines[gMeme.selectedLineIdx]
    // console.log(txt, size, color);
    const elImg = new Image()
    elImg.src = `img/${memes.selectedImgId}.jpg`
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
        //console.log(size);
        //onChangeTextColor(color)
    }
}

function onSetLineTxt(text) {
    console.log(text);
    setLineTxt(text)
    renderMeme()
}

function drawText() {
    // var y = getRandomIntInclusive(45, 150)
    // var x = getRandomIntInclusive(45, 150)
    const memes = getMeme()
    const lines = memes.lines
    lines.forEach(line => {
        const { txt, size, color } = line
        console.log(line);
        gCtx.lineWidth = 2
        // gCtx.strokeStyly = 'black'
        gCtx.fillStyle = color
        gCtx.font = `${size}px Impact`
        gCtx.textBaseline = 'middle'
        gCtx.fillText(memes.lines[0].txt, 100, 30)
        gCtx.fillText(memes.lines[1].txt, 200, 100)
        console.log(memes.lines[1].txt);
    });
    // gCtx.fillText(memes.lines[0].txt, 50, 30)
    // gCtx.fillText(memes.lines[1].txt, 200, 200)
    // gCtx.strokeText(txt, 45, 32)
}

function onChangeTextColor(color) {
    console.log(color);
    gCtx.fillStyle = color
    changeTextColor(color)
}

function onDownload(elLink) {
    const drawContent = gElCanvas.toDataURL('draw/jpeg')
    elLink.href = drawContent
}

function onIncreaseTxt() {
    increaseTxt()
    renderMeme()
}

function onDecreaseTxt() {
    decreaseTxt()
    renderMeme()
}

function onAddLine() {
    console.log('line');
}

