// Variable declaration
let inputWord = "testicle";
let missCount = 0;
let wordSize = 0;
let underScoreHolder = "";
let matchCount = 0;
let guess = "";
let drawCount = 0;
let guesses = [];
let guessHolder = document.createElement('P');
let displayUnderScore = document.createElement('P');
let x = document.getElementById("correctOrNot");
let winLose = document.getElementById("winLose");

let wordList = [];
let wordListIndex = 0;

console.log(inputWord.length);

function init() { //works

    wordSize = inputWord.length;
    for (let i = 0; i < wordSize; i++) {
        underScoreHolder = underScoreHolder.concat("_");
    }
    console.log(wordSize);
    console.log(inputWord);
    console.log(underScoreHolder);
    readFromFile();
    blankMan();
}

//main function
function wordStuff() {
    guess = document.getElementById("cGuess").value; //assign guess to variable to increae readability
    characterGuess(guess);
    printGuesses();
    increaseMiss();
    endCondition();
}

function characterGuess(guess) {
    guesses.push(guess);
    for (let i = 0; i < wordSize; i++) {
        if (inputWord.charAt(i) === guess) {
            console.log("Correct Guess: " + guess);
            underScoreHolder = replaceAt(underScoreHolder, i, guess);
            matchCount++;
            x.innerHTML = "Correct Guess: " + guess;
        }
    }
    if (matchCount === 0) {
        x.innerHTML = "Incorrect Guess: " + guess;
    }
    console.log(guesses.toString());
}

function wordGuess() {
    let word = document.getElementById("wGuess").value;
    console.log(word);
    if (inputWord === word) {
        winLose.innerHTML = "You Win!";
        console.log("you win!");
    } else {
        missCount++;
        console.log("incorrect Word Guess:" + missCount);
    }
}

function replaceAt(string, index, replace) { //works
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function endCondition() { //works
    if (underScoreHolder === inputWord) {
        console.log("You win!");
        winLose.innerHTML = "You Win!";
    }
    if (missCount === 14) {
        console.log("You Lose");
        winLose.innerHTML = "You Lose! my G";
    }
}

function increaseMiss() { //works
    if (matchCount === 0) {
        missCount++;
        console.log("Incorrect Guess:" + guess, missCount);

        drawMan();
    }
    console.log(underScoreHolder);
    matchCount = 0; //reset match so it can check again
}

function blankMan() {
    for (let i = 1; i < 15; i++) {
        let x = document.getElementById(i);
        x.style.visibility = 'hidden';
    }
}

function drawMan() {
    drawCount++;
    let x = document.getElementById(drawCount);
    x.style.visibility = 'visible';
}

function printGuesses() {
    guessHolder.textContent = guesses.toString();
    displayUnderScore.textContent = underScoreHolder;
    document.getElementsByTagName('body')[0].appendChild(displayUnderScore);
    document.getElementsByTagName('body')[0].appendChild(guessHolder);
}



function readFromFile() {
    let url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            wordList = this.responseText.split("\n");
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
    console.log(wordList.length);
}

function easy() {
    document.getElementById("difficulty").textContent = "Pussy Mode Activated";
    while (inputWord1.length < 7) {
        wordListIndex = Math.floor(Math.random(wordList) * wordList.length);
        inputWord1 = wordList[wordListIndex];

    }
}

function medium() {
    document.getElementById("difficulty").textContent = "Noob Mode Activated";
    while (inputWord1.length > 3 && inputWord1.length < 7) {
        wordListIndex = Math.floor(Math.random(wordList) * wordList.length);
        inputWord1 = wordList[wordListIndex];
    }
}

function hard() {
    document.getElementById("difficulty").textContent = "Gangsta Mode Activated";
    while (inputWord1.length > 5) {
        wordListIndex = Math.floor(Math.random(wordList) * wordList.length);
        inputWord1 = wordList[wordListIndex];
    }
}