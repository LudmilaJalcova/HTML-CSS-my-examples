const pole = ["aaa", "bbb"];
const objekt = { a: "aaa", b: "bbb" };

console.log("pole", pole);
console.log("objekt", objekt);

// let name = "Janko";
// let age = "30";
// prepis na objekt
let person = { name: "Janko", age: 30 };
// Dot notation
person.name = "Johny";
person.age = 27;
// Bracket notation
person["name"] = "Jano";
person["age"] = 18;
console.log(person.name);
console.log(person.age);

const selection = "age";
console.log(person[selection]);
