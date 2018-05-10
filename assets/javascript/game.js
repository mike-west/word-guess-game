var currentDoc = null;
var wins = 0;
var remainingGuesses = 0;
var readyToStart = 'Press any key to start a new game';
var gameInProgress = 'Game is in progress';
var lettersGuessed = [];
var artist = getRandomArtist();
var hiddenSong = [];


document.addEventListener('DOMContentLoaded', function() {
    currentDoc = document;
    newGame();
});

function hideSong(song) {
    hiddenSong = [];
    for(var i = 0; i < song.length; ++i) {
        if (song.charAt(i) === ' ') {
            hiddenSong.push(' ');
        } else {
            hiddenSong.push('-');
        }
    }
}

/* set the html elements to their corresponding global values
   state argument is one of 2 possible states
*/
function setElements(state) {
    document.getElementById('gameStatus').textContent = state;
    document.getElementById('wins').textContent = wins;
    document.getElementById('artist').textContent = artist.artist;
    document.getElementById('song').textContent = hiddenSong.join('');
    document.getElementById('lettersGuessed').textContent = lettersGuessed.join();
    document.getElementById('remaingGuesses').textContent = remainingGuesses;
}

// set up a new game
function newGame() {
    remainingGuesses = 0;
    lettersGuessed = [];
    artist = getRandomArtist();
    hideSong(artist.song);
    remainingGuesses = artist.song.length + 3;
    setElements(readyToStart);
}

function gameOver(result) {
    if (result === 'won') {
        ++wins;
        alert('You won!');
    } else {
        alert('Sorry, better luck next time')
    }
}

// start first game
newGame();

document.onkeyup = function(event) {
    var userGuess = event.key;

    letterLocations = getIndexesOfLetters(artist.song, userGuess);
    if (letterLocations.length === 0) {
        alert('Sorry ' + userGuess + "isn't in the song title");
        --remainingGuesses;
        lettersGuessed.push(userGuess);
    } else {
        alert('All right! ' + userGuess + ' occurs in ' + letterLocations.length + ' places!');
        for(var i = 0; i < letterLocations.length; ++i) {
            hiddenSong[letterLocations[i]] = userGuess;
        }          
    }

    setElements(gameInProgress);
    if (hiddenSong.indexOf('-') > -1 && remainingGuesses === 0) {
        gameOver('loss');
        newGame();
    } else if (hiddenSong.indexOf('-') === -1) {
        gameOver('won');
        newGame();
    } 
}
