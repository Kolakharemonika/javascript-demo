
'use strict';

const restaurant = {
    name: 'classico italio',
    location: ['mumbai', 'pune'],
    categories: ['mirchi', 'tomato', 'potato', 'salad', 'pickels'],
    order: function (ing1, ing2, ing3) {
        console.log(`here is your order ${ing1}, ${ing2}, ${ing3} `);
    },
    openingHours: {
        'mon': { open: 1, close: 12 },
        'wed': { open: 0, close: 12 },
        'fri': { open: 10, close: 6 },
    }
}

console.log(restaurant, 'restaurant');

let [a, , b] = restaurant.categories;
console.log(a, b);//mirchi potato skip middle element

let spreadOp = restaurant.categories
let locatn = restaurant.location

console.log(spreadOp, 'spreadOp = restaurant.categories');
spreadOp = [...restaurant.categories]
console.log(spreadOp, 'spreadOp ==>spreadOp = [...restaurant.categories]');
spreadOp = [1, 2, 3, ...restaurant.categories]
console.log(spreadOp, 'spreadOp spreadOp = [1,2,3,...restaurant.categories]');

spreadOp = [...locatn, ...spreadOp]
console.log(spreadOp, 'spreadOp');
console.log('swiching values [a, b] = [b, a] ');
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

let takingsignlestring = 'mumbai';
console.log(...takingsignlestring, '...takingsignlestring');
console.log(takingsignlestring, 'takingsignlestring');
takingsignlestring = [...takingsignlestring]
console.log(takingsignlestring, "single string to array of each chars=>  ['m', 'u', 'm', 'b', 'a', 'i']");
let orders = restaurant.order('biryani', 'chips', 'salad')
// console.log(orders, 'this is function order()');
orders = ['burger', 'pizza', 'coke'];
restaurant.order(...orders)

console.log('rest & spread operators ');
const arr = [1, 2, ...[3, 4]]
console.log(arr, 'right side spread operators [1, 2, ...[3, 4]]');
let arr2 = [restaurant.name, ...restaurant.location, ...restaurant.categories];
console.log(arr2, 'all array items into one');

const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others, '[1, 2, 3, 4, 5] ===> 1, 2 ,[3, 4, 5] rest operators');

const add = (...numbers) => {
    let sum = 0;
    // numbers.forEach((i) => {
    //     sum += i
    // })
    for (const item of numbers) sum += item
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }

    console.log(sum, 'sum');
}
add(1, 2, 3)
add(1, 2, 3, 7, 8)

const xy = [23, 4, 5]
add(...xy)
console.log('-------------------------------------');
const oerderPizza = (mainIng, ...otherIng) => {
    console.log(`this is ${mainIng}`); //burger
    console.log(`this is ${otherIng}`); //pizza, coke
}
oerderPizza(...orders)// burger, pizza, coke
oerderPizza('onion', 'spinach', 'olives', 'cheeze')
console.log('-------------------------------');


let cost = 0;
console.log(cost || 10, 'cost || 10'); //10
console.log(cost ?? 10, 'cost ?? 10'); //0 nullish operator is null or undefined only--> '' & 0 as true
console.log(cost && 10, 'cost && 10'); //0 false
console.log('-------------------------------');


// let allplyaers = [...players1, ...players2]
// console.log(allplyaers, 'allplayers');

// players1('bayers', a, b, c, d, e, f, g, f, i, h);
// players2('munich', a, b, c, d, e, f, g, f, i, h);

// let player1final = [...allplyaers, 't', 'c', 'p']

const game = {
    team1: 'Bayern munich',
    team2: 'borrussia dortmund',
    players: [['b', 'a', 'b', 'cc', 'd', 'e', 'f', 'g', 'f', 'i', 'h'], ['z', 'a', 'b', 'cc', 'd', 'e', 'f', 'g', 'f', 'i', 'h']],
    score: '4:0',
    scored: ['ll', 'gg', 'dd', 'hh'],
    date: 'nov',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
}

let i = 0;
for (const player of game.scored) {
    i++;
    console.log(`Goal ${i}:  ${player}`);
}

