'use strict';

/** OOP in Javascript
 * 
 * 1)custructor function in javascript
 * technique to create objects from a function
 * this is how built-in objects like arrays, Maps, Sets
 * 
 * 2)ES6 Classes(modern way) 
 * 
 * 3)Object.create()
 * easiest way of linking an object to a prototype object
 * 
 * 4 pillars
 * ABSTRACTION, ENCAPSULATION, INHERITANCE, POLYMORPHISM
 * 
 */

//like constructor
const Person = function (firstname, birthyear) {
    // console.log(this, firstname, birthyear);

    //before assigning this-- "this" is {}
    this.firstname = firstname;
    this.birthyear = birthyear;
}
// New {} empty object created
// function is called , this= {}
// {} linked to prototype
// function automatically return {}

// new Person('Monika', 1997);

// console.log(new Person('Monika', 1997)); // {} if this.firstname = firstname; not defined
const mk = new Person('Monika', 1997);
const mkk = new Person('Monikak', 2001);
// console.log(mk, mkk, mk instanceof Person);

//prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
    // console.log((2037 - this.birthyear));
}

mk.calcAge();

/**
 * Synchronous 
 * line by line execution
 * ex line of code and alert window
 * blocking
 * waiting for finidh line of code
 * 
 * Asynchronous
 * line of code & setTimeout-timer fn
 * (setTimeout running in background)
 * non-blocking
 * doesn't wait for finish its work
 */

//asynchronous
// const img = document.querySelector('.dog');
// img.src = '/img/inverted-dice-6.svg';
// img.addEventListener('load', function () {
//     img.classList.add('fadeIn'); //blur img
// });

// document.querySelector('p').style.width = '300px';

//search public APIS
// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getCountryByname = (countryName) => {
    const request = new XMLHttpRequest();
    // https://restcountries.com/v3.1/name/{name} //https://restcountries.com/ website
    request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
    request.send();

    request.addEventListener('load', function () {
        // const data = JSON.parse(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Object.entries(data.currencies).filter(lang => console.log(lang[1].name));
        // const currency = Object.values(data.currencies)[0].name;
        const { name, symbol } = Object.values(data.currencies)[0];
        // console.log(name, symbol);

        let langs = []
        // Object.entries(data?.languages).filter(lang => langs.push(lang[1]));
        // Object.values(data.languages).join(' ');

        const countryEl = document.querySelector('.countries')
        const html = `<article class="country">
             <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
         <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(' ')}</p>
          <p class="country__row"><span>💰</span>${name} : ${symbol}</p>
        </div>  </article>`;
        countryEl.insertAdjacentHTML('beforeend', html)
        countryEl.style.opacity = 1;
    })
}


getCountryByname('india');
getCountryByname('usa');
getCountryByname('pakistan');
getCountryByname('nepal');