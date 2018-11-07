const wordArray = ["lowly", "start", "chilly", "bun", "bead", "friend", "return", "view", "cloth", "frogs", "celery", "basin", "stand", "special", "broad", "abaft", "plead", "quartz", "mark", "tempt", "shop", "stone", "scorch", "taboo", "hoax", "spiffy", "insure"];

let guessedLetters = [""];

let guesses = 10;

var randWord = "";

function guessesAllowed(guessedLetters, key-pressed) {
    // When a guess is made by the user, guesses is iterated down by 1
    
    if (key-is-pressed) {
        guesses = guesses--
        guessedLetters.push(key-pressed)
    }
    console.log(guesses)
    gameRestart();
}

function findWord() {
    var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(randWord)
}

function gameRestart() {
    guesses = 10;
    guessedLetters.length = 0;
    findWord();
}

if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x")(userGuess === "y") || (userGuess === "z")) {
    userGuesses.push(userGuess);
    for (i=0; i < computerGuess.length; i++) {
      console.log(computerGuess[i]);
    }


function keyPress() {
    starts when key is pressed.
}

function letterCheck(word) {
    for (i = 0; i < word.length; i++) {

    }
}
// array that holds the random words the game might play (wordArray). function (guessesAllowed) that holds a 'let' variable that contains the number of letter guesses allowed (guesses), starts at 10, calls on gameRestart function once guessesAllowed = 0. function (guessedLetters) that holds array that holds guessed letters (letters); when game restarts, function eliminates all values from the array. function to restart the game once 10 guesses has been made (gameRestart). function to find the random word(randWord) from wordArray. function to loop over letters in randWord with letter guessed by user. function that grabs the letter typed by user, and calls the function the loops over the word. looping function