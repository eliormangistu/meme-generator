'use strict'

let gElCanvas
let gCtx

var isSwitch = false

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
}

function renderMeme() {
    const memes = getMeme()
    const elImg = new Image()
    elImg.src = `img/${memes.selectedImgId}.jpg`
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        memes.lines.forEach(line => {
            drawText(line.x, line.y, line.txt, line.size, line.color, line.lineColor, line.font)
        });
    }
}

function onSetLineTxt(txt) {
    isSwitch = false
    setLineTxt(txt)
    renderMeme()
}

function drawText(x, y, txt, size = 30, color = 'white', lineColor = 'black', font = 'Impact') {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = lineColor
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${font}`
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)

    if (!isSwitch) return
    const txtMs = gCtx.measureText(txt).width
    gCtx.strokeRect(x, y - 20, txtMs, txtMs / 2.5)
}

function onChangeTextColor(color) {
    isSwitch = false
    gCtx.fillStyle = color
    changeTextColor(color)
    renderMeme()
}

function onChangeLineColor(color) {
    gCtx.strokeStyle = color
    changeLineColor(color)
    renderMeme()
}

function onDownload(elLink) {
    isSwitch = false
    const drawContent = gElCanvas.toDataURL('draw/jpeg')
    elLink.href = drawContent
}

function onIncreaseTxt() {
    isSwitch = false
    increaseTxt()
    renderMeme()
}

function onDecreaseTxt() {
    isSwitch = false
    decreaseTxt()
    renderMeme()
}

function onAddLine() {
    getLine()
    renderMeme()
}

function onSwitchLine() {
    isSwitch = true
    const meme = getMeme()
    meme.selectedLineIdx++
    if (meme.selectedLineIdx === meme.lines.length) meme.selectedLineIdx = 0
    setLineTxt(txt.placeholder)
    renderMeme()
}

function onClinck(ev) {
    const { offsetX, offsetY } = ev
    const memes = getMeme().lines
    const currMeme = memes.find(meme => {
        var txtWidth = gCtx.measureText(meme.txt).width
        console.log(meme.x, meme.y, offsetX, offsetY);
        return offsetX >= meme.x && offsetX <= meme.x + txtWidth
            && offsetY >= meme.y && offsetY <= meme.y + meme.size
    })
    if (currMeme) {
        onSwitchLine(currMeme)
        renderMeme()
    }
}

function onChangeTextFont(font) {
    changeTextFont(font.value)
    renderMeme()
}

function onChangeFontSize(fontsize) {
    changeFontSize(fontsize)
    renderMeme()
}

function onRight() {
    right()
    renderMeme()
}

function onLeft() {
    left()
    renderMeme()
}

function onCenterBy() {
    center(gElCanvas.width / 2 - 130, gElCanvas.height / 2)
    renderMeme()
}

function onUp() {
    up()
    renderMeme()
}

function onDown() {
    down()
    renderMeme()
}

function onDeleteLine() {
    setLineTxt('')
    renderMeme()
}