var dolly = {'artist': 'Dolly Parton', 'song': 'Coat of many colors'}
var lbt = {'artist': 'Little Big Town', 'song': 'Little White Church'}
var blake = {'artist': 'Blake Shelton', 'song': 'Honey Bee'}
var sugar = {'artist': 'Sugarland', 'song': 'Baby Girl'}
var rascal = {'artist': 'Rascal Flatts', 'song': 'Play'}

artistArr = [dolly, lbt, blake, sugar, rascal]

function getRandomArtist() {
    return artistArr[Math.floor(Math.random() * artistArr.length)];
}

/* given a word and a letter, returns an array of numbers where that
    letter occurs in the word. Returns an empty array if the letter 
    doesn't occur
*/
function getIndexesOfLetters(word, letter) {
    var indexes = [];
    for(var i = 0; i < word.length; ++i) {
        if (letter.toLowerCase() === word.charAt(i).toLowerCase()) {
            indexes.push(i);
        }
    }

    return indexes;
}

