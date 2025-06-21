//what will the following print in js
console.log("har\"".length)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`)
// extract the amount out of this string
let str = "Please give Rs 10000"
let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)
