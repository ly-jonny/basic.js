// ***************padStart***************

const fullnumber=new String("957204430902")
const last4digit=fullnumber.slice(-4)
console.log(last4digit.padStart(fullnumber.length,"*"))

// **********padEnd*********

const id=new String('7206238165');
const first6number=id.slice(0,6);
// console.log(first4number)
const maskednumber=first6number.padEnd(id.length,"*")
console.log(maskednumber)