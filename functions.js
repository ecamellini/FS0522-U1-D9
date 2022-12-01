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
