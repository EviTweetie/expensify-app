//
// Object Destructuring
//

/*
const person = {
  name: 'Ernie',
  age: 49,
  location: {
    //city: 'Sesamestreet',
    temp: 36
  }
}

const { name, age } = person
console.log(`${name} is ${age}.`)

const { city: myCity = 'No city', temp: temperature } = person.location
console.log(`${myCity} has ${temperature}.`)
*/

/*
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(`${publisherName}.`)

const anotherBook = {
  title: 'Sheila',
  publisher: {
    name: 'penguin'
  }
}

//Evi Shorthand :) YEAH
const {
  title: myBookName,
  author: theAuthor = 'Cannot remember',
  publisher: { name: publishedBy = 'Self-Published' }
} = anotherBook

console.log(`${myBookName} by ${theAuthor} is published by ${publishedBy}.`)
*/

//
// Array Destructuring
//

/*
const address = ['1234 Sesamestreet', 'Memphis', 'Tennessee', '12345']

//const street = address[0]
//const [street, city, state, zip] = address
//set default value for variable e.g. postbox = '98765'
const [, , , zip, postbox = '98765'] = address
const [street] = address

console.log(`Ernie lives in ${street} ${postbox}`)
*/

//11.89 array destructuring challenge

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']

const [myItem, , , large] = item

console.log(`A large ${myItem} costs ${large}.`)
