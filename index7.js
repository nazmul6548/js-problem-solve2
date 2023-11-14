// deastructuring array

// ex1
const nums =[2,3,4,5,6,7,8,9];
var [,,a,,b,,,c]=nums;
console.log(a,b,c);

// ex2
const num = [2,4,5,1,7]
var [a,b]= num;
console.log(a,b);

// ex3
const numbers = [1,2,[3,100,300],4,6];
const [,,[,a,b],c]=numbers;
console.log(a,b,c);


// আমরা যদি a এর মান b এর মধ্যে এবং b এর মান a এর মধ্যে নিয়ে আসতে চাই তাহলে কি করতে পারি.
// general way
var a=1;
var b=2;
var temp =a;a=b;b=temp;
console.log(a,b);



// new way 
var a =1;
var b =2;
var [b,a]=[a,b];
console.log(a,b);