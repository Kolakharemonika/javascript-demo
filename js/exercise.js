
"use srtict";

/**strict mode use for
 * dublicate arguments not allowed - func(mk,mk)
 * cannot declare variable without let var const, public vars
 * 
 * 
 */
/** arrow fn and normal fn diff
 * arguments 
 * syntax
 * this keyword-lexical scope
 * 
 */
/**
 * 1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
 */
let x = 32243; //reverse() array fn
console.log(x, Number(x.toString().split('').reverse().join('')));

let y = 'madam'
let z = 'nurses run'

function palindrom(str) {
    let exr = /[\s]/g;
    str = str.toLowerCase().replace(exr, '');

    let reverstr = str.split('').reverse().join('')
    if (str.length >= 1 && str == reverstr) {
        console.log('palindrom');
    } else {
        console.log('not');
    }

}
palindrom('nayan')

function strrrrr(str) {
    let str1 = str;
    str.split('').forEach((el, i) => {
        console.log(el)

        if (str1[i + 1]) {

            console.log(el + str1[i + 1])
        }
    })
    console.log();


}
strrrrr('dog')

/**Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw' */
let str2 = '8923025655';
console.log(str2.split('').sort().join('')); //0223555689

/**Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. */
let str3 = 'the quick brown fox';
str3.toLowerCase().split(' ').forEach(el => console.log(el[0].toUpperCase() + el.slice(1)))
//el.replace(el[0], el[0].toUpperCase());



/**
 *  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'

let str4 = 'Web Development Tutorial';
let str5 = str4.split(' ').map(el => el.length)
console.log(str5);
 */

/**
 * const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
a,e,i,o,u
Expected Output : 5

 */

let string2 = 'The quick brown fox'
let exe2 = ['a', 'e', 'i', 'o', 'u']
let count = 0;

const countofVowels = string2.replace(/[\s]/g, '').toLowerCase().split('').forEach(word => {

    // exe2.forEach(el => {
    //     if (word == el) ++count;
    // });
    if (word)
        console.log(count);
    return;
}
)
console.log(countofVowels);
/**
 * Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.
 */

function returnTypeof(arg) {
    return typeof arg;
}
console.log(returnTypeof(["hhgh", "kjh"]));
let arr1 = [31, 2, 33, 6, 8, 12, 4, 0, 22, 3];
console.log(arr1.sort((a, b) => a - b)[0], arr1.sort((a, b) => a - b)[arr1.length - 1]);
//maximun number, min number
console.log(Math.min(arr1));
console.log(Math.max(arr1));

let arrFactors = []
function factors(num) {
    console.log(num);
    if (num % 2 == 0) {

        console.log('even');
        // arrFactors.push()
    } else {
        console.log('odd');
        // arrFactors.push()
    }
}
factors(0)

/**
 * Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
 */
let arr2 = [134, [25, 10, 5, 2, 1]];
let coinsArr = [];
function amountTocoins(amount, coins) {
    // console.log(amount, coins);

    // function callfn(amount) {
    //     amount = amount - coins[0];
    //     coinsArr.push(coins[0])
    //     return amount
    // }

    if (amount >= coins[0]) {
        console.log(amount);

        if (amount % coins[0] == 0) {
            for (let i = 0; i < amount / coins[0]; i++) {
                coinsArr.push(coins[0]);
            }
            amount = 0;

        }
        // if ((amount % coins[0]) > coins[1]) {
        //     console.log(amount, 'amount');
        // }
        if ((amount % coins[0]) > 0) {

            console.log(Math.floor(amount / coins[0]), 'amount', amount % coins[0]);

            for (let i = 0; i < Math.floor(amount / coins[0]); i++) {
                coinsArr.push(coins[0]);
            }

            amount = amount % coins[0];

            if (amount >= coins[1]) {

                if (amount % coins[1] == 0) {
                    for (let i = 0; i < amount / coins[1]; i++) {
                        coinsArr.push(coins[1]);
                    }

                }
                if (amount % coins[1] > 0) {
                    // amount = amount % coins[1];
                    console.log(amount, 'amount');

                }
            }
            // for (let i = 0; i < amount / coins[0]; i++) {
            //     coinsArr.push(coins[0]);
            // }
        }
    }


    // coins.forEach(e => {
    //     if (amount < 0) return;

    //     // console.log(amount);

    //     // if (amount >= e) {
    //     //     amount = amount - e;
    //     //     coinsArr.push(e)
    //     //     if (amount >= e) {

    //     //         coinsArr.push(e)
    //     //     }
    //     // }


    // })

    console.log(coinsArr);
}
amountTocoins(...arr2);

// Write a JavaScript function to extract unique characters from a string.
let newstring = "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
//     let exr = /[\s]/g;

