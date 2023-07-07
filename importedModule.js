
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