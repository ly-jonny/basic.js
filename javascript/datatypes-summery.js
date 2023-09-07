// premitive data types

// 7 types of primitive data types are: string, symbol, number , null, boolean, bigint, undefined

// const id=symbol('123');
//  const anotherid=symbol('123')

// console.log(id === anotherid);
const valuenull=null;
// console.log(typeof valuenull); 

const id=Symbol('123');
const differid=Symbol('123');
// console.log(id===differid);






// reference or non primitive 
// array, objects, functions


const arr=["hello","everyone"]; // array ka type object
// console.log(typeof arr);

const myfunction=function(){
//function ka type function
}
// console.log(typeof myfunction);

let myobj={
    name:"jonny",
    age:24

}
// console.log(myobj);



// ***************stack (primitive) or heap (non primitive)********************

//stack memory

let mychannel="lyjonny";
let another=mychannel; //mychannel ki value ki  ek copy "another" m stored

another="againjonny";
// console.log(mychannel);
// console.log(another);

// heap*********memory

let user1={
    name:"jonny",
    email:"jitender23",
    upi:"user1something"
}
let user2=user1;
user2.email="jonnysomething";
console.log(user1.email);
console.log(user2.email);
