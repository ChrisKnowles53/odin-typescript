// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// // interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Max",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// 💥💥 discriminated union - we have one common property in every object (type: "") that makes up our unnion we can then switch though that property to get access to the specific property(s) that the individual object contains - this also allows typescript to spot spelling errors and suggest autofill options.

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal1 = Bird | Horse;

function moveAnimal(animal: Animal1) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// // optional chaining

// const fetchedUserData = {
//   id: "u1",
//   name: "Max",
//   job: { title: "CEO", description: "My own Company" },
// };

// console.log(fetchedUserData?.job?.title);
// // imagine if fatcheUserData was a call to a backend to get some data - what if that data did not exist
// // the ? tells typescript to check if the data is there before proceeding and will stop runtime errors and typescript will error to tell you this does not exist

// // nullish coalescing

// const userInput = " ";
// const storedData = userInput ?? "DEFAULT"; // if this was userInput || "Default" then a blank input of " " would return default bacause it defaults to a falsey value
// console.log(storedData);

// //here the ?? says if userInput is null or undefined return "DEFAULT " it means that any value other than Null and undefiened will be returned even a blank space
