var currentDoc = null;
var wins = 0;
var remainingGuesses = 0;
var readyToStart = 'Press any key to start a new game';
var gameInProgress = 'Game is in progress';
var lettersGuessed = [];
var artist = getRandomArtist();


document.addEventListener('DOMContentLoaded', function() {
    currentDoc = document;
    setElements(readyToStart);
});


/* set the html elements to their corresponding global values
   state argument is one of 2 possible states
*/
function setElements(state) {
    document.getElementById('gameStatus').textContent = state;
    document.getElementById('wins').textContent = wins;
    document.getElementById('artist').textContent = artist.artist;
    // add song
    // add wrong letters guessed
    document.getElementById('remaingGuesses').textContent = remainingGuesses;

}
