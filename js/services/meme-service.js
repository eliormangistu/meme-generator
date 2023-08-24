'use strict'

var gMeme
var gImgs
var gText = ['Funny', 'Food', 'Shoe Me', 'Whassup', 'Heyyy']

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] }
]

gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            x: 30,
            y: 30,
            txt: 'I sometimes eat Falafel',
            size: 30,
            color: getRandomColor(),
            lineColor: getRandomColor(),
            font: 'Impact'
        },
        {
            x: 200,
            y: 300,
            txt: 'I love Pizza',
            size: 35,
            color: getRandomColor(),
            lineColor: getRandomColor(),
            font: 'Impact'
        }
    ]
}

console.log('gMeme', gMeme);
console.log('gImgs', gImgs);

function getMeme() {
    return gMeme
}

console.log('get images', getMeme());

function setLineTxt(textBy) {
    gMeme.lines[gMeme.selectedLineIdx].txt = textBy
    console.log(textBy);
}

function setImg(imgBy) {
    gMeme.selectedImgId = imgBy
}

function getImages() {
    return gImgs
}

function changeTextColor(colorBy) {
    gMeme.lines[gMeme.selectedLineIdx].color = colorBy
    console.log(colorBy);
}

function changeLineColor(colorBy) {
    gMeme.lines[gMeme.selectedLineIdx].lineColor = colorBy
    console.log(colorBy);
}

function increaseTxt() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function decreaseTxt() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function getLine() {
    return createLine()
}

function createLine() {
    gMeme.lines.push({
        x: getRandomIntInclusive(10, 300),
        y: getRandomIntInclusive(10, 300),
        txt: 'Funny Meme',
        size: getRandomIntInclusive(20, 50),
        color: getRandomColor(),
        lineColor: getRandomColor(),
        font: 'Impact'
    })
    console.log(gMeme);
}

function switchLine() {
    // var count = 0
    // for (var i = 0; i < gMeme.lines.length; i++) {
    //     console.log(i);
    // }
    // count++
    // console.log(count);
    // console.log(gMeme.lines.length);
    // console.log(gMeme.selectedLineIdx);
    // return gMeme.selectedLineIdx.txt
    //return gMeme.selectedLineIdx === 0 ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0
}

function changeTextFont(fontBy) {
    if (fontBy === 'courier') {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Courier New'
    } if (fontBy === 'gill') {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Gill Sans'
    } if (fontBy === 'times') {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Times New Roman'
    } if (fontBy === 'ver') {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Verdana'
    } else if (fontBy === '') {
        gMeme.lines[gMeme.selectedLineIdx].font = 'Impact'
    }
}

function changeFontSize(sizeBy) {
    gMeme.lines[gMeme.selectedLineIdx].size = sizeBy
}

function right() {
    gMeme.lines[gMeme.selectedLineIdx].x = 150
}

function left() {
    gMeme.lines[gMeme.selectedLineIdx].x = 10
}

function center(centerByX, centerByY) {
    gMeme.lines[gMeme.selectedLineIdx].x = centerByX
    gMeme.lines[gMeme.selectedLineIdx].y = centerByY
}

function up() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 10
}

function down() {
    gMeme.lines[gMeme.selectedLineIdx].y += 10
}