const staff = newstring.split('') //make array of it
// console.log(staff, 'staff');

const staffUnique = [...new Set(staff)] //array to [...new Set]
console.log(staffUnique.join('')); // make string/


/**. Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e' */

let str5 = 'abacddbec'
console.log(str5);
str5.split('').forEach((el, i) => {
    let str = str5.slice(i + 1)
    console.log(str, el);
    console.log(str5.includes(el));
    // if (str.includes(el)) {
    //     // return el;
    // }
})

/**
 * These primitive data types are immutable, meaning their values
 *  cannot be changed once assigned. When you perform operations on primitive 
 * values, you are creating new values rather than modifying the existing ones.
 * 
 * 
 * Non-primitive data types in JavaScript are mutable, meaning their values 
 * can be modified by adding, removing, or updating properties and methods
 */
console.log(typeof nullVal);  // Output: "object"
//function is first-class-citizen
/**
 * undefined **
 * absense of value/ not assigned a value
 * declared but has not been assigned a value
 * It is a primitive value.
 * Assignment: automatic
 * var x;
 * typeof undefined
 * 
 * 
 * null **
 *  absence of any 'object' value
 *  It is also a primitive value, but it is considered an object type. 
 * "this is a historical quirk in JavaScript."
 *  must be explicitly assigned to a variable 
 * let x = null;
 * typeof  object
 */

/** PROTOTYPE INHERITANCE **
 * ex object
 * // Constructor function
function Person(name) {
  this.name = name;
}

// Prototype method
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// Create objects using the constructor
var person1 = new Person("Alice");
var person2 = new Person("Bob");

// Objects inherit properties and methods from the prototype
person1.greet();  // Output: "Hello, my name is Alice"
person2.greet();  // Output: "Hello, my name is Bob"
 */

/**
 * How do you create a new object in JavaScript?
 * denoted by curly braces {}.
 *  * var person = {
  name: "John",
  age: 30,
  city: "New York"
};
 * 
 * 
 * Object.create():
 * var personPrototype = {
  name: "",
  age: 0,
  city: ""
};

var person = Object.create(personPrototype);
person.name = "John";
person.age = 30;
person.city = "New York";
 * 
 * 
 * 
 * 
 *  Constructor Function:
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

var person = new Person("John", 30, "New York");
 */
const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);

/** What are the key features of JavaScript?
The key features of JavaScript are:

Dynamic and weak typing
Prototype inheritance follow
First-class functions
Closures scope
Event-driven programming (mouse,click,keyboard)
Asynchronous programming using callbacks, promises, and async/await */

/** Lifecycle hook(8)
 *
 * constructor fired (not part of lifecycle in angular)- its part of typescript class
 *
 ** component level
 * ngonchanges * multiple
 * ngoninit --
 * ngdocheck *multiple
 *
 ** content projection
 * ngaftercontentinit --
 * ngaftercontentchecked *multiple
 *
 ** after component /child projection
 * ngafterviewinit --
 * ngafterviewchecked *multiple
 *
 * ngdestroy --
 *
 */

/**
 * decoupled
 * inject services
 */

