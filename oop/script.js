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
console.log(mk, mk instanceof Person);

