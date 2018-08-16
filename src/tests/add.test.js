//file.test.js jest needs this naming convention
//Test Example
const add = (a, b) => {
  return a + b
  //check for errors
  //return a + b + 1
}

//New Test Case
// test('string arg1s',() => {

// })
test('should add two numbers', () => {
  const result = add(3, 4)
  //Make Assertions
  //   if (result !== 7) {
  //     throw new Error(`You added 3 and 4. The result was ${result}. Expexted 7!`)
  //   }
  expect(result).toBe(7)
})
