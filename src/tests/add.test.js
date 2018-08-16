const add = (a, b) => a + b

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('Should return Greeting from name', () => {
  const greeting = generateGreeting('Willy')
  expect(greeting).toBe('Hello Willy!')
})

test('Should return Greeting from no name', () => {
  const greeting = generateGreeting()
  expect(greeting).toBe('Hello Anonymous!')
})
