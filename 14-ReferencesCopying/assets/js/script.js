// Copying ...
let age = 100;
let age2 = age;
console.log(`age: ${age} age2: ${age2}`);

age = 200;
console.log(`age: ${age} age2: ${age2}`);

let name = 'Ringo Star';
let name2 = name;
console.log(`name: ${name} name2: ${name2}`);

name = 'George';
console.log(`name: ${name} name2: ${name2}`);

// Reference ...
const players = ['Paul', 'Ringo', 'John', 'George'];
const team = players;
console.log(players);
console.log(team);

// You might think we can just do something like this
team[3] = 'Lux';

console.log(players);
console.log(team);

// however what happens when we update that array?

// now here is the problem! We have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? 

// one way
const team2 = players.slice();
console.log(team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players];
console.log(team4);

team4[3] = 'Lexy';
console.log(team4);

// now when we update it, the original one isn't changed
const team5 = Array.from(players);
console.log(team5);

// The same thing goes for objects, let's say we have a person object
const person = {
    name: 'Paul',
    age: 80
};

// We make a copy
const band = person;
console.log(band);

band.age = 99;
console.log(band);

// How do we take a copy instead?
const band2 = Object.assign({}, person, { name: "George", age: 12 });
console.log(band2);

// We will hopefully soon see the object ...spread
const band3 = {...person};
console.log(band3);

console.clear();

const beatle = {
    name: 'John',
    age: 100,
    social: {
    twitter: '@john',
    facebook: 'john.music'
    }
};

console.log(beatle);

const beatle2 = Object.assign({}, beatle);
console.log(beatle2);

// Object for JSON
const beatle3 = JSON.stringify(beatle2); 
console.log(beatle3);

// JSON for Object
const beatle4 = JSON.parse(beatle3);
console.log(beatle4);