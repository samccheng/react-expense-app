// const person = {
//   name: "me",
//   age: 44,
//   location: {
//     city: 'denver',
//     temp: 50
//   }
// }
//
// const { name, age } = person
// console.log(`${name} is ${age} years old.`)
//
// const { temp, city } = person.location
//
// console.log(`It's ${temp} in ${city}`)

const book = {
  title: 'ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
}

const { name: publisherName = 'self-published' } = book
console.log(`${publisherName}`)



const address = ['200 16th st', 'denver', 'co', '80001']

const [ street, city, state, zip ] = address

console.log(`you are in ${city} ${state}`)

const item = ['coffee', '$2.00', '$3.00', '$4.00']

const [ coffee,, medium] = item

console.log(`A medium ${coffee} is ${medium}`)
