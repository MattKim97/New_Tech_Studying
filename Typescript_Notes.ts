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


/* const reviews = [
   {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

*/
//type inference typescript understand which type u have for each variable

const something = 23

// use let infers the type of the variable *number* while const locks it as the value
// typescript will assign type any if it does not know the type of the variable

let anotherexample: string

anotherexample = "someone"


//Object Types

//can define what type makes up an object

/*const you: object = {
    userName: 'Bobby', // string
    isReturning: true, // boolean
 }

 */

 // infers the type of all values for each key in the object
 //object types are almost like javascript objects but end with a semi-colon

 // console.log(you.userName) cannot do this needs to be more specialized

 const you: {
    userName: string; // string
    isReturning: boolean; // boolean
    age: number;
 } = {
    userName: 'Bobby', // string
    isReturning: true, // boolean
    age: 23
 }

 // if you put a specific value within the object used for type inference you must use that value for
 // the key or else typescript will give an error
 
 /*
For example

const you: {
    usernName :"Bobby"  
} = {
    usernName: "Bobb"
 } this will throw an error since it must be "Bobby" for the key usernName instead of "Bobb"
 */
