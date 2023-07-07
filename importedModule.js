
import { addToCart, price, totalQuantity as tq } from "./exportedModule.js";

//taking everything as object 
import * as ShoppingCart from './exportedModule.js'

console.log('importing module');

addToCart('burgurs', 66); //function
//same
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.price);
console.log(ShoppingCart.totalQuantity);

console.log(ShoppingCart);/**addToCart:(...) price:(...) totalQuantity:(...) */


/**
 * this module is exporting
importedModule.js:4 importing module
exportedModule.js:13  66 burgurs added to Cart
 */

// console.log(totalPrice, totalQuantity, 'imported from other module');
console.log(price, tq, 'imported from other module'); //237 23 'imported from other module'


//default module we can give  any name --add 
//also possible to write like this
// import add, { addToCart, price, totalQuantity as tq } from './exportedModule.js'
import add, { cart } from './exportedModule.js'
add('pizza', 2); // 2 pizza added to Cart

add('lichi', 2);
add('chips', 2);
console.log(cart, 'cart'); //cart is not empty

//ES 6
//top level awaits
// fake API
// await function blocking entire application
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastpost = getLastPost();
console.log(lastpost); //promise empty 

// lastpost.then(last => console.log(last)) //title and text
//same as below
const lastPosts = await getLastPost(); //title and text
console.log(lastPosts);
