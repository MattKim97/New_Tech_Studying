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

 //Array Type

 // can store anything in arrays

 // in JS arrays are a type of object, in typescript can choose to specify the type of the elements in the array


 let names: string[] = ['bobby', 'tammy', 'katie']

 // this is because typescript infers that this array is full of strings
 // if you put a number in the array it will throw an error
// if u want to put numbers as wel need to use a union type

let namesNums: (string | number)[] = ['bobby', 'tammy', 'katie', 23]

// an array of objects would be :{name:string;stars:number;loyaltyUser:boolean;date:string}[]

// the array of objects then must follow the object format within the type, as well as all the types for each key in the object

// Properties
//array of objects
const properties :{
    image: string;
    title: string;
    pricePerNight: number;
    addressFirstLine: string;
    town: string;
    postCode: number;
    country: string;
    contact: string;
    avaliablity: boolean;
}[] = [
    {
        image: 'https://www.placecage.com/200/300',
        title: 'Cage Villa',
        pricePerNight: 100,
        addressFirstLine: '123 Cage Lane',
        town: 'Cage City',
        postCode: 12345,
        country: 'Cage Country',
        contact: ' 123-456-7890',
        avaliablity: true
    }
]


// export function populateProperties(array){
//     const list = document.createElement("ul")
//     propertiesDisplay.appendChild(list)
//     for (let i = 0; i < array.length; i++){
//         const liNode = document.createElement("li")
//         const image = document.createElement("img")
//         const title = document.createElement("div")
//         image.setAttribute('src',properties[i].image)
//         title.innerHTML = array[i].title
//         liNode.appendChild(image)
//         liNode.appendChild(title)
//         list.appendChild(liNode)
//     }
// }


//Tuple Types

// a fixed length array with a specific type for each element
// it is not a normal array

// const example: [string, number] = ['example string', 100]

const exmapleTup : [string,string,string,number] = ['example string', 'example string', 'example string', 100]
// const exmapleTup : [string,string,string,number] = [200, 'example string', 'example string', 100]
// the commented our example will throw and error because the first element in the tuple is not a string

// let currentLocation : [string,string,string] = ["Lancaster" , "9:42" , "54F"]
// footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] 'deg'

// The Enum type

// a way of giving more friendly names to sets of numeric values

// enum Permissions {
//     ADMIN,
//     READ_ONLY,
// }


// Any Type

// super flexible allows us to assign any particular value to a variable
// can be used to avoid errors when you do not know the type of a variable
//any[] allows us to accept any type of value in an array
// meaning we can have two different types of objects in the same array
// better to use than union if you do not know the type of the variable
// avoid using any as much as possible because it defeats the purpose of typescript


// Union Type

// allows us to store a value of one or serval types in a single variable
// if only want to allow numbers or strings for a value 

// let example : (number | string) = "example"


// Literal Type
// can allow an exact value to be used, number boolean or string
// can be used to restrict the values that a variable can take
// can be used with union types
// type Price = 45 | 100 | 200 | 300 this is known as a type alias want to declare type outside of the variable
// therefore price must be one of these four values

//Function Types
// can define what type of function can be assigned to a variable
// can define the type of the parameters and the return type of the function
// can also define the type of the function itself

function add ( first: number, second: number) : number {
    return first + second
} // can only return a number

//Void Type
// used when a function does not return anything
// can only assign undefined or null to a variable of type void
// function can only be void or any other type cannot put undefined type, unless you specifically return undefined in the function


//week 2 quiz passed 100%


//Week 3 Advanced Typescript Features

//File Organizations

// keep enums in a seperate file, and import them into the file you want to use them in
// keeping types in a seperate file is also a good idea

// do this for Readability, Reusability, and Maintainability
