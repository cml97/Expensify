const add = (a, b) => a+b;
const generateHello = (name) => `Hello ${name}`;

test('should add 2 numbers', () => {
  const result = add(2,3);
  expect(result).toBe(5);

});

test('should be Cemil', () => {
  const res = generateHello("Cemil");
  expect(res).toBe("Hello Cemil");
})