const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
// map iterates through each item in a array and creates a new array with those items.
//1. Get array of all names
// let arrNames = characters.map((character) => character.name);
// console.log(arrNames);

//2. Get array of all heights
// let arrHeights = characters.map((character) => character.height);
// console.log(arrHeights);
//3. Get array of objects with just name and height properties
// const arrNamesHeights = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// console.log(arrNamesHeights);
//4. Get array of all first names
// let arrNames = characters.map((character) => character.name);
// let joe = arrNames.map((fullname) => {
//   return fullname.split(" ")[0];
// });
// console.log(joe);

//***REDUCE***
// iterate through each item in a array and get some kind of result

//1. Get total mass of all characters
// const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass);

//2. Get total height of all characters
// const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
// const eyeColorCount = characters.reduce((acc, curr) => {
//   if (acc[curr.eye_color]) {
//     acc[curr.eye_color]++;
//   } else {
//     acc[curr.eye_color] = 1;
//   }
//   return acc;
// }, {});
// console.log(eyeColorCount);

//4. Get total number of characters in all the character names
// const totalCharacterNames = characters.reduce((acc, curr) => {
//   return acc + curr.name.length - 1;
// }, 0);
// console.log(totalCharacterNames);

//***FILTER***
// filter out the values you dont wont in an array

//1. Get characters with mass greater than 100
// const bigCharacterMass = characters.filter((character) => character.mass > 100);
// console.log(bigCharacterMass);

//2. Get characters with height less than 200
// const smallCharacterHeight = characters.filter(
//   (character) => character.height < 200
// );
// console.log(smallCharacterHeight);

//3. Get all male characters
// const maleCharacters = characters.filter(
//   (character) => character.gender == "male"
// );
// console.log(maleCharacters);

//4. Get all female characters
// const femaleCharacters = characters.filter(
//   (character) => character.gender == "female"
// );
// console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
// const sortMass = characters.sort((a, b) => {
//   return a.mass - b.mass;
// });
// console.log(sortMass);

//2. Sort by height
// const sortHeight = characters.sort((a, b) => {
//   return a.height - b.height;
// });

// console.log(sortHeight);

//3. Sort by name
const sortName = characters.sort((a, b) => {
  if (a.name > b.name) return -1;
  return 1;
});

console.log(sortName);
//4. Sort by gender
const sortGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});

console.log(sortGender);

//***EVERY***
// every is given a condition and checks if every item in that array meets said condition
// and returns if true or false

//1. Does every character have blue eyes?
// const allBlueEyes = characters.every(
//   (character) => character.eye_color == "blue"
// );
// console.log(allBlueEyes);

//2. Does every character have mass more than 40?
// const allBigMass = characters.every((character) => character.mass > 40);
// console.log(allBigMass);

//3. Is every character shorter than 200?
// const shortCharacters = characters.every((character) => character.height < 200);
// console.log(shortCharacters);

//4. Is every character male?
// const allMaleCharacters = characters.every(
//   (character) => character.gender === "male"
// );
// console.log(allMaleCharacters);

//***SOME***
//1. Is there at least one male character?
const someMaleCharacters = characters.some(
  (character) => character.gender === "male"
);
console.log(someMaleCharacters);

//2. Is there at least one character with blue eyes?
const someBlueEyes = characters.some((ch) => ch.eye_color === "blue");
console.log(someBlueEyes);

//3. Is there at least one character taller than 210?
const someTallCharacters = characters.some((ch) => ch.height > 210);
console.log(someTallCharacters);

//4. Is there at least one character that has mass less than 50?
const someSmallMass = characters.some((ch) => ch.mass < 50);
console.log(someSmallMass);
