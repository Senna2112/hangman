window.addEventListener("load", init);

//Global variables
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
let attempts: number = 5;
const word: string = "buttercup";
let lettersInWord: string[];
let guessedLettersInWord: string[] = [];  

/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  lettersInWord = word.split("");
  console.log(lettersInWord);
  for (let i:number = 0; i < word.length; i++) {
    guessedLettersInWord.push('-');
  }
  console.log(word);
  console.log(guessedLettersInWord);
  writeAlphabetToTheDom();

//write guessed letters to the DOM
  writeGuessedLettersToDOM(guessedLettersInWord);

//write attempts to the DOM
  writeAttempts();
}

/**
 * Function to write the word that needs to be guessed
 * @param guessedLetters amount of letters
 */
function writeGuessedLettersToDOM(guessedLetters: string[]) {
  lettersInDOM.innerHTML = "";
  guessedLetters.forEach(function(letter){
    const letterElement = document.createElement('li');
    letterElement.innerHTML = letter;
    lettersInDOM.append(letterElement);
  })
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard: HTMLDivElement = document.querySelector("#keyboard");
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.addEventListener('click', guessedLetter);
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
}

/**
 * Function that checks what the user guessed
 * @param event 
 */
function guessedLetter(event: Event) {
  console.log(this.id);
  let letter: string = this.id;
  checkGuess(letter);
  const indexes: number[] = checkGuess(letter);
  console.log(indexes);
  if(indexes.length > 0) {
    updateGuessedLettersOfWord(letter, indexes);
    writeGuessedLettersToDOM(guessedLettersInWord);
  }
}

/**
 * Function to update the DOM
 * @param letter guessed letter
 * @param indexes indexes of letter
 */
function updateGuessedLettersOfWord(letter: string, indexes: number[]) {
  indexes.forEach(function(index){
    guessedLettersInWord[index] = letter;
  })
}


/**
 * Function to check if the guessed letter is correct
 * @param letter guessed letter
 */
function checkGuess(letter: string): number[] {
  let indexes: number[] = [];
  const letters: HTMLElement = document.getElementById('letters');
  console.log(letter);
    for (let i = 0; i < lettersInWord.length; i++) {
      if(letter === lettersInWord[i]){
        console.log("Correct");
        indexes.push(i);
      }
    }
    return indexes;
}

/**
 * function to write the attempts to the DOM
 */
function writeAttempts() {
  const attemptText: HTMLElement = document.getElementById('attempt');
  console.log(`attempts left: ${attempts}`);
  attemptText.innerHTML = attempts.toString();
}