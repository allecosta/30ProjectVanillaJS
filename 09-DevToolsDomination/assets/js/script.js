const dogs = [
    { name: 'Aiwa', age: 2 }, 
    { name: 'Pegulin', age: 8 }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#ff0000';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello JS');

// Interpolated
let emot = "💩";

console.log(`Hello! Eu sou um string! ${emot}`);
console.log('Hello! Eu sou um %s string!', '💩');
console.log('Hello! Eu sou um string!' + '💩');

// Styled
console.log('%c Great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Sabia que crocodiles comem de 3 a 4 pessoas por ano?');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

//console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

// counting
console.count('Steve Wozniak');
console.count('Steve Jobs');
console.count('Linus torvalds');
console.count('Bill Gates');
console.count('Aaron Swartz');
console.count('Edward Snowden ');
console.count('Steve Jobs');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
    console.timeEnd();
    console.log(data);
    });

console.table(dogs);
