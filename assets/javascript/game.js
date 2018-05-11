var currentDoc = null;
var wins = 0;
var remainingGuesses = 0;
var readyToStart = 'Press any key to guess guess a letter';
var gameInProgress = 'Game is in progress, press any key to guess another letter';
var lettersGuessed = [];
var artist = getRandomArtist();
var hiddenSong = [];
var stateMsg;


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
        setElements('You won! Press any key to start a new game')
        alert('You won! The song was ' + artist.song);
    } else {
        setElements('You lost, Press any key to start a new game');
        alert('Sorry, better luck next time')
    }
}

// start first game
newGame();

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === ' ') { 
        return; // ignore spaces
    }

    letterLocations = getIndexesOfLetters(artist.song, userGuess);
    if (letterLocations.length === 0) {
        --remainingGuesses;
        lettersGuessed.push(userGuess);
        setElements('Sorry ' + userGuess + " isn't in the song title, press another letter");
    } else {
        for(var i = 0; i < letterLocations.length; ++i) {
            hiddenSong[letterLocations[i]] = userGuess;
        }  
        setElements('All right! ' + userGuess + ' occurs in ' + letterLocations.length + ' places!')        
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
