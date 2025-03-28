// console.log("Hello World!");
// let a = 10;
// let b = 19;
// console.log("sum of a and b is : ", a + b);
// console.log("subtract of : ", a - b);

// operators
// console.log(a = b);
// console.log(a);

// console.log(a = b);
// console.log(a);
// console.log(b);

// let color = "red";

// if (color === "red") {
//   console.log("stop!. the traffic color is red");
// }
// if (color === "yellow") {
//   console.log("go - slowly. the traffic color is yellow");
// }
// if (color === "green") {
//   console.log("go. the traffic color is green");
// }

// let age = 14;
// if (age >= 18) {
//     console.log("you can vote");
// }
// else if (age < 18) {
//     console.log("you can't vote");
// }

// let marks = 32;
// if (marks >= 33) {
//     if (marks >= 80) {
//         console.log("Grade : O");
//     } else {
//         console.log("Grade : A");
//     }
//   console.log("Pass");
// } else {
//   console.log("Better luck next time!");
// }

// let string = "aNKUSH";
// if (string[0] === "a" && string.length > 3) {
//     console.log("The given string is true :)");
// } else {
//     console.log("The given string is false :(");
// }

// let color = "red";

// switch (color) {
//   case "red":
//     console.log("stop");
//     break;

//   case "yellow":
//     console.log("go slowly");
//     break;

//   case "green":
//     console.log("Go");
//     break;

//   default:
//     console.log("broken light");
// }

// use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.

// let day = 9;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thuresday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// default:
//     console.log("this day is not exist!");
// }
// alert("this site is not safe");

// let first_name = prompt("Enter your first name : ");
// let last_name = prompt("Enter your last name: ");
// console.log("Welcome : ",first_name, last_name);

// qs.1
// let num = 20;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// qs.2
// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// alert(`${name} is ${age} years old.`);

// qs.3
// let quarter = 1;
// switch(quarter) {
//     case 1: console.log("january, ferbruary, march");
//     break;
//     case 2: console.log("April, may, june");
//     break;
//     case 3: console.log("july, august, september");
//     break;
//     case 4: console.log("october, november, december");
//     break;
//     default: console.log("Not a querter");
// }

// qs.4
// let string = "Ankush";
// if ((string[0] == "a" || string[0] == "A") && string.length > 5) {
//   console.log("golden string");
// } else {
//   console.log("not a golden string");
// }

// qs.5
// let a = 44;
// let b = 18;
// let c = 13;

// if (a > b) {
//   if (a > c) {
//     console.log(a, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// } else {
//   if (b > c) {
//     console.log(b, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// }

// qs.6
// let num1 = 32;
// let num2 = 47852;

// if (num1 % 10 == num2 % 10) {
//   console.log("numbers have the same last digit which is", num1 % 10);
// } else {
//   console.log("numbers don't have the same last digit");
// }
// let msg = "    hello    ";
// let name = "Rahul_Yadav";
// let message = "      rahul  ";
// let newMessage = message.trim().toLowerCase();
// console.log(newMessage);

// let Message = "      rahul  ";
// let oldMessage = Message.trim().toLocaleUpperCase();
// console.log(oldMessage);

// let name = "RahulKumarYadav";
// let msg = "help";
// let name = "ApnaCollege";

// Array
// students = ["Rahul", "Ankush", "Golu"];

// let nums = [1, 2, 3, 4, 5, 6];

// let fruits = ["Apple", "Mango", "Banana", "Pineapple"];
// let months = ["January"];
// console.log(months);

// months.push("February");
// console.log(months);

// let color = ["red", "pink", "yellow", "blue", "pink", "white"];
// let cars = ["fortuner", "toyata", "maruti", "omni", "scorpio-n", "jeep"];
// let months = ["January", "July", "March", "August"];
// let programming_lang = ["c", "c++", "javascript", "python", "java", "c#", "sql"];

//ans.1
// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0, n);

//ans.2
// let newArr = [7, 9, 0, -2];
// let m = 3;
// let ans2 = newArr.slice(newArr.length - m);
// console.log(ans2);

//ans.3
// let str = prompt("Please enter a string");

// if (str == 0) {
//   console.log("string is empty");
// } else {
//   console.log("string is not empty");
// }

//ans.4
// let char = prompt("please enter a character");

// if(char == 'a') {
//     console.log("The given charater is lower case");
// }
// else {
//     console.log("The given charater is upper casea");
// }

