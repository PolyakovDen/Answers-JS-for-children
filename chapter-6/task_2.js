//Создать генератор рандомных рядков

'use strict'

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; //создали алфавит
let randomWord = '';

while (randomWord.length < 12) {
    randomWord = randomWord + alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomWord);