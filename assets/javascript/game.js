const words = ["blue", "yellow", "rebeccapurple", "green", "red"];
    console.log (words.length);
    console.log (words);

let wins = 0;
let losses = 0;
let numberguesses = 10;
let lettersguessed = 0;

randomguess = words[Math.floor(Math.random() * words.length)]; 
    console.log (randomguess);

    const chars = randomguess.split('');
    console.log (chars);
    //now that we have our characters, we need to listen for user keys.
document.onkeypress = function(event) {
    const userGuess = event.key;
    console.log (userGuess)



    //see if the user key matches the split characters; string doesn't equal array; find value in array

if (chars.indexOf (userGuess) !== -1) {
    console.log ("it matched!");
}
else {
    console.log ("it didn't match");
}
}

    //if the user key matches, then display letter in word and display in the lettersguessed in letters guessed and the guesses go down;

    //else the user key doesn't match, then display the letterguessed in letters guessed and the guesses go down