//ans.4
// let str = "RahUlYadav";
// let idx = 3;

// if(str[idx] == str[idx].toLowerCase) {
//     console.log("character is lower-case");
// }else {
//     console.log("character is not a lower-case");
// }

//ans.5
// let str = prompt("Ener a string");
// console.log('original string = ${str}');
// console.log('string without spaces = ${str.trim()}');

//ans.6
// let arr = ["hello", "a", 23, 64, 99, -6];
// let item = 99;

// if (arr.indexOf(item) != -1) {
//   console.log("elemet exist in array");
// } else {
//   console.log("element doesn't exist in array");
// }

// part-4. loops

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i=5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }
// console.log("backword");

// for (let i = 15; i >= 1; i = i - 2) {
//   console.log(i);
// }

// print all even number from 2 to 10
// for (let i = 2; i <= 15; i = i + 2) {
//   console.log(i);
// }

// favourite movie
// const favoriteMovie = "Money Heist";
// let guess = prompt("guess my favourite movie");
// while (guess != favoriteMovie && guess != "quit") {
//   guess = prompt("wrong guess please try again");
// }

// if (guess == favoriteMovie) {
//   console.log("congrates");
// } else {
//   console.log("You quite this game");
// }

// let i = 0;
// while (i<=9) {
//   if(i == 3) break;
//   console.log(i);
//   i++;
// }

//loops with Arrays
// let fruit = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(i, fruit[i]);
// }

// console.log("backword/revers");

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("kiwi");
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

//loop with arrays
// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "fleseh"],
// ];
// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[i], heroes[i].length);
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }

//for of loop
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits) {
//   console.log(fruit);

// }

//JS object literals
// let arr = [];

//creating object literals

// const student = {
//   name: "Rahul",
//   age: 21,
//   city: "Siwan",
//   marks: [56.6, 66.6],
// };

// const post = {
//   username: "@rahul.yadav915",
//   content: "#this is my firstPost",
//   likes: 55,
//   tags: ["@ankushchoudhary", "@babliYadav"],
// };

// const students = {
//   name: "Shradha",
//   age: 23,
//   marks: 94.4,
//   city: "Delhi",
// };

// //object of objects

// const classInfo = {
//   aman: {
//     grade: "A+",
//     city: "Delhi",
//   },

//   Shradha: {
//     grade: "A",
//     city: "Punjab",
//   },

//   Rahul: {
//     grade: "C",
//     city: "Bihar",
//   },
// };

// const max = prompt("Eneter the maximum number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");
// while (true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }

//   if (guess == random) {
//     console.log("you're right! congrates. random number is:", random);
//     break;

//   } else if (guess < random) {
//     guess = prompt("Hint: the number is too small please try again");
//   } else {
//     guess = prompt("Hint: the number is too big. please try again");
//   }
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// const car = {
//   name: "Maruti Suzuki",
//   model: "maruti suzuki dezire",
//   color: "white"
// };
// console.log(car.name);

// const person = {
//   Name: "John-doe",
//   age: 21,
//   city: "New jercey"
// };
// person.city = "New York";
// person.country = "United States";
// console.log(person);

//functions in javaScript
// function hello() {
//   console.log("Hello");
// }
// hello();

// function printName() {
//   console.log("hello Rahul");
// }
// printName();

// function printTable() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printTable();

// function isAdult() {
//   let age = 9;
//   if (age >= 18) console.log("Adult");
//   else console.log("not adult");
// }
// isAdult();

//write a function to print a poem
// function printPoem() {
//   console.log("teinkle twinkle, little star");
//   console.log("how i wonder, what you're");
//   console.log("up above the also high");
//   console.log("like a diamond, in the sky");
// }

// printPoem();

//create a function to roll a dice & always display the value of the dice(1 to 6)
// function roolDice() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);
// }

// roolDice();
// roolDice();

//functions with argument
// function printInfo(name, age) {
//   console.log(`${name}'s. age is ${age}.`);
// }

// printInfo("Rahul", 21);
// printInfo("Anushka", 21);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(45, 45);

//write a function to create the average of 3 numbers.
// function calcAverage(a, b, c) {
//   let average = (a+b+c)/3;
//   console.log(average);
// }

// calcAverage(1, 2, 3);

//create a function that print the multiplication table of a number.
// function printTable(n) {
//   for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
//   }
// }

// printTable(2);

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }

