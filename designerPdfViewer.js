'use strict';
let h = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'
    .split(' ').map((i) => +i);
console.log(designerPdfViewer(h, 'abc'));

function designerPdfViewer(h, word) {
    word = word.split('').map((letter) => h[letter.charCodeAt() - 95]);
    return word.length * Math.max(...word);
}
