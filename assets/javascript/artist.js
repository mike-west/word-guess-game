var dolly = {'artist': 'Dolly Parton', 'song': 'Coat of many colors'}
var lbt = {'artist': 'Little Big Town', 'song': 'Little White Church'}
var blake = {'artist': 'Blake Shelton', 'song': 'Honey Bee'}
var sugar = {'artist': 'Sugarland', 'song': 'Baby Girl'}
var rascal = {'artist': 'Rascal Flatts', 'song': 'Play'}

artistArr = [dolly, lbt, blake, sugar, rascal]

function getRandomArtist() {
    return artistArr[Math.floor(Math.random() * artistArr.length)];
}



