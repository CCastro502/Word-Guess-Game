var userGuesses = [];
var wins = 0;
var losses = 0;
var ties = 0;
var unknownWord = "";

function wordGenerator() {
    var computerChoices = ["lowly", "start", "chilly", "bun", "bead", "friend", "return", "view", "cloth", "frogs", "celery", "basin", "stand", "special", "broad", "abaft", "plead", "quartz", "mark", "tempt", "shop", "stone", "scorch", "taboo", "hoax", "spiffy", "insure"];
    var cpuWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(cpuWord);
    return cpuWord;
};
var computerWord = wordGenerator();

function scrambledWord(string) {
    var knownWord = ""
    if (string.length == 3) {
        knownWord = "___"
    } else if (string.length == 4) {
        knownWord = "____"
    } else if (string.length == 5) {
        knownWord = "_____"
    } else if (string.length == 6) {
        knownWord = "______"
    } else if (string.length == 7) {
        knownWord = "_______"
    }
    return knownWord;
}
var unknownWord = scrambledWord(computerWord);

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userGuessList = document.getElementById("userguesslist-text")

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        userGuesses.push(userGuess);
        // // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        userGuessList.textContent = "You have guessed: " + userGuesses;
        wordChecker(userGuess)
    } else {
        alert("You did not enter an alphabetical character.")
    }
};

function wordChecker(input) {
    console.log(input);
    for (i = 0; i < computerWord.length; i++) {
        if (computerWord.includes(input)) {
            alert("You guessed a correct character")
        }
    }
}
