const results = require('./data/swapi');
const characters = require('./data/swapi');
// DO NOT CHANGE THE LINE ABOVE

/**
 * listAllCharacters()
 * -------------------
 * Returns all character names from an array of characters. If the inputted array is empty, returns 0.
 * 
 * @param {Object[]} characters - an array of movie characters
 * @returns {string[]} an array of strings, which are character names
 *
 * EXAMPLE:
 * 
 * listAllCharacters([])
 * 
 * //> 0
 * 
 * 
 * 
 * listAllCharacters(characters);
 *
 * //> [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
   ];
 *
 */

function listAllCharacters(characters) {
let array = [];

if(!characters.length){
  return 0
}

for (let i = 0; i < characters.length; i++) {
  array.push(characters[i].name)
}
return array
}

//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
console.log(listAllCharacters([]));
console.log(listAllCharacters(characters));

/**
 * averageHeightOfAllCharacters()
 * ------------------------------
 * Returns the average height of all of the listed characters
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {number} - a number representing the average height
 *
 * No example for this one. You should be able to find the average at this point
 */

function averageHeightOfAllCharacters(characters) {
let avg = 0;

for (let i = 0; i < characters.length; i++) {
  avg += (characters[i].height / characters.length)
}
return avg.toFixed(0)
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
console.log(averageHeightOfAllCharacters(characters))

/**
 * countByEyeColor()
 * -----------------
 * Returns an object where the keys are the eye colors and the values are number of characters with that eye color.
 * If the inputted array is empty, return 'Nothing to check.'
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {Object} - keys are the eye colors and values are the number of characters with that eye color
 *
 * EXAMPLE:
 * countByEyeColor([])
 *
 * //> 'Nothing to check.'
 *
 * countByEyeColor(characters)
 *
 * { blue: 3, yellow: 2, red: 2, brown: 2, blue-gray: 1 };
 *
 */

function countByEyeColor(characters) {
  let object = {};
  if(!characters.length){
    return 'Nothing to check.'
  }

  for (let i = 0; i < characters.length; i++) {
    if (!object[characters[i].eye_color]){
      object[characters[i].eye_color] = 1
    } else {
      if (object[characters[i].eye_color]){
        object[characters[i].eye_color] += 1
      }
    }
  }
  return object
}

//UNCOMMENT THE LINES BELOW TO TEST YOUR SOLUTION
console.log(countByEyeColor([]))
console.log(countByEyeColor(characters));

/**
 * getAllCharactersCreatedAfterYear()
 * ----------------------------------
 * Returns an array of all characters created on or after a certain year
 * 
 * @param {Object[]} characters - an array of movie characters
 * @param {Number} date - date to be considered for when character object was created
 * @returns {String[]} - returns an array of character names
 * 
 * EXAMPLE:
 * getAllCharactersCreatedAfterYear(characters, 2014)
 *
 * [
  'R2-D2',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Obi-Wan Kenobi'
 * ]
 * 
 * 
 *
 */

function getAllCharactersCreatedAfterYear(characters, date) {
  let array = [];

  for (let i = 0; i < characters.length; i++) {
    let createdDate = characters[i].created.slice(0,4)
    if (createdDate >= date){
      array.push(characters[i].name)
    }
  }
  return array
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
console.log(getAllCharactersCreatedAfterYear(characters, 2014));

/** getCharactersInMovie()
 *  ----------------------
 *  Returns an object of characters who were in a certain film. 
 *  Their id will be the key and their name should be the value. 
 *  Title should be CASE INSENSITIVE meaning, 
 *  if the string argument is e.g. 'star wars' or 'STAR WARS' or 'STaR wArs' 
 *  and there is a film called 'Star Wars' in the character's data, 
 *  the character was in the film and should be returned.
 * 
 *  @param {Object[]} characters - an array of movie characters
 *  @param {String} - string with the title of the movie
 *  @returns {Object} - key should be the id and the value should be their name
 *
 * EXAMPLE:
 *
 * getCharacterIds(characters, 'return of the jedi')
 * 
 * //> {
   L3kdddkek: 'Luke Skywalker',
   Idkk99dkc: 'C-3PO',
   Kekk39dis: 'R2-D2',
   O894iriie: 'Darth Vader',
   Viie78949: 'Leia Organa',
   Ghfjkd998: 'Obi-Wan Kenobi'
   }
 */

function getCharactersInMovie(characters, title) {
  let obj = {};
  let movie;

  for (let i = 0; i < characters.length; i++) {
    movie = characters[i].films
    for (let j = 0; j < characters[i].films.length; j++) {
      let lowerCase = characters[i].films[j].toLowerCase()
      if (lowerCase === title.toLowerCase()){
        obj[characters[i].id] = characters[i].name
      }
    }
  }
  return obj
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION
console.log(getCharactersInMovie(characters, 'return of the jedi'));
