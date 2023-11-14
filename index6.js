// rest operator

// normal way
// function addToCart(number) {
//     return number;
// }
// console.log(addToCart(100));

// try way
// function addToCart(number) {
//     return number;
// }
// console.log(addToCart(100,200,300));
// don't work, return 100;


// rest system
// function addToCart(...number) {
//     return number;
// }
// console.log(addToCart(100,200,300,400,500,600));


// extra work
function addToCart(number1,number2,...number) {
    return  number;
}
console.log(addToCart(100,200,300,400,500,600));
