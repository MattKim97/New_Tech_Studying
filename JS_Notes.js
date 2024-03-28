const stack = []

stack.push("first")
stack.push("second")
stack.push("third")
stack.push("fourth")

const queue =  []
queue.push("first")
queue.push("second")
queue.push("third")
queue.push("fourth")



console.log(stack)

console.log(queue)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)


console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue)


const DFS = (graph, start) => {
    const stack = [start]
    const result = []
    const visited = {}
    let current;

    visited[start] = true

    while(stack.length){
        current = stack.pop()
        result.push(current)

        graph[current].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true
                stack.push(neighbor)
            }
        })
    }
    return result
}

const graph = {
    a: ['b', 'c'],
    b: ['a', 'd', 'e'],
    c: ['a', 'f'],
    d: ['b'],
    e: ['b', 'f'],
    f: ['c', 'e']
}

console.log(DFS(graph, 'a'))


const BFS = (graph, start) => {
    const queue = [start]
    const result = []
    const visited = {}
    let current;

    visited[start] = true

    while(queue.length){
        current = queue.shift()
        result.push(current)

        graph[current].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true
                queue.push(neighbor)
            }
        })
    }
    return result
}

console.log(BFS(graph, 'a'))


const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let mid

    while(left <= right){
        mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid
        } else if(arr[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)) // 4


/*
Call: The call() method invokes a function with a given this value and arguments provided individually.
Apply: The apply() method invokes a function with a given this value, and arguments provided as an array (or an array-like object).
Bind: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

JSON.stringify() is a built-in method to convert objects to strings.
JSON.parse() is a built-in method to convert strings to objects.

The map() method creates a new array with the results of calling a provided function on every element in the calling array.
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
The sort() method sorts the elements of an array in place and returns the sorted array.
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
The push() method adds one or more elements to the end of an array and returns the new length of the array.
The pop() method removes the last element from an array and returns that element.
The shift() method removes the first element from an array and returns that removed element.
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
The Object.create() method creates a new object with the specified prototype object and properties.
The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.


*/

// forEach is just like a for loop for an array
//reduce method

const items = [{name: 'bike', price: 100}, {name: 'TV', price: 200}, {name: 'Album', price: 10}, {name: 'Book', price: 5}, {name: 'Phone', price: 500}, {name: 'Computer', price: 1000}, {name: 'Keyboard', price: 25}]


///currentTotal is the accumulator in a reduce method the accumulator is the value that is returned each time the function is called
const total = items.reduce((currentTotal , item) => {
    return item.price + currentTotal
},0)

console.log(total)// 1840


// the includes method is used to check if an array includes a certain value
const includes = items.includes({name: 'Book', price: 5})
console.log(includes) // false
