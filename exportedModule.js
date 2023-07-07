console.log('this module is exporting');
const shippigCost = 10; //this is private 
// const cart = [];


//we are exporting 
export const cart = [];
//simple function
// const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`This ${quantity} ${product} added to Cart`);
// }

//we can import this function into anather module
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(` ${quantity} ${product} added to Cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

//we can also export this 
export { totalPrice as price, totalQuantity };

//default export 
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(` ${quantity} ${product} added to Cart`);
}
