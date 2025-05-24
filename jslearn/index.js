// index.js
// console.log("Hello, World!");

// {
// 	var a = 1;
// 	let b = 2;
// 	const c = 3;
// }
// console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// const c = 3;
// console.log(c); // 3
// c = 4; // TypeError: Assignment to constant variable.
// console.log(c); // 3


const username = "John Doe";
console.log(username); // "John Doe"
console.log(typeof username); // "string"


const age = 30;
// console.log(age); // 30
// console.log(typeof age); // "number"

const isStudent = true;
// console.log(isStudent); // true
// console.log(typeof isStudent); // "boolean"

const hobbies = ["reading", "coding", "traveling"];
// console.log(hobbies); // ["reading", "coding", "traveling"]
// console.log(typeof hobbies); // "object"

// const person = { name: "Alice", age: 25 };
// console.log(person); // { name: "Alice", age: 25 }
// console.log(typeof person); // "object"

// const x = null;
// console.log(x); // null
// console.log(typeof x); // "object" (this is a known quirk in JavaScript)

// const y = undefined;
// console.log(y); // undefined;
// console.log(typeof y); // "undefined"


// 字符串连接
// console.log("My name is " + username + " and I am " + age + " years old.");
// console.log(`My name is ${username} and I am ${age} years old.`); // "My name is John Doe and I am 30 years old."

// greet = `My name is ${username} and I am ${age} years old.`
// console.log(greet); // "My name is John Doe and I am 30 years old."
// console.log(greet.toUpperCase()); // "string"
// console.log(greet.toLowerCase()); // "string"
// console.log(greet.indexOf("John")); // 10
// console.log(greet.substring(0, 2)); // "John"
// console.log(greet.replace("John", "Jane")); // "My name is Jane Doe and I am 30 years old."
// console.log(greet.split(""));
// // 字符串长度
// console.log(greet.length); // 42

const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);

numbers.push(6); // 添加元素
numbers.unshift(0); // 在开头添加元素
// numbers.pop(); // 删除最后一个元素

// console.log(numbers); 
// if (numbers.length > 5) {
// 	console.log("Array length is greater than 5");
// } else {
// 	console.log("Array length is less than or equal to 5");
// }

// // console.log(Array.isArray(numbers));
// while (numbers.length > 0) {
// 	console.log(numbers.pop()); // 删除最后一个元素并返回
// }