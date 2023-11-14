const user ={
    id:3432222,
    name:"nazmul",
    age :30,
}
const {name:title}=user;
console.log(title);



// nested object
const users = {
    id:74884,
    name :"nazmul",
    adress:{
        presentAdress:"chittagong,bangladesh",
    },
    age:33
}
const {adress: {presentAdress}} = users;
console.log(presentAdress);