/**
 * angular advantages **
 * SPA UI framework
 * client and server side
 * flexible, structured(modules) (oops friendly)
 * cross plateform(any os limus, mac, window)
 * open source
 * reusable code-services
 * Dependency injection
 * testability -unit testing-angular content 'spec.ts' file while gc component
 *
 *
 * npm ** online respository
 * library for node js
 * common library for 'nodejs and angular'
 * so thats why we install nodejs , npm install , cli install
 * node_modules- folder all downloaded packages(package.json -dependency, devDependency) from npm for angular
 * ex- bootstrap, jquery
 *
 * CLI tools **
 * use to initialize and develop angular app
 *
 *
 * components  **
 * most basic ui building block
 * css, html, ts, spec
 * decorators
 * selector- identify each component uniquely
 * template- html view
 * component initiat view & logic
 * component communicate with others component
 *
 * module in angular **
 * group of components ,core ui building block
 * you can group pipe, directive, services
 * @ngModule-decorators
 * declarations[],imports[],exports[],providers[],bootstrap[]
 * root module - browser module -only one
 * feature module - common module -one and more
 * useful for lazy loading
 *
 *
 * DOCUMENT OBJECT MANIPULATION (DOM)
 *
 * Directives **
 * structural *ngIF *ngFor *ngSwitch (adding removing element from DOM) *
 * Attribute  [ngClass] [ngStyle] (change appearence or behaviour of element) []
 * component  @ <selector> view change
 *
 * pipe -pure impure(parse value at every change, not good all time, resources use)
 *
 * decorator
 * decorator(@) (giving info about class type) = metadata (data about data)= annotations
 *
 * class decorators-
 * @NgModule -module class
 * @Component -component class
 * @Injectable -service class
 * @Directive
 * @Pipe
 *
 * Property decorators-
 * @Input
 * @Output
 * (child-parent)
 *
 * @ContentChild
 * @ContentChildren
 * @viewChild (html to ts view- model open)
 * @viewChildren
 * @HostBinding
 *
 * method decorators-
 * @Hostlisterner * directives
 *
 * parameter decorators-
 * @Inject
 * @Self
 * @Host
 * @SkipSelf
 * @Optional
 *
 *
 * Pipe **
 * built-in-pipe
 * pure -impure pipe
 *
 *
 * service
 * @component -providers:[service] -component level - only this perticular component & its child component
 * @NgModule - providers:[service] -module level- available for module component
 * @injectable :({providedIn : 'root'}) angular8 -application root level- available for all componet level
 * 'constructor used for injecting dependencies like services'
 * creating instance of service
 *
 *
 * java is single threaded /synchronous
 *
 * asynchronous
 * observables used in angular(part of RxJS library)
 * in javascript we used -promises
 * in angular - Observables & promises , async/await used
 *
 *
 * Observables & promises diff
 * Observables **
 * its Stream data, one by one , continue process
 * emits multiple value over a period of time  called streaming of data
 * lazy -they are not executed until we subscribe to them using subscribe() method
 * load when its required
 * we can cancle subscription
 * example youtube videos
 *
 * Observable-stram of data
 * observer- subscriber
 *
 * promises **
 * provided data when whole data is present
 * Emit a single value at a time
 * execute immdiately after creation
 * load automatically
 * not cancelable
 * example download movies
 *
 * RXJS **
 * Observable
 * Observal
 * Subscriber
 * Operators -filter, flat, flatMap, map, reduce, every, some, find, include
 * Subjects
 *
 *
 *
 *
 * Event delegation  **
 * Event delegation in JavaScript is a technique where you attach a single
 * event listener to a parent element, instead of attaching individual event
 * listeners to multiple child elements. The parent element then listens for
 * events that occur on its child elements and handles them accordingly.
 * Improved performance
 * Simplified event management
 * Dynamic elements
 *
 *
 *
 *
 * try {
  // Code that may throw an error
} catch (error) {
  // Error handling logic
} finally {
  // Cleanup or finalization logic
}
 *
 * http - AJAX / fetch
 *
 * Asynchronous programming ***
 * javascript is synchronous /interpreted programming, line by line execution
 * (program waits for each task to complete before moving on to the next one)
 * asynch non-sequencially execution on code,
 *  without blocking the execution of other tasks
 * callbacks, promises, async/await
 *
 * in angular we use promises and observables
 * Asynchronous programming is essential for handling time-consuming tasks in
 *  JavaScript without blocking the main execution thread. It allows applications
 *  to remain responsive, enhances user experience,
 * and facilitates efficient utilization of system resources.
 *
 *
 *
 * The slice() method returns a shallow copy of a portion of an array into a new array.
 *  It does not modify the original array. immutate array
 * The slice() method takes two optional parameters: start and end.
 *  It extracts elements starting from the
 *  start index (inclusive) up to, but not including, the end index (exclusive). *
 * slice() does not add or remove elements from the original array,
 *  while splice() can both remove and add elements.
 * splice() mutate array, remove , add /replace element in main array, deep copy array
 *
 *
 * Features and Benefits of 'Strict Mode': **
 * Prevents the use of undeclared variables:
 * (using variables without declaring them with var, let, or const results in a reference error.)
 * Disallows 'duplicate parameter 'names:
 * Makes 'this keyword' behavior more predictable
 *  In strict mode, 'this' remains undefined in such cases, which helps avoid accidental usage of the global object
 *
 *
 * Writing clean and efficient JavaScript code **
 * Use 'Descriptive' Naming:
 * Follow Consistent Formatting
 * Break Down Complex Tasks: Divide complex tasks into smaller -easier testing and debugging.
 * Use Strict Mode
 * Avoid Callback Hell:-use promises, async/await,
 * Optimize Loops
 * Minimize DOM Manipulations
 * Handle Errors Gracefully: Use try-catch blocks or error-handling mechanisms
 *
 *
 *
 *
 *
 *
 *
 *
 */


//Array 23 methods in short

