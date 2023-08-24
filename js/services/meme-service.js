'use strict'

//var gText
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
            x: 50,
            y: 30,
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: getRandomColor()
        },
        {
            x: 80,
            y: 300,
            txt: 'I love Pizza',
            size: 30,
            color: getRandomColor()
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

function increaseTxt() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function decreaseTxt() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function getLine() {
    return createLine()
}

//TODO!!!!

function createLine() {
    gMeme.lines.push({
        x: getRandomIntInclusive(10, 300),
        y: getRandomIntInclusive(10, 400),
        txt: 'Funny Meme',
        size: getRandomIntInclusive(20, 50),
        color: getRandomColor()
    })
    //gText[(getRandomIntInclusive(0, 4))]
    //['Funny', 'Food', 'Shoe Me', 'Whassup', 'Heyyy'],
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
