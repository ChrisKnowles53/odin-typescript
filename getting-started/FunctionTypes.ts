// unknown versus any - ANy means typescript doesnt care - unknown means it will ask for clarification before letting you assign it

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInput; // typescript fails this because userName must be a string and userInput is unkown  -  If userInput was any it would pass

if (typeof userInput === "string") {
  userName = userInput;
}
// this works because typescript knows that userInput must be a string before line 12

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; //Yypescript would fail this becasue the function does not take in 2 arguments that are numbers and return a number
// combineValues = 5; // Typescript fails this because 5 is not a function

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
