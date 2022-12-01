// What if we want to reuse a block of code around our program.

// We already used many functions:

// parseInt --> a function that takes as input anything, and tries to parse a number out of it

// console.log --> a function that
// - takes as input one or more values (separated by commas)
// - it prints them all to the console, with a space in between

// DEFINING OUR OWN FUNCTION:
// Inside the round brackets, you define
// the inputs of your function - parameters.
function printTitle(titleString) {
  // You write the block of code that this function executes.
  console.log(`\n--------${titleString}--------\n`);
}

// printTitle:
// - input: a value called titleString
// - what does it do: prints it to the console with \n------- before, and --------\n after

printTitle("FUNCTIONS");

// We declare a function that takes two parameters
function printTitleAdvanced(titleString, titleSymbol) {
  // You write the block of code that this function executes.
  console.log(titleSymbol + titleSymbol + titleSymbol);
  console.log(titleString);
  console.log(titleSymbol + titleSymbol + titleSymbol);
}

printTitleAdvanced("Functions", "=");

printTitleAdvanced("Test", "-");

printTitle("Function that sums 3 numbers");

// We want to write a function that:
// - input: takes three numbers
// - output: sum of the trhee numbers

function sum3(n1, n2, n3) {
  if (
    typeof n1 === "number" &&
    typeof n2 === "number" &&
    typeof n3 === "number"
  ) {
    let result = n1 + n2 + n3; // This variable exists only inside this code block.
    return result;
    // We could also just have done in a single line: return n1 + n2 + n3;
  } else {
    console.log("ERROR: you called sum3 with a non-number parameter");
    // Here we don't return. Whenver we return nothing, JS will return undefined
  }
  // Return is the keyword that defines what our function will give back to the caller
  // Also, whenever return appears, the function ends.

  // Any code that you write after return, will not be executed.
  // console.log("Something") // This will never happen.
}

// You need to think about functions as any other operation that you can execute.
// 1 + 3 is an operation --> JS executes it and the result goes into the variable
// let varialbe = 1 + 3 // The variable will contain 4
// let booleanVar = 3 > 10 // The variable will contain false

let theSumOf3;
// The assignment operator
// 1) execute the operation(s) on the right of the equals sign
// 2) take the result and put it in the variable...
// IF THE OPERATION IS A FUNCTION, THE RESULT IS ITS RETURN VALUE
theSumOf3 = sum3(10, 20, true);

console.log("Executing sum3(10,20,35) -->", theSumOf3);
// RETURN VALUE & CONSOLE.LOG THEY ARE UNRELATED.
// IF YOU RETURN SOMETHING, YOU HAVE A VALUE THAT YOU CAN USE.
// IF YOU CONSOLE.LOG, YOU JUST PRINT SOMETHING TO THE CONSOLE.

printTitle("Function to compute the perimeter of a rectangle");

// We want to define a function that, given base & height
// computes the perimeter of a rectangle with such base & height values.
// inputs - two numbers, base & height
// output - a number, perimeter

function perimeterOfRectangle(base, height) {
  return (base + height) * 2;
}

let perimeter1 = perimeterOfRectangle(20, 10);
let perimeter2 = perimeterOfRectangle(5, 2);

console.log("Perimeter of a 20 - 10 rectangle:", perimeter1);
console.log("Perimeter of a 5 - 2 rectangle:", perimeter2);

printTitle("Perimeters of a list of rectangles");

let rectangles = [
  { base: 10, height: 5 },
  { base: 2, height: 2 },
  { base: 2, height: 3 },
  { base: 3, height: 2 },
  { base: 2, height: 14 },
  { base: 10, height: 2 },
];

// We want to write a piece of code that prints the perimeters
// of all these rectangles
for (let index = 0; index < rectangles.length; index++) {
  let rectangle = rectangles[index];
  console.log("Perimeter of", rectangle);
  console.log(perimeterOfRectangle(rectangle.base, rectangle.height));
}

printTitle("STRINGS ARE JUST ARRAYS");

// STRINGS ARE ACTUALLY ARRAYS :)
let string = "A very long string with many words and bla bla bla.";

for (let i = 0; i < string.length; i++) {
  let ithChar = string[i];
  console.log(`Char position ${i} ----> ${ithChar}`); // This will print the char, on the line.
}

// This is actually the same as having something like that:
// string = [
//   "A",
//   " ",
//   "v",
//   "e",
//   "r",
//   "y",
//   // .......
// ];

// Since strings are just arrays, they have functions that can be called with the dot
console.log("Example of string.toUpperCase()", string.toUpperCase());
console.log("Example of string.startsWith('A')", string.startsWith("A"));
console.log("Example of string.startsWith('a')", string.startsWith("a"));
console.log(
  "Example of string.startsWith('A very')",
  string.startsWith("A very")
);
// Lowercase & uppercase characters ARE ALWAYS DIFFERENT CHARACTERS
// A vs a, it's like saying, m vs u, any different characters...

if (string.startsWith("A") || string.startsWith("B")) {
  console.log("The strings starts with A or B!");
}

printTitle("Function that counts a character in a string");

// Define a function that takes a string, a charactes, and tells us
// how many times the character occurs inside the string.

// - inputs: a string, a char (a string of length 1)
// - output: a number, the number of times this char appears in the string

// EXAMPLE
// inputs: "Hello World!",  "o"
// result: 2 --> because the "o" appears two times inside the string "Hello World!"

function countChar(string, char) {
  // STRINGS ARE ACTUALLY ARRAYS :)
  let count = 0; // Somewhere to store the count

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count += 1;
    }
  }

  return count;
}

console.log(
  'countChar("Hello World!", "o") ---- ',
  countChar("Hello World!", "o")
);

let lorem = `
Porro quo qui dolorem aperiam enim unde delectus rerum. Expedita perferendis exercitationem nesciunt molestiae explicabo hic facilis. Quia ullam iste reprehenderit qui quod minima. Quam omnis reprehenderit enim tempore.

Adipisci commodi earum qui voluptatum. Facere natus omnis commodi magnam aperiam maxime maiores. In libero optio laborum quisquam et. Quam aliquid quasi aliquam libero delectus harum qui voluptate.

Placeat fuga delectus laudantium perferendis accusamus. Earum iusto voluptatibus dolorum quia ut est. Aut optio ex consequatur inventore molestiae minus sed cumque. Vitae repellat consequatur fuga. Minus molestias saepe soluta enim. Sapiente ipsa explicabo delectus necessitatibus et ut nulla occaecati.

Deleniti molestias dolor aut voluptatem fugiat odio et ea. Aspernatur natus pariatur est debitis. Et totam nihil minus aspernatur qui consectetur iure. Vero cumque deserunt in corrupti unde vitae ad soluta. Corporis sit vel quam dolorem. Atque pariatur facilis excepturi nemo distinctio.

Nobis eos iure quis illo. Cupiditate iste soluta quis et atque saepe. Eius ut ducimus perferendis deserunt optio facere reiciendis ullam. Quas voluptatum quis quibusdam. Et magni quidem porro eius deleniti id quia perferendis. Eum praesentium dolores et sit.`;

console.log(
  "How many times we have the l in Lorem Ipsum text",
  countChar(lorem, "l")
);
