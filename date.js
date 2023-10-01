const mydate=new Date("2023","11","27");
console.log(mydate)

const newdate=new Date()
console.log(newdate.toLocaleString());
// console.log(newdate.toDateString())
// console.log(newdate.toLocaleDateString())
// console.log(newdate.toString())

//                                      convert to millisecond

console.log(newdate.getTime())

//                                extract specific month /year/date etc

console.log(mydate.getMonth())

//                           convert to second

let currentdate= Date.now()
console.log(currentdate)
console.log(Date.now()/1000) // last m decimal ayega 
console.log(Math.floor(Date.now()/1000))  //overcome of decimal point

