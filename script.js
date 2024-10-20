//1

let num = 15;
if (num * num > 100) {
  console.log("მეტია 100");
} else if (num * num === 100) {
  console.log("100ის ტოლია");
} else {
  console.log("ნაკლებია 100ზე");
}

//2

let number = 65;
if (50 <= number && number <= 100) {
  console.log("არის მოცემულ შუალედში");
} else {
  console.log("არ არის მოცემულ შუალედში");
}

//3

let numb = 18;
if (numb < 0) {
  console.log("ეს რიცხვი უარყოფითია");
} else if (numb === 0) {
  console.log("ეს რიცხვი 0ის ტოლია");
} else {
  console.log("ეს რიცხვი დადებითია");
}

//4

let lenght = 15;
let width = 20;
if (2 * (lenght + width) > 50) {
  console.log("მართკუთხედის პერიმეტრი მეტია 50ზე");
} else if (2 * (lenght + width) === 50) {
  console.log("მართკუთხედის პერიმეტრი 50ის ტოლია");
} else {
  console.log("მართკუთხედის პერიმეტრი ნაკლებია 50ზე");
}