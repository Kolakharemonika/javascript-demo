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
 * waiting for finish line of code
 * 
 * Asynchronous
 * line of code & 'setTimeout'-timer fn
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
let html;
const renderCountry = (data, className = '') => {
    const { name, symbol } = Object.values(data.currencies)[0];
    const lang = Object.values(data.languages).join(' ');

    html = `<article class="country ${className}">
             <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
         <p class="country__row"><span>🗣️</span>${lang}</p>
          <p class="country__row"><span>💰</span>${name} : ${symbol}</p>
        </div>  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1; //in finally we write

}

function renderNeighbour(countryCode) {
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/alpha/${countryCode}`);
    request.send();

    request.addEventListener('load', function (e) {
        e.preventDefault()
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, 'neighbour')
    })
}

const getCountryAndNeighbour = (countryName) => {
    const request = new XMLHttpRequest();
    // https://restcountries.com/v3.1/name/{name} //https://restcountries.com/ website
    request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
    request.send();

    request.addEventListener('load', function (e) {
        e.preventDefault()
        // const data = JSON.parse(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Object.entries(data.currencies).filter(lang => console.log(lang[1].name));
        // const currency = Object.values(data.currencies)[0].name;
        // const { name, symbol } = Object.values(data.currencies)[0];
        // console.log(name, symbol);

        // let langs = []
        // Object.entries(data?.languages).filter(lang => langs.push(lang[1]));
        // Object.values(data.languages).join(' ');

        //render country
        renderCountry(data);

        //render neighbour country
        if (!data.borders) return;

        // for (const country of data.borders) {
        //     renderNeighbour(country);
        // } 
        //or

        const [neighbour] = data.borders;
        renderNeighbour(neighbour);
        // console.log(neighbour);
    })
}

//fiirst type
// getCountryAndNeighbour('india');

//callback hell example
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

//we are fetching data as promise
// const req = fetch(`https://restcountries.com/v3.1/name/${countryName}`);
// console.log(req); //it execute first

// const getCountryData = function (countryName) {
//     // const req = fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(function (response) {
//     //     console.log(response);
//     // });

//     const req = fetch(`https://restcountries.com/v3.1/alpha/${countryName}`).then(function (response) {
//         console.log(response);
//         return response.json();
//     }).then(function (data) {
//         [data] = data
//         console.log(data);
//         renderCountry(data);
//     });
// }

// const getCountryData = function (countryCode) {
//     const req = fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((response) => response.json()).then((data) => {
//         //country    
//         renderCountry(data[0]);

//         const neighbour = data[0].borders[0];
//         console.log(neighbour);

//         if (!neighbour) return;
//         //neighbour
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then((response) => response.json()).then((data) => renderCountry(data[0], 'neighbour'));

//     });
// }


//callback hell
// const getCountryData = function (countryCode) {
//     const req = fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((response) => response.json()).then((data) => {
//         //country    
//         renderCountry(data[0]);

//         const neighbour = data[0].borders[0];
//         console.log(neighbour);

//         if (!neighbour) return;
//         //neighbour
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then((response) => response.json()).then((data) => data)

//     }).then((data) => {
//         renderCountry(data[0], 'neighbour');
//     });
// }

// //best to do this chaining of promises
// const getCountryData = function (countryCode) {
//     const req = fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((response) => response.json()).then((data) => {
//         //country    
//         renderCountry(data[0]);

//         const neighbour = data[0].borders[0];
//         console.log(neighbour);

//         if (!neighbour) return;
//         //neighbour
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

//     }).then((response) => response.json()).then((data) => {
//         renderCountry(data[0], 'neighbour');
//     });
// }


const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1; //in finally we write
}

const getJSON = function (url, errorMsg = 'Something went wrong!') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    })
}

//catch error
const getCountryData = function (countryCode) {
    const req = getJSON(`https://restcountries.com/v3.1/alpha/${countryCode}`, 'Country not found').then((data) => {
        //country    
        renderCountry(data[0]);

        const neighbour = data[0].borders[0];
        console.log(neighbour);

        if (!neighbour) throw new Error('No neighbour found!');

        //neighbour country
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');

    }).then((data) => {
        renderCountry(data[0], 'neighbour');
    }).catch(err => {
        console.log(`${err} ⛔⛔⛔`);
        renderError(`OOPs! Something went wrong ⛔⛔ ${err.message}. Try again!`)
    }).finally(() => {
        countriesContainer.style.opacity = 1;
    });

}

btn.addEventListener('click', function () {
    // getCountryAndNeighbour('india'); //using XMLReq get method
    // getCountryData('CN'); //using fetch method
});

// getCountryData('germany'); //error shown on screen


// const req = new XMLHttpRequest();
// req.open('GET', 'https://covid-api.mmediagroup.fr/v1/history');
// req.send();

// req.addEventListener('load', function (request) {

//     console.log(request);
// })

const getPosition = () => {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(pos => resolve(pos), err => reject(err));

        //both method is same
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
// getPosition().then(pos => console.log(pos));

//not need to callback, very simply we can fetch promise
const whereAmI = async function (country) {

    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    console.log(lat, lng);

    //countrt  by geoposition --reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`)
    const dataGeo = await resGeo.json()
    console.log(dataGeo.country, 'dataGeo');

    console.log(dataGeo, 'dataGeo');
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json();
    console.log(data[0]);
    // renderCountry(data[0])
    /**
     * same as
     *without async await --> fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>console.log(res))
     */
}
whereAmI('india');



