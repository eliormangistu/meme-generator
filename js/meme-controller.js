'use strict'
let gElCanvas
let gCtx

var isSwitch = false

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
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
            drawText(line.x, line.y, line.txt, line.size, line.color)
            //console.log(line.x, line.y, line.size);
        });
    }
}

function onSetLineTxt(txt) {
    isSwitch = false
    setLineTxt(txt)
    renderMeme()
}

function drawText(x, y, txt, size, color) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, x, y)

    if (!isSwitch) return
    const txtMs = gCtx.measureText(txt).width
    gCtx.strokeRect(x, y - 20, txtMs, txtMs / 2.5)
}

function onChangeTextColor(color) {
    isSwitch = false
    console.log(color);
    gCtx.fillStyle = color
    changeTextColor(color)
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
    setLineTxt(txt.placeholder)
    renderMeme()
    const meme = getMeme()
    meme.selectedLineIdx++
    if (meme.selectedLineIdx === meme.lines.length) meme.selectedLineIdx = 0
    // console.log(meme.lines[meme.selectedLineIdx].txt);
}

function onClinck(ev) {
    //onSwitchLine()

    // console.log(ev);
    const { offsetX, offsetY } = ev
    //console.log('offsetX, offsetY:', offsetX, offsetY)
    //console.log(' clientX, clientY:', clientX, clientY)
    const memes = getMeme().lines
    console.log(memes);
    const currMeme = memes.find(meme => {
        var txtWidth = gCtx.measureText(meme.x.txt).width
        console.log(txtWidth);
        console.log(meme.x, meme.y, offsetX, offsetY);
        return offsetX >= meme.x && offsetX <= meme.x + txtWidth
            && offsetY >= meme.y && offsetY <= meme.y + meme.size
    })
    if (currMeme) {
        console.log('yayyyy!');
        console.log(currMeme.txt, currMeme.size, clientX, clientY);
    }
}