//game.scored.entries()  array to display as index and value
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}:  ${player}`);
}

let avg = 0;
const odds = Object.values(game.odds)
for (const odd of odds) {
    avg += odd
}
avg = avg / odds.length
console.log(avg, 'avg');

console.log(Object.values(game.odds)); //getting all values
console.log(Object.keys(game.odds)); //getting all keys
console.log(Object.entries(game.odds)); //getting all data with keys and value, index

let mk = Object.values(game.odds)
let mkk = [game.team1, game.team2]
for (const [team, odd] of Object.entries(game.odds)) {
    const str = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd ${str} : ${odd}`);
}

// let players1 = [ ...game.players[0]]
// let players2 = [ ...game.players[1]]
const [players1, players2] = game.players
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

let allplyaers = [...players1, ...players2]
console.log(allplyaers, 'allplayers');

let player1final = [...players1, 't', 'ce', 'p']
console.log(player1final);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
for (const item of players1) console.log(item);

console.log(restaurant.openingHours);

const days = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
console.log('opetional chaining & nullish operator');
for (const day of days) {
    //    restaurant.openingHours.day --wrong
    // console.log(restaurant.openingHours[day].open); //error undefined
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    const close = restaurant.openingHours[day]?.close ?? 'closed';
    console.log(`On ${day} , we open at ${open} and we close at ${close}`);
    // restaurant.openingHours[day].open
}
console.log('------------------------------');
restaurant.order?.('tomato', 'chilies', 'onion') ?? console.log('method does not exist');

restaurant.orders?.('tomato') ?? console.log('method does not exist');

const users = [{ name: 'monika', email: 'abc@hhh.knh' }]
console.log(users[0].name);
console.log(users[0].sirname ?? 'user not found'); //undfined 'user not found'
console.log(users[0]?.name || 'user not found');


console.log('------------------------------');
const properties = Object.keys(restaurant.openingHours)
console.log(properties, ' Object.keys(restaurant.openingHours)'); //['mon', 'wed', 'fri']

console.log(`we are open on ${properties.length} days }`);
for (const day of Object.keys(restaurant.openingHours)) {
    console.log(day);
}
const values = Object.values(restaurant.openingHours)
console.log(values);
const entry = Object.entries(restaurant.openingHours)
console.log(entry);

for (const [key, { open, close }] of entry) {
    console.log(key, open, close);
}
console.log('------------------------------');
console.log('like array there is new Set() ');
const staff = ['waiter', 'chef', 'waiter', 'chef', 'manager'];
console.log(staff, 'staff');
// const staffUnique = new Set(staff) //set method
const staffUnique = [...new Set(staff)]
console.log(staffUnique, 'staffUnique using new Set method');
// let dist = staff.pipe(distinct()) //rxjs

console.log('like Object there is new Map() ');
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze, Italy');
rest.set(2, 'to be deleted')
console.log(rest, 'using Map method ');
rest.set('categories', ['mirchi', 'tomato', 'potato', 'salad', 'pickels']).set('open', 11).set('close', 23).set(true, 'we are open :D').set(false, 'we are closed :(')

console.log(rest.get('categories'), 'rest.get(categories) ')
const time = 21;
// console.log(rest.get());
let mkkk = rest.get(time > rest.get('open') && time < rest.get('close'))
console.log(mkkk, 'we can set, delete array using map()');
rest.delete(2)

console.log(rest.size, 'size 7 rest.size ,rest.clear');
// rest.clear() //clear all array
console.log(rest);
const arr1 = [1, 2];
rest.set(arr1, 'test array [1,2] as key');
rest.set(document.querySelector('h1'), 'heading')
console.log('we can select queryselector ');
const question = new Map([['question', 'what is the best programming language in the world'],
[1, 'C'], [2, 'Java'], [3, 'Javascript'],
['correct', 3], [true, 'Correct 😊'], [false, 'Try again!']]);

console.log(question);

//convert object to map 
console.log(restaurant.openingHours);
console.log(Object.entries(restaurant.openingHours), 'object with wntries');
const hoursMap = new Map(Object.entries(restaurant.openingHours), 'convert object to map')

