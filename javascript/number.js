// const number=400;
const number=new Number(400)
console.log(number);

console.log(number.toString().length) // toString used to any data type convert  to string
console.log(typeof number)

console.log(number.toFixed(3));   // toFixed used to after particular number ,number of zeros are defined 

const amount=24.899
const amount1=124.857
console.log(amount.toPrecision(2))//toPrecision is used to roundof
console.log(amount1.toPrecision(3))
console.log(amount1.toPrecision(4))

const hundreds=100000;
console.log(hundreds.toLocaleString('en-in'))// 'en-in' used for indian value


const parsenumber=new Number(400)
console.log(parsenumber.parseInt())

