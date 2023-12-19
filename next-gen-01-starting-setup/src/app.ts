// Code goes here!
// using rest operator to enable an unlimited numebr of argumaents to be passed into the function.  ...numbers
// then using reduce to take the current result and add the the current value to it
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