//global and function scope
// let sum = 95;

// function calculateSum(a, b) {
//   let sum = a+b; //function scope
//   console.log(sum);
// }
// calculateSum(3, 5);
// console.log(sum);

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     }
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     }
//   } else {
//     console.log("wrong request");
//   }
// }

//methods
//Action that can be performed on an object.
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// console.log(calculator);

//qs.1 write a JavaScript funtion that return array elements larger than a number.
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// function getElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// getElement(arr, num);

//qs.2 Write a Js function to extract unique character from a string.
//Example: str="abcdabcdefgggh"
//ans: "abcdefgh";

// let str = "abcdabcdefgggh";

//function to get string with all unoque elements
// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
// if current charater is not added, then add it in ans.
// otherwise it is a duplicat.
//       ans += currChar;
//     }
//   }
//   return ans;
// }
// getUnique(str);

//qs.3
// let country = ["Australia", "Germany", "United State of America"];

// function longestName(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//       ansIdx = i;
//     }
//   }
//   return country[ansIdx];
// }

// longestName(country);

//qs.4
// let string = "apnaCollege";

// function coutVowels(string) {
//   let count = 0;
//   for(let i = 0; i<string.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u" ||
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

//qs.5
// let start = 100;
// let end = 200;

// function generateRandom(start, end) {
//   let diff = end - start;
//   return Math.floor(Math.random() * diff) + start;
// }

