window.addEventListener("load", init);
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts = 5;
const word = "buttercup";
let lettersInWord;
let guessedLettersInWord = [];
function init() {
    lettersInWord = word.split("");
    console.log(lettersInWord);
    for (let i = 0; i < word.length; i++) {
        guessedLettersInWord.push('-');
    }
    console.log(word);
    console.log(guessedLettersInWord);
    writeAlphabetToTheDom();
    writeGuessedLettersToDOM(guessedLettersInWord);
    writeAttempts();
}
function writeGuessedLettersToDOM(guessedLetters) {
    lettersInDOM.innerHTML = "";
    guessedLetters.forEach(function (letter) {
        const letterElement = document.createElement('li');
        letterElement.innerHTML = letter;
        lettersInDOM.append(letterElement);
    });
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.addEventListener('click', guessedLetter);
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
function guessedLetter(event) {
    console.log(this.id);
    let letter = this.id;
    checkGuess(letter);
    const indexes = checkGuess(letter);
    console.log(indexes);
    if (indexes.length > 0) {
        updateGuessedLettersOfWord(letter, indexes);
        writeGuessedLettersToDOM(guessedLettersInWord);
    }
}
function updateGuessedLettersOfWord(letter, indexes) {
    indexes.forEach(function (index) {
        guessedLettersInWord[index] = letter;
    });
}
function checkGuess(letter) {
    let indexes = [];
    const letters = document.getElementById('letters');
    console.log(letter);
    for (let i = 0; i < lettersInWord.length; i++) {
        if (letter === lettersInWord[i]) {
            console.log("Correct");
            indexes.push(i);
        }
    }
    return indexes;
}
function writeAttempts() {
    const attemptText = document.getElementById('attempt');
    console.log(`attempts left: ${attempts}`);
    attemptText.innerHTML = attempts.toString();
}
//# sourceMappingURL=app.js.map