console.log(hoursMap);
//quizzzz
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`select answer ${key}: ${value}`);
    }

}

// const answer = Number(prompt('your answer')) //correct 
const answer = 3
console.log(answer);
console.log(question.get(question.get('correct') === answer ? true : false3));

console.log('convet map to array [...question]', [...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log('simple List ==> Arrays or Sets');
console.log('key/pairs List ==> Objects or Maps');
///////
console.log('----------------------------------------------');

const gameEvent = new Map([
    [17, 'goal'],
    [36, 'sub'],
    [47, 'goal'],
    [61, 'sub'],
    [64, 'yello'],
    [69, 'red'],
    [70, 'sub'],
    [72, 'sub'],
    [76, 'goal'],
    [80, 'goal'],
    [92, 'yello'],
]);
console.log(gameEvent);
console.log(gameEvent.values());
// const eventsDist = new Set(gameEvent.values()); //correct 
const eventsDist = [...new Set(gameEvent.values())];
console.log(eventsDist);//unique events

gameEvent.delete(64);
// for (const [key, value] of gameEvent) {
//     if (key > 60 && value == 'yello') {
//         gameEvent.delete(key);
//     }
// }
let time1 = [...gameEvent.keys()].pop()
console.log(time1);
console.log(`An event happened, on avg , every ${time1 / gameEvent.size} minutes`);

for (const [key, value] of gameEvent) {
    const str = key <= 45 ? 'First' : 'Second'
    console.log(`[${str} Half] ${key}: ${value}`);
}




// Example usage
var amount = 56789;
var words = amountToWords(amount);//amount to word conversion
console.log(words, 'amountToWords(56789) amount to word conversion');

console.log('----------------strings=-----------------');
console.log('split join trim');
const [firstName, lastName] = 'Monika kolakhare'.split(' ')
const newName = ['Miss.', firstName, lastName.toUpperCase()]
console.log(newName);
console.log(newName.join(' '));
let newName1 = '  monika k  '
console.log(newName1.trim(), 'trim space before & after');

const capitalizeName = (name) => {
    const names = name.split(' ')
    let upperCase = [];
    for (const n of names) {
        // upperCase.push(n[0].toUpperCase() + n.slice(1));
        upperCase.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(upperCase);
    console.log('convert array to string ==use join [0:"Monika", 1:"Kolakhare"] =>Monika Kolakhare ');
    console.log(upperCase.join(' '));
}
capitalizeName('monika kolakhare');
for (let j = 9; j > 0; j--) {
    console.log(j.toString().padStart(j, '+'))
}
for (let j = 1; j < 9; j++) {
    console.log(j.toString().padStart(j, ' ').padEnd(9, '*'));
}
for (let j = 1; j < 9; j++) {
    console.log(j.toString().padStart(j, ' '))
}
for (let j = 1; j < 9; j++) {
    console.log(j.toString().padEnd(j, '+'))
}
for (let j = 9; j > 0; j--) {
    let mk = j.toString().replace(j, ' ')
    console.log(mk.toString().padStart(j, ' ').padEnd(10, '*'));
}

const maskCreditcard = (number) => {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}
console.log('maskCreditcard', maskCreditcard(565659989996));

const str3 = ' repeating the line.'
console.log('repeating str use - str.reapete(5)==>', str3.repeat(5));

for (let j = 1; j < 9; j++) {
    console.log(j.toString().repeat(j))
}

const flights = '_Delayed_Departure;fao93444444;txl2133232323;11:25+_Arrived;fao93444444;txl2133232323;11:25+_Delayed_Arraival;fao93444444;txl2133232323;11:25+_Departure;fao93444444;txl2133232323;11:25'
// let flight1 = flight.replaceAll('_', ' ').split('+')
// console.log(flight1);
const getUpper = str => str.slice(0, 3).toUpperCase()
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const finalstr = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll('_', ' ')} ${getUpper(from)} to ${getUpper(to)} (${time.replace(':', 'h')})`;
    console.log(finalstr.padStart(36));
    // let fl = fight;
    // let f2 = fl.trim().replaceAll(':', 'h').split(';')
    // fl = fl.replace(f2[1], f2[1].slice(0, 3).toUpperCase()).replace(f2[2], f2[2].slice(0, 3).toUpperCase()).replace(':', 'h')
    // fl = fl.replace(f2[3], f2[3].padEnd(6, ')').padStart(7, '('))
    // console.log(fl.split(';').join(' ').padStart(50));
}
console.log('---------------------------------');
console.log('we can make div as editable using this property contenteditable="true" ');
// document.querySelector('#demo').value = `<div class='right'>gfghaghda</div>`
// var p = document.createElement("<div class='right'></div>");
// var t = document.createTextNode("gfghaghda");
// p.appendChild(t);
// document.body.appendChild(p);


// var p = document.createElement("TEXTAREA");
// var t = document.createTextNode("At w3schools.com you will learn how to make a website.");
// p.appendChild(t);
// document.body.appendChild(p);
// var ContentofDiv = ('#txtDiv').html();
document.querySelector('#txtDiv').innerHTML = `<div  class="right">
dfgrgtf
<ul><li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li></ul>
</div><div  class="right">
dfgrgtf
<ul><li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li></ul>
</div><div  class="right">
dfgrgtf
<ul><li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li>
<li>gdwjhwghdw</li></ul>
</div>`
console.log('---------------------------------');
console.log('function returning function');
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
const grretinghey = greet('Hey');
grretinghey('Monika');
grretinghey('Monu');

greet('Hellow')('Minu'); //other type

const greet1 = greeting => name => console.log(`${greeting} ${name}`);// arrow function

greet1('Hellow')('Minu'); //other type 
console.log(greet1('Hellow'), "greet1('Hellow')");
// const plane22 = {
//     name: 'air boeing',

// }
// plane22.amount2 = 100;
// plane22.buy = () => {
//     console.log(this, 'this');
//     this.amount2++;
//     console.log(this.amount2);
// }
// plane22.buy()
// console.log(plane22);
// // document.querySelector('.buy').addEventListener('click', plane.buy) // passing buy bttuon here
// document.querySelector('.buy').addEventListener('click', plane22.buy.bind(plane22))


// const txtfieldEl = document.querySelector('#txtfield');

// txtfieldEl.addEventListener('focusout', () => {
//     const textValue = txtfieldEl.value;
//     const fullname = textValue.split(' ');

//     if (textValue.length >= 9 && fullname.length == 2) {

//         if (fullname[0].length >= 4 && fullname[1].length >= 4) {
//             console.log('coreect');
// txtfieldEl.classList.remove('border-red');
//         } else {
//             console.log('length greter than 4');
//  txtfieldEl.classList.add('border-red');
//         }

//     } else {
//         console.log('invalid');
//  txtfieldEl.classList.add('border-red');
//     }
// });

const txtfieldEl = document.querySelector('#txtfield');
txtfieldEl.addEventListener('focusout', () => {
    const textValue = txtfieldEl.value;

    const [fistname, lastname] = textValue.split(' ').length == 2 ? textValue.split(' ') : [0, 0];

    if (textValue.length >= 9 && fistname.length >= 4 && lastname.length >= 4) {
        txtfieldEl.classList.remove('border-red');
    } else {
        txtfieldEl.classList.add('border-red');
    }

});

// IIFE
(function () {
    console.log('This will never run again, IIFE example immediatly envoke function()');
})();

(() => console.log('never call agin ()'))();

console.log('closure');
const secureBooking = () => {
    let passanger = 0; //always accessible
    return () => {
        passanger++;
        console.log(`${passanger} passngers`);
    }
}
const booker = secureBooking(); //having return fn
booker(); //passenger=1
booker(); //passenger=2
booker(); //passenger=3
console.log('you will get closer,ex human with bag');
console.dir(booker);// 'you will get closer,ex human with bag'
console.log('--------------------------------------');
console.log('arr.slice(-1) way to take last element of array / string');
//array methods mutable
console.log('array methods mutable');

let arr4 = ['a', 'b', 'c', 'd', 'e']
console.log(arr4, 'arr4');
console.log(arr4.splice(2), 'arr4.splice(2)');
console.log(arr4.reverse(), 'arr4.reverse()');
let arr3 = ['a', 'b', 'c', 'd', 'e']
console.log(arr4.concat(arr3), 'arr4.concat(arr3)');
console.log([...arr3, ...arr4], '[...arr3, ...arr4]');
console.log(arr4.concat(arr3).join(' '), "==> arr4.concat(arr3).join(' ')");

console.log(arr4[0], arr4.at(0), ' arr4[0] sameee  arr4.at(0)');
//getting last element of array
console.log(arr3[arr3.length - 1], 'arr4[arr4.length - 1] getting last element of array');
console.log(arr3.slice(-1)[0], 'arr4.slice(-1)[0] getting last element of array');

arr3.forEach((i, e, wholearray) => {
    console.log(e + 1, i);
})

for (const [i, arr] of arr3.entries()) {
    console.log(i, arr);
}
// arr3.reverse().forEach(e => console.log(e))
console.log('foreach on map');
gameEvent.forEach((value, key, map) => {
    console.log(`${key}: ${value}`,);
});

console.log('---------------------------------------------------------');
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//return new array with some changes == map method
console.log(movements.map(mov => Math.trunc(mov * eurToUsd)));

//filter create new array if condition is true
const deposites = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0);
console.log(deposites, 'deposites', withdrawal, 'withdrawal');

//reduce method giv value as addition of whole array
console.log(movements.reduce((acc, mov) => acc + mov));

//3 methods in one- filter map reduce
const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => Math.trunc(mov * eurToUsd)).reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositUSD, '3 methods in one- filter map reduce');

let newArr = [220, 495, -440, -715, -143, 77, 1430, 3300]
//we can use reduce method for addition and getting maximum minimum value from array
const max = newArr.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]); //acc = movements[0]

console.log(max, 'maximun value');

const movementUsd = [];
for (const mov of movements) {
    movementUsd.push(Math.trunc(mov * eurToUsd))
}
console.log(movementUsd);

//find method return "first occured/one" 'element' only -not areturn new array like map/filter
console.log(movements.find(mov => mov < 0), ' find method we can use ');

// boolean value giving methods---

//some method to check if codition is true or false, checks every entry --boolean
console.log(movements.some(mov => mov > 3000));

//some() and includes() methods are same = true or false
console.log(movements.some(mov => mov === 3000));
console.log(movements.includes(3000));
const acc4mov = [430, 1000, 700, 50, 90];

//returns true checks every mov is greter than 0 or not == every method giving boolean 
console.log(acc4mov.every(mov => mov > 0)); //true

console.log(account1.movements.every(mov => mov > 0)); //false

//find, every, some, includes, map, filter, reduce
//flat, flatmap

//flat method for taking all nested array in one array 
const arr5 = [1, 2, [1, 2, 3], [4, 5]]
console.log(arr5.flat(), 'array.flat() going one level deep'); //going one level deep
console.log([1, 2, [1, [2, 3]], [4, [5, [8, 9]]]].flat(3), 'nested use flat(lastlevel)');

//taking all movements in one array 
const accountMovements = accounts.map(acc => acc.movements)
const allMovements = accountMovements.flat()
console.log(accountMovements, allMovements);
console.log(allMovements.reduce((acc, mov) => acc + mov, 0));

console.log(accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0));

//flatmap
console.log(accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0));
console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0));
console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0));

// -------------------------------------------------

//string sort method 
const owners = accounts.map(acc => acc.owner)
console.log(owners.sort());

//number sort methods 
// const mv=movements.sort()

console.log(acc4mov.sort(), 'not correct sorted'); //not in correct sorted format 
console.log(acc4mov.sort((a, b) => a - b), 'sorted correctly');
const accending = movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(accending, 'sorted array in accending order - this is for negative and positive values');


const deccending = movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
});
console.log(deccending);

//same as abv -shortcut accending decending order/ sorted array number
console.log(movements.sort((a, b) => a - b));
console.log(movements.sort((a, b) => b - a));

//---------------------------------------------------------------------------------------------------------------------

//Array methods - how to create new array types, declarations
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//empty array
console.log(new Array(7));

//fill 'array' method
console.log(new Array(7).fill(1)); //[1, 1, 1, 1, 1, 1, 1]
console.log(new Array(7).fill(1, 3)); //fill only after element 3
console.log(new Array(1, 2, 3, 4, 5, 6, 7).fill(23, 1, 3));

//Array 'from' method
console.log(Array.from({ length: 7 }, () => 1)); //[1, 1, 1, 1, 1, 1, 1]
console.log(Array.from({ length: 7 }, (cur, i) => i + 1)); //[1, 2, 3, 4, 5, 6, 7]
//-----------------------------------------------------------


let bankDeposit = accounts.map(acc => acc.movements).flat();
bankDeposit = accounts.flatMap(acc => acc.movements);
console.log(bankDeposit);

//sum of all deposites
const bankDepositSum = bankDeposit.filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//number of deposite greater than 1000
let numDeposits1000 = bankDeposit.filter(mov => mov >= 1000).length
console.log(numDeposits1000); // 6

numDeposits1000 = bankDeposit.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000); // 6

// sum of deposits & withdrawal
// const depositesSums = bankDeposit.filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
// const withdrawalSums = bankDeposit.filter(mov => mov < 0).reduce((sum, cur) => sum + cur, 0);
// console.log(depositesSums);
// console.log(withdrawalSums);

// let { depositesSums, withdrawalSums } = bankDeposit.reduce((sum, cur) => {
//     cur > 0 ? sum.depositesSums += cur : sum.withdrawalSums += cur;
//     return sum;
// }, { depositesSums: 0, withdrawalSums: 0 });

// console.log(depositesSums);
// console.log(withdrawalSums);

let { depositesSums, withdrawalSums } = bankDeposit.reduce((sum, cur) => {
    sum[cur > 0 ? 'depositesSums' : 'withdrawalSums'] += cur;
    return sum
}, { depositesSums: 0, withdrawalSums: 0 });

console.log(depositesSums);
console.log(withdrawalSums);

////////////////////////////////////////////
const a1 = [1, 0, 2, 6, 7, 8, 25, 7, 1, 1, 9]
console.log(Math.max(...a1));
console.log(Math.min(...a1));
console.log(Math.trunc(Math.random() * 10), '0 to 10 random number');
console.log(Math.trunc(Math.random() * 6) + 1, 'not containing 0')
const ramdomInt = (min, max) => {
    //floor worked better on -ve numbers
    return Math.floor(Math.random() * (max - min) + 1) + min;
}
console.log(ramdomInt(10, 20));

//Maths methods- Rounding integers
//trunc remove all fraction values/ after .
console.log(Math.trunc(23.7687676), 'trunc  23.7687676');

//round the figure depends on 0-5 ,6-9 near by value
console.log(Math.round(23.3687676), 'round 23.3687676');
console.log(Math.round(23.7687676), 'round 23.7687676');

//ceil into next value whatever(fr>0) fraction is
console.log(Math.ceil(23.09687676), 'ceil 23.0687676');
console.log(Math.ceil(23.9687676), ' ceil 23.9687676');

//floor into current value whatever fraction is
console.log(Math.floor(23.3687676), 'floor 23.3687676');
console.log(Math.floor(23.9687676), 'floor 23.9687676');

//rounding decimals 
console.log((2.7).toFixed(0), '(2.7).toFixed(0)'); //3
console.log((2.7).toFixed(3), '(2.7).toFixed(3)'); //2.700
console.log((2.345).toFixed(2), '(2.345).toFixed(2)'); //2.35
console.log(+(2.234).toFixed(2), '+(2.234).toFixed(2)'); //2.23

//settimeout 
const ing = ['olives', '']
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log('after 3 seconds');
}, 3000, ...ing);

if (ing.includes('spinach')) clearTimeout(pizzaTimer);

setInterval(() => {
    // console.log(new Date());
}, 1000);

const amountEl = document.getElementById('amount');
const wordEl = document.getElementById('inwords')


const firstline = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
const secondline = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    const str2 = ('000000000' + num)
    if ((num = num.toString()).length > 9) return 'overflow';

    const n = str2.substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    console.log(n, 'n');
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (firstline[Number(n[1])] || secondline[n[1][0]] + ' ' + firstline[n[1][1]]) + 'crore ' : '';
    console.log(str);
    str += (n[2] != 0) ? ((str != '') && (n[3] == 0) ? 'and ' : '') + (firstline[Number(n[2])] || secondline[n[2][0]] + ' ' + firstline[n[2][1]]) + 'lakh ' : '';
    console.log(str);
    str += (n[3] != 0) ? ((str != '') && ((n[4] == 0) && (n[5] == 0)) ? 'and ' : '') + (firstline[Number(n[3])] || secondline[n[3][0]] + ' ' + firstline[n[3][1]]) + 'thousand ' : '';
    console.log(str);
    str += (n[4] != 0) ? ((str != '') && (n[5] == 0) ? 'and ' : '') + (firstline[Number(n[4])] || secondline[n[4][0]] + ' ' + firstline[n[4][1]]) + 'hundred ' : '';
    console.log(str);
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (firstline[Number(n[5])] || secondline[n[5][0]] + ' ' + firstline[n[5][1]]) : '';
    str += (str != '') ? ' only ' : '';
    return str;
}

document.getElementById('amount').oninput = function () {
    document.getElementById('inwords').innerHTML = inWords(document.getElementById('amount').value);
};

function amountToWords(amount) {
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    var words = [];

    var millions = Math.floor(amount / 1000000);
    amount %= 1000000;
    var thousands = Math.floor(amount / 1000);
    amount %= 1000;
    var hundreds = Math.floor(amount / 100);
    amount %= 100;
    var tensAndOnes = amount;

    if (millions > 0) {
        words.push(convertThreeDigits(millions) + ' million');
    }
    if (thousands > 0) {
        words.push(convertThreeDigits(thousands) + ' thousand');
    }
    if (hundreds > 0) {
        words.push(convertThreeDigits(hundreds) + ' hundred');
    }
    if (tensAndOnes > 0) {
        words.push(convertTwoDigits(tensAndOnes));
    }

    return words.join(' ');

    function convertThreeDigits(number) {
        var words = [];
        var hundreds = Math.floor(number / 100);
        number %= 100;
        var tensAndOnes = number;

        if (hundreds > 0) {
            words.push(units[hundreds] + ' hundred');
        }
        if (tensAndOnes > 0) {
            words.push(convertTwoDigits(tensAndOnes));
        }

        return words.join(' ');
    }

    function convertTwoDigits(number) {
        if (number < 20) {
            return units[number];
        } else {
            var tensDigit = Math.floor(number / 10);
            var onesDigit = number % 10;
            return tens[tensDigit] + ' ' + units[onesDigit];
        }
    }
}

//comparing two array
const compareArrays = (a, b) => a.length === b.length && a.every((element, index) => element === b[index]);

let array1 = [11, 22, 33];
let array2 = [21, 22, 23];
let array3 = [11, 22, 33];

/**let array1 = [11, null, 33];
let array2 = [21, 22, 23];
let array3 = [11, undefined, 33];

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //false
*/

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //true


const fetchbtn = document.querySelector('.fetch');

const handlefetchrequest = function () {
    const req = new XMLHttpRequest();
    req.open('GET', 'ajaxdemo.txt', true); //true for async
    // req.onprogress=
    req.onload = function () {
        console.log(this.responseText);
    }
    req.send();

}
fetchbtn.addEventListener('click', handlefetchrequest)


const postbtn = document.querySelector('.postbtn');

const handlepostrequest = function () {
    const req = new XMLHttpRequest();
    req.open('POST', 'https://jsonplaceholder.typicode.com/posts', true); //true for async
    // req.onprogress=
    req.onload = function () {
        console.log(this.responseText);
    }
    const params = `{"name":"textt},"salary":"123"}`
    req.send(params);

}
//we need in json 

postbtn.addEventListener('click', handlepostrequest)