//day-7.js
//01.this keyword in js
// let student = {
//   name: "rahul",
//   age: 21,
//   eng: 99,
//   math: 89,
//   phy: 98,
//   getAvg() {
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got average marks = ${avg}`);
//   },
// };

//02.try and catch
// console.log("hello");
// console.log("hello");
// console.log("hello");
// try {
//   console.log(a);
// } catch (err) {
//   console.log("cought an error... a is not defined");
//   console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

//03.Arrow function | miscellineous Topics | Arrow function
// const sum = (a, b) => {
//   console.log(a + b);
// };

// implicit return in arrow function
// const multiply = (a, b) => a * b;

// timeout function
// console.log("hi there!");

// setTimeout(() => {
//   console.log("apna college");
// }, 4000);

// console.log("welcome to");

// timeInterval function
// let id = setInterval(() => {
//   console.log("apna college");
// }, 2000);

// clearInterval(id);

//qs.1 write an arrow function named arrAverage that accept an array of number and return the average of those numbers.
// const arrAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   console.log(total);
//   console.log(arr.length);

//   return total / arr.length;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrAverage(arr));

//qs.2 write an arrow function named isEven() that takes a single number as argument and retuns if it is even or not.

// const isEven = (num) => {
//   if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };
// isEven(8);

//qs.3 what is the output of this code
// const object = {
//   message: "Hello, world!",

//   logMessafe() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMessage, 1000);

//qs.4 what is the output of the following
// let length = 4;
// function cllback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5;
//   method(callback) {
//     callback;
//   },
// };
// object.method(cllback, 1, 2);

//day-8js
// console.log("hey there it's day-8");

//01.Array methods
//forEach
//map
//filter
//some
//every
//reduce

//a. forEach
// let arr = [1, 2, 3, 4, 5];
// function print(el) {
//   console.log(el);
// }
// arr.forEach(print);

// //b.map
// let num = [1, 2, 3, 4];
// let double = num.map(function (el) {
//   return el * 2;
// });

// //c.filter
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = nums.filter((el) => {
//   return el % 2 == 0;
// });

//d.every
// works on logical and
// [1, 2, 3, 4].every((el) => el % 2 == 0); //false
// [2, 4, 6, 8].every((el) => el % 2 == 0); //true

//e.some
//works on logical or
// [1, 2, 3, 4].some((el) => el % 2 == 0); //true
// [1, 3].some((el) => el % 2 == 0); //false

//f.reduce method
// let numss = [1, 2, 3, 4];
// let finalVal = numss.reduce((res, el) => res + el);
// console.log(finalVal);

//reduce-finding maximum in an array
// let array = [2, 3, 4, 5, 6, 44, 7, 8, 9, 11, 4, 12, 23];
// let result = array.reduce((max, el) => {
//   if (el > max) return el;
//   else return max;
// });
// console.log(result);

//practice question
//check if all numbers in our array are multiple of 10 or not.
// let num1 = [10, 20, 30, 40, 50];
// let ans = num1.every((el) => el % 10 == 0);
// console.log(ans);

//create a function to find the minimun  number in an array
// let num2 = [10, 20, 30, 40, 50];
// let min = num2.reduce((min, el) => {
//   if (min < el) return min;
//   else return el;
// });
// console.log(min);

//by using function
// function getMin(num2) {
//   let min = num2.reduce((min, el) => {
//     if (min < el) return min;
//     else return el;
//   });
//   return min;
// }
// let num2 = [10, 20, 30, 40, 50];

//07. default parameter
// function sum(a, b = 4) {
//   return a + b;
//}

//08.spread
// let arra = [1, 3, 4, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 9];
// Math.min(...arra);

//10. spread (object lierals);
// const data = {
//   email: "ry123215@gmail.com",
//   password: "123215"
// };

// const dataCopy = {...data, id: 123, country: "india"};

//11.Rest
// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

//12.Destructing
// let names = [
//   "Rahul Kumar yadav",
//   "Sonu",
//   "Ankush",
//   "Manish",
//   "Adarsh",
//   "Akash",
//   "Golu",
// ];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
// let [winner, runnerup, ...others] = names;

//13.Destructing(in objects)
// const student = {
// name: "Rahul Kumar Yadav",
// age: 19,
// class: 13,
// subject: ["hindi", "english", "math", "science", "physics"],
// username: "Rahul@123",
// password: 123215,
// };
// const {username: user, password: pass}  = student;

//practice quesetins
//1. squere and sum of array element using the arrow function and then find the average of the array
// let num = [1, 2, 4, 4, 5];
// const squere = num.map((num) => num * num);
// console.log(squere);

// let sum = num.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let average = sum / num.length;
// console.log(average);

//02. create the new array using map function whose each element is equal to the original element
// let numbers = [2, 3, 4, 6, 8, -2, -4];
// console.log(numbers.map((number) => number + 5));

//03. create a new array whose elements are in uppercase of words present in the original array.
// let string = ["adam", " bob", "catlyn", "donald", "eva"];
// console.log(string.map((strings) => strings.toUpperCase()));

//04.write a function called doubleAndReturArgs which accepts an array and a variable number of arguments. The function should retun a new Array with the original array values and all of the additioal argumets doubled.
// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];
// doubleAndReturnArgs([1, 2, 4], 4, 4);
// doubleAndReturnArgs([21, 10, ]);

//05 write a fuction called mergeObject that accepts two objects and retuns a new object which contain all the key and value of the first object and second object.
// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});
// mergeObjects({a: 1, b: 2 }, {c: 3, d: 4});

//day-10
//01.dom Event
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   // console.log("button was clicked");
//   alert("button was clicked");
// };

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   // btn.onclick = sayHello;
//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
// }

// function sayHello() {
//   alert("Hello!");
// }

// function sayName() {
//   alert("Apna College"); {
//   }
// }

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "pink";
// }

// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

//keyboard events
// let input = document.querySelector("input");
// input.addEventListener("keydown", function (event) {
//   console.log("code = ", event.code);
//   console.log("key = ", event.key);
//   console.log("keyboard was typed");
// });

// input.addEventListener("keyup", function () {
//   console.log("keyboard was released");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", function (event) {
//   console.log("code = ", event.code); //arrowUP, arrowDOWN, arrowRIGHT, arrowLEFT
//   if (event.code == "arrowUP") console.log("arrow moves forword");
//   else if (event.code == "arrowDown") console.log("character moves backword");
//   else if (event.code == "arrowRIGHT") console.log("arrow moves right");
//   else if (event.code == "arrowLEFT") console.log("arrow moves left");
// });

//form event
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // let user = document.querySelector("#user");
//   // let pass = document.querySelector("#pass");

//   // console.log(user.value);
//   // console.log(pass.value);
// });

// let user = document.querySelector("#user");

// // user.addEventListener("change", function () {
// //   console.log("input changed");
// //   console.log("final value = ", this.value);
// // });

// user.addEventListener("input", function () {
//   console.log("input changed");
//   console.log("final value = ", this.value);
// });

// // event listener_mouseout
// const test = document.getElementById("test");

// // Briefly make the list purple when the mouse moves off the
// // <ul> element
// test.addEventListener(
//   "mouseleave",
//   (event) => {
//     // highlight the mouseleave target
//     event.target.style.color = "purple";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 1000);
//   },
//   false,
// );

// // Briefly make an <li> orange when the mouse moves off of it
// test.addEventListener(
//   "mouseout",
//   (event) => {
//     // highlight the mouseout target
//     event.target.style.color = "orange";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );

// //event listener_keypress
// // const log = document.getElementById("log");
// // const input = document.querySelector("input");

// // input.addEventListener("keypress", logKey);

// // function logKey(e) {
// //   log.textContent += ` ${e.code}`;
// // }

// //event listener _scrool
// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

// const log = document.querySelector(".event-log-contents");
// const reload = document.querySelector("#reload");

// reload.addEventListener("click", () => {
//   log.textContent = "";
//   setTimeout(() => {
//     window.location.reload(true);
//   }, 200);
// });

// window.addEventListener("load", (event) => {
//   log.textContent += "load\n";
// });

// document.addEventListener("readystatechange", (event) => {
//   log.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   log.textContent += `DOMContentLoaded\n`;
// });

// question_2.
// let btn = document.querySelector("button");
// btn = addEventListener("click", function (event) {
//   this.alert("button is clicked");
// });

// questin_3.
// document.getElementById("nameInput").addEventListener("input", function () {
//   let inputVal = this.value;
//   let filteredVal = inputVal.replace(/[^a-z,A-Z]/g, "");
//   this.value = filteredVal;

//   document.getElementById("displayName").textContent = filteredVal;
// });

// js-day 24 | part - 11
// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }
// three();

// let a = 24;
// console.log(a);
// let b = 33;
// console.log(b);
// console.log(a+b);

// setTimeout(function() {
//     console.log("apna college");
// }, 2000);

// console.log("Hello Rahul");

// callback hell.
// h1 = document.querySelector("h1");
// h1.style.color = "red";

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000
// );

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue");
//       });
//     });
//   });
// });

// callbcks nesting -> callBack hell

// function saveDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 5) success();
//   else failure();
// }

// saveDB(
//   "hello Rahul",
//   () => {
//     console.log("success: your data was saved");
//     saveDB(
//       "hello world",
//       () => {
//         console.log("succes2: your data was saved");
//       },
//       () => {
//         console("failure2: your data was not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved");
//   }
// );

// function saveDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: your data was saved :)");
//     } else {
//       reject("failure: weak connection :(");
//     }
//   });
// }

// let request = saveDB("Apna College"); // request = promise object
// request
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
//   });

// saveDB("Apna College") // request = promise object
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// improved version of then and catch promises.
// saveDB("apna college")
//   .then((result) => {
//     console.log("result: ", result);
//     console.log("data1 saved");
//     return saveDB("hello world");
//   })
//   .then((result) => {
//     console.log("result: ", result);
//     console.log("data2 saved");
//     return saveDB("Shradha");
//   })
//   .then((result) => {
//     console.log("result: ", result);
//     console.log("data3 saved");
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//     console.log("promised was rejected");
//   });

// async function greet() {
//   throw "404 page not found";
//   return "Hello";
// }

// greet()
//   .than((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err : ", err);
//   });

// let demo = async () => {
//   return 5;
// };

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

// write the code for changing color using await keyword
// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) reject("promise recjected");
//       h1.style.color = color;
//       console.log(`color changed to ${color}!`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo(params) {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("pink", 1000);
//     await changeColor("sky", 1000);
//     await changeColor("yellow", 1000);
//   } catch (err) {
//     console.log("finding error!");
//     console.log(err);
//   }

//   let a = 5;
//   console.log(a);
//   console.log("ner number = ", a + 3);
// }

// learning api
// let jspnRes =
//   '{"message":"https://images.dog.ceo/breeds/germanshepherd/n02106662_14247.jpg","status":"success"}';

// let validRes = JSON.parse(jspnRes);
// console.log(validRes);

// let student = {
//   name: "Rahul",
//   roll: 95,
// };

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {  // <-- Marked the function as async here
  let fact = await getFacts();
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
    console.log(res.data.fact);  // This line will not be executed because the return is above it
  } catch (e) {
    console.log("Error - ", e);
    return "no fact found";
  }
}


// fetch(url)
//   .then((Response) => {
//     console.log(Response);
//     return Response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .catch((err) => {
//     console.log("Error - ", err);
//   });
