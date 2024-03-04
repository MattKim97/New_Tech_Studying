// super set of javascript, allows us to provide extra features on top of javascript, developed by microsoft
// validates your code is working correctly, writing types is optional
// typescript is also a compiler "complies it into javascript"    


//Types in javascript

// function addNumbers ( a,b) {
//     return a + b
// }

// console.log(addNumbers("5","6"))

//gives 56 instead of 11 like we would rather have
// typescript tells us that we should only put integers instead of a string, instead of having to type out pseudocode


//TypeScript Types

/*
boolean => boolean true,false
number => number 10,1.5
string => string "hi", 'hello', `aloha` double single and backticks all used


Typescript Types
Boolean type
Number type
String type
Object type
Array type
Tuple type
Enum type
Any type
Union type
Literal type
Function type
Unknown type
*/

// Assigning Types


let age: number = 100
let firstName:string = "angela"
let busy:boolean  = true

//when assigning types can only match the data type to the type matched in the variable

let example: bigint = 100n

console.log(example)

// const screen = document.querySelector('.screen  ')
// in-order to compile   typescript can use Scrimba  or download the typescript package and then use tsc - typescript name


// function addNumbers(a,b) {
//     screen.innerHtml = a + b
// }

// hover over code shows type= any can be any time so we can change what we want to put in there

// function addNumbers(a:number,b:number) {
//     screen.innerHtml = a + b
// }

// can use .toString() and parseInt() to change the type of the variable to whatever is needed  

// function showReviewTotal (value : number) {
//     reviewTotalDisplay.innerHTML = value.toString()
// }

// how to make sure to only accept numbers in ur function
