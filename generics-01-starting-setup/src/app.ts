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

//CJK's extra practice
function pairWithTimestamp<T>(item: T): [T, Date] {
  const timestamp = new Date();
  return [item, timestamp];
}

const pairedString = pairWithTimestamp("Hello World");
console.log(pairedString); // ["Hello World", Date]

const pairedNumber = pairWithTimestamp(123);
console.log(pairedNumber); // [123, Date]

// Notes to myself
//by using the generic type T it means the function i versatile to work with any type.  It relies on type inference based on the argument passed in my example string or number
// by soecifying a Tuple [T, date] we are saying we want the ouput to be an arrany containing the type T and type date - This now allows Typescript to check out function and automatically checks the type inference

// keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");

//if you replace name with age as the second argument typescript will error becasue age does not exist as a key in the object - this is a way of having a generic and therefore dynamic typescript system.

// we cannot use T extends objects with this function due to ush and splice.  So by setting this T extends primitives if we try to work with Objects Typescript will error and warn us and we should write a function for working specifically with objects

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}
// by using TextStaorage = new DataStorage<string>(); we are passing string as a prop/argument so the function knows that only strings are allowed - This can be number or boolean

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());
