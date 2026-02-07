// visible in console tab

console.log("pallavi");
console.log(13 + (14 * 2) / 12);

// alert("this is an alert window");

// dataTyoes ans variable

let X = 120;
console.log(X);

let firstname = "Pallavi";
console.log(firstname);
console.log(firstname);

// let 9years = 9; ERROR

let $hello = 100;
let _Hello = "pallavi pandey";
console.log($hello);
// cannot use reserved keywords
//  let function = 1 ERROR
//  let Class = 1 ERROR
//  let let= 1 ERROR

// Descriptive
let job1 = "Developer";
let job2 = "Developer";

let myCurrentJob = "Developer";
let myFirstJob = "Teacher";
let CurrentAge;
let hasDriversLicense;

let _hello = "pallavipandey";
// consele.log(_hello);

// Data type

// 1. number
let age = -22.22;
console.log(age, typeof age);

// 2. String
let firstName = "Nitin";
console.log(firstName, typeof firstName);

// 3. Boolean
let isAdult = true;
console.log(isAdult, typeof isAdult);

// 4.undefine (empty value)
let marks;
console.log(marks, typeof marks);

// let vs const vs var
//  5. Null (empty value)
let height = null;
console.log(height, typeof height);

// BigInt
// Symbol
let fName = "Pallavi";
fName = "anmol";
console.log(fName);

const birthYear = 1998;
// birthYear = 2007; ERROR
// const age = ERROR

console.log(birthYear);

// var marks = 98;
console.log(marks);

// opration

// airthmatic

let x = 28;
console.log(x - 5);

// Comparison  operator (boolean return)
//  != , < == <=, > >=
let RahulBirthYear = 1998;
let VishalBirthYear = 1980;
let ageRahul = 2026 - RahulBirthYear;
let ageVishal = 2026 - VishalBirthYear;
console.log(ageRahul, ageVishal);
console.log(ageRahul * 2, ageVishal / 2);
console.log(2 ** 3);
console.log(ageRahul > ageVishal);
console.log(ageRahul == ageVishal);
console.log(ageRahul < ageVishal);
console.log(ageRahul >= ageVishal);
console.log(ageRahul != ageVishal);
console.log(2026 - RahulBirthYear < 2026 - VishalBirthYear);

console.log(13 + 35); //addition
console.log("Hello " + "Rahul"); // concatenation
console.log("13" + " 35");
console.log("a" - "35"); // NAN not a number

//  Operator precedence
// 18: grouping
// 12: multiplicative oprator
// 11: additive
// 9: relative
// 8: equality oprator
// 2: assignment and miscellaneous
// 1: comma

// template literals(``)
// exact present karta code ko out screen par
let FName = "Radha";
let BYear = 1998;
let job = "Developer";

// I'm Radha, a 28 years old Developer.

let introOld =
  "I'm " + firstName + ", a" + (2026 - birthYear) + " years old " + job + ".";
console.log(introOld);
let introNew = `I'n ${firstName}, a ${2026 - BYear} years old ${job}.`;
console.log("This is \n multi line \n string.");
console.log("this is \n multi line \n string.");
console.log(`This is 
    multi line
    string`);

// conditional statement
// if_else statements

let ageRaman = 18;

// basic if_else
if (ageRaman >= 18) {
  console.log("Rahul can drive");
} else {
  console.log("Nitin is not old enought to drive.");
}

let Marks = 92;
// multiple / ladder if_else

if (Marks >= 90) {
  // multiple /ladder if_else

  if (Marks >= 90) {
    console.log("A");
  } else if (Marks >= 80) {
    console.log("B");
  } else if (Marks >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
}

// nested if_else
// store gives discount on the basis of membershipstatus and bill price
// 1. Member -> minimum 100rs -> 20% discount
// 2. Non Member -> minimum 150rs -> 10% discount

let membershipStatus = true;
let billAmount = 180;
if (membershipStatus) {
  if (billAmount > 100) {
    console.log(`Bill amount: ${billAmount}, discount: ${billAmount * 0.2}`);
  } else {
    console.log("No discount for you");
  }
} else {
  if (billAmount > 150) {
    console.log(`Bill amount: ${billAmount}, discount: ${billAmount * 0.1}`);
  } else {
    console.log("No discount for you");
  }
}

let r = "pallavi pandey";
console.log(r);
// query-element/ node

// Access Element in JS
// by class name
// selecting heading of html

document.querySelector(".heading");
console.log(document.querySelector(".heading"));

// text content
console.log(document.querySelector(".heading").textContent);

let ageHarsh = 16;
if (ageHarsh >= 18) {
  document.querySelector(".heading").textContent = "You can drive";
} else {
  document.querySelector(".heading").textContent = "You can not drive";
}

let Myage = 20;
if (Myage > 18) {
  document.querySelector(".heading2").textContent = "I am adult";
} else {
  document.querySelector(".heading2").textContent = " I am not adult";
}
