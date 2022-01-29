const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hi');
// Interpolated
console.log('hey there, its my %s', 'INTERPOLATED STRING')

// Styled
console.log('%c some styled text', 'font-size: 50px;');

// warning!
console.warn('maybe this is bad');

// Error :|
console.error('UH OH');

// Info
console.info('this doesnt seem to be working (there should be an i next to it)..');

// Table
console.table(dogs);

// Testing
console.assert(1 === 1, 'This will not display');
console.assert(1 === 2, 'WRONG');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`)
    console.log(dog.name);
    console.log(dog.age);
    console.log(`Dog years: ${dog.age * 7}`);
    console.groupEnd(`${dog.name}`)
});

// counting
console.count('Fred');
console.count('Fred');
console.count('something else');
console.count('something else');
console.count('Fred');
console.count('Fred');
console.count('Fred');
console.count('something else');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data)
    })