/** COPY **/

// Strings, numbers and booleans
let name1 = 'Jane';
let name2 = name1;
console.log(name1, name2)
name2 = "Zoran";
console.log(name1, name2)


/** REFERENCE vs. COPY**/

/** ARRAYS **/

// Reference - will change the original
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
players[3] = 'BOB';
console.log(team);
console.log(players);

// Copy - will not change the original
const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const teamcopy1 = players.slice();
const teamcopy2 = [].concat(players);
const teamcopy3 = [...players];
const teamcopy4 = Array.from(players);

players2.pop();
teamcopy1[3] = 'JOHN';
teamcopy2[3] = 'JANE';
teamcopy3[3] = 'JJ';
teamcopy4[3] = 'weewoo';
console.log(players2);
console.log(teamcopy1);
console.log(teamcopy2);
console.log(teamcopy3);
console.log(teamcopy4);



/** OBJECTS **/

// Reference - will change the original
const person = {
    name: 'Wes Bos',
    age: 80
};
const captain = person;
captain.number = 01;
console.log(person, captain);

// Copy - will not change the original
const person2 = {
    name: 'Wes Bos',
    age: 80
};

const objCopy1 = Object.assign({}, person2, { number: 01 });
const objCopy2 = { ...person, number: 99 };
console.log(person2);
console.log(objCopy1);
console.log(objCopy2);


/** GOTCAHS */
// This is only 1 level deep - both for Arrays and Objects. 

const person3 = {
    name: 'joe',
    age: 99,
    social: {
        twitter: '@joe',
        facebook: 'joe@gmail.com'
    }
}

const shallowCopy = { ...person3 };

shallowCopy.age = 24;
shallowCopy.social.twitter = "@uhoh";
console.log(person3, shallowCopy);
console.log(person3.social, shallowCopy.social);

// There are better ways to do this...
const person4 = {
    name: 'jane',
    age: 50,
    social: {
        twitter: '@jane',
        facebook: 'jane@gmail.com'
    }
}
const cheapCopy = JSON.parse(JSON.stringify(person4));
cheapCopy.age = 77;
cheapCopy.social.twitter = '@nice';

console.log(person4, cheapCopy)
console.log(person4.social, cheapCopy.social)

