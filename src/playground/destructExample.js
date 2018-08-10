// const add = (dataObject) => {
//     return dataObject.a + dataObject.b
// }

//destructuring a and b from the Object passed in
const add = ({ a, b }) => {
  return a + b
}

console.log(add({ a: 10, b: 25 }))

//pass further arguments
const addMore = ({ a, b }, c, d) => {
  return a + b + c + d
}

console.log(addMore({ a: 10, b: 25 }, 3000, 5000))
