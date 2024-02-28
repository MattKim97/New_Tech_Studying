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
