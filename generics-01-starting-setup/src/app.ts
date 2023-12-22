// // generic types helps us defeine our code and then typescript supports us by checking that what we are doing is allowed with the type we have chosen.
// // the <> are where we store the generic type we want to apply

// const names: Array<string> = []; //is the same as const names: string[]
// // this will nopt allow any function that is only possible on numbers

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ")
// });
// // this says that we expect the promise to return a number therefore typescript does not allow the .split method and shows an error. hence why it is commented out

// // the above is using generics from out of the box
// // the below is using custom generics

function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("100"));

function pairWithTimestamp<T>(item: T): [T, Date] {
  const timestamp = new Date();
  return [item, timestamp];
}

const pairedString = pairWithTimestamp("Hello World");
console.log(pairedString); // ["Hello World", Date]

const pairedNumber = pairWithTimestamp(123);
console.log(pairedNumber); // [123, Date]