/** ARRAY 23 METHODS IN SHORT

*** TO MUTATE ORIGINAL ARRAY ***

$ Add to original Array
    + .push (END)
    + .unshift (START)

$ Remove from original
    + .pop (END)
    + .shift (START)
    + .splice (remove/replace from any index)

$ Others
    + .reverse
    + .sort (acc, dec)
    + .fill (fisrt, last, middle)

*** A NEW ARRAY ***
$ Computed from original
    + .map (loop to change)

$ Filtered using condition
    + .filter

$ Portion of original
    + .slice

$ Adding original to other
    + .concat
    //spread operator

$ Flattening the original
    + .flat (taking all nested array in one array)
    + .flatMap (map & flat)

*** AN ARRAY INDEX ***
$ Based on value
    + .indexOf (value)

$ Based on test condition
    + findIndex

***AN ARRAY ELEMENT ***
$ Based on test condition
    + .find (will get ) login user

*** KNOW IF ARRAY INCLUDES ***
$ Based on value
    + .includes (boolean)

$ Based on test condition
    + .some (only one)
    + .every (group)

*** A NEW STRING ***
$ Based on seperator string
    + .join (from array to string convertor)

*** TO TRANSFORM TO VALUE ***
$ Based on accumulator
    + .reduce (addition of value)

*** TO JUST LOOP ARRAY ***
$ Based on callback
    + .forEach


 *
*/
/** OOP in Javascript
 *
 * 1)'constructor' function in javascript
 * technique to 'create objects' from a 'function'
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
/**
 *  * 1)REGULAR we add script tag in HEAD tag
 * which is parse HTML--- waiting(fetch script & execution)---then finish parcing HTML
 * not good
 * so we --used in BODY tag----> (currently we are using)
 * 'parsing HTML 'first then--- 'fetch script & execution'
 * 2) ASYNC we add script tag in HEAD tag (<script async src="">)
 * imp- 'parsing HTML' (meanwhile started fetch script)---waiting ('script execution')---'finish parsing HTML'
 * 3) DEFER we add script tag in HEAD tag (<script defer src="">)
 * imp- 'parsing full HTML' (meanwhile started fetch script)---'Execute script' (should use)
 *
 *
 * capturing and bubling
 * it will have same target
 * e.stopPropagation(); // now only link will change color
 *
 * */
/**
 * JSON -----
When receiving data from a web server, the data is always a 'string'.
-Parse the data with 'JSON.parse()', and the data becomes a JavaScript object.
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
-Use the JavaScript function 'JSON.stringify()' to convert it into a string.

-to create deep copy of array we -first JSON.stringify() array then  JSON.parse() it
--so it will copy same array but reference is different(memory location is diff )
-array is mutable data type- non-prototype datatype

Some of the major difference Slice-Splice
Slice
Doesn't modify the original array(immutable)
Returns the subset of original array
Used to pick the elements from array

Splice
Modifies the original array(mutable)
Returns the deleted elements as array
Used to insert or delete elements to/from array

truthy & falsy value
-falsy 5 value
null , undefined, NaN, '', 0
-trusty {} 1 'string'

?? 0 'true'-truthy value aahe

calling - function();
running (we are return something)- const mk =function();
function(){
return 'string';
} mk==string


Array methods
adding --> push (last) , unshift(first)
deleting --> pop(last), shift(first)
indexOf(), includes()

brackets & dot notations -
let nameKey='Name'
array.firstName -->static
array['first'+ nameKey] --> dynamic
 */

/**
 * pure javascript == vanilla javascript(without importing anything)
AJAS stand for Asynchronous javascript and XML(pure JS)
  not programming languange, its set of existing technologies
helps to fetching data asynchronously  without interferring with the existing page
no page reload / refresh
 It is used to request data from the server without full - page refresh
modern websites use JSON instead of XML for data transfer
 */


/**
 *
 * RXJS (.pipe())
 * [1,1,4,4,2,3,7,7,4,4,5,6,7,1,1,4,4,2,3,7,7,8,9]
 * take(1)        - taking first value 1
 * takeLast(2)     - taking last two value 8,9
 * takeUntil()    - taking value until condtion meets
 * distinct()     - taking only unique values [1,2,3,4,5,6,7,8,9] -display only non-similar value
 * distinctUntilChanged()  -[1, 1, 2, 2, 3, 3] 1,2,3
 * first()        - first element which passed condition
 * last()         - last element
 * skip(2)        - skip 2 values [1 2 3 4 5] print 3 4 5 only
 * skipUntil()    - skip until condition met
 * skipWhile()    - skip while val<=2   [1 2 3 4 5] print 3 4 5
 * bufferCount(3) - [1 2 3] [4 5 6] group of gien number
 *
 *
 */
//   types VCS - version control system 1) local VCS - local machine - harddisk
//     crash 2) centralize VCS - server crash 3) distributed VCS - availble all
//     data on everyones's laptop -easily recover

// "angular.json" - This file will contain all the configurations of the app