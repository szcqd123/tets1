//Object
let student = { name: "alex", age: 12 };
console.log(student);
//Array
let students = [student, { name: "max", age: 14 }, { name: "bob", age: 33 }];
console.log(students);
//Function
function saySomething(something) {
  console.log(something);
  console.log(something);
  console.log(something);
}

// saySomething();
function square(number) {
  return number * number;
}

let result = square(4);
saySomething(result);

student.work = saySomething;

student.work("im working");

saySomething(students);

let name = "12";
// console.log(typeof name);

function fac(number) {
  if (number < 1) return 1;
  return number * fac(number - 1);
}

//Operators
//Arithmetic + - * / %
console.log(((1 + 9) * 2) % 7);
let a = 1;
console.log((a += 2)); //a = a+2 a++ a=a+1
console.log(a);

//Assignment = += -= *=
// let a = 5;
//Comparison < > != == ===
console.log(9 !== "9"); //!(9==9)

//Logical && || !
console.log(true && false); //and
console.log(true || false); //or
console.log(!false); //not
console.log((true && false) || false);

//Ternary :?

let b = true;
let c = false;
let abc = "";
let ok;
let nu;
ok = abc || "没有值";
console.log(ok);
// if (abc !== undefined) {
//   ok = abc;
// } else {
//   ok = "没有值";
// }

if (nu) {
  console.log("1");
} else if (b) {
  console.log("2");
}
if (b) {
  console.log("3");
}

//loop
let result2 = 0;
// result2 += 2;
//while loop
let arr = [];
let condition = false;
while (condition) {
  //code
}
let count = 0;
// console.log(arr);
//for loop
for (let i = 0; i < 10; i++) {
  //   if (i > 8) break;
  //   if (i % 2 == 0) continue;
  arr.push(i);
}

//遍历
console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
// }
// let newArr = arr.map((element) => {
//   //   element *= 2;
//   return element * 2;
//   //   console.log(element);
// });
for (let element of arr) {
  console.log(element);
}
let newArr = arr.filter((element) => {
  //   element *= 2;
  return element % 2 == 1;
  //   console.log(element);
});
let theNumber = arr.find((element) => {
  return element % 2 == 1;
});
console.log(newArr);
console.log(arr);
console.log(theNumber);
