let myObj = {
  a: 1,
  b: 6,
  c: 7,
};
const { a, ...rest } = myObj;

console.log(rest);
