// 1. build out a linked list (add nodes)
// 2. display the nodes associated with the linked list (returned as an array)
// 3. search to see if the value is inside of our linked list (in inside return true otherwise return false)


class ListNode {
    constructor(val){
        this.val = val
        this.next;
    }
}

class Linkedlist{
    constructor(){
        this.tail;
        this.head;
    }
    add(newNode){
        if (!this.head){
            let node = new ListNode(newNode)
            this.head = node
            this.tail = node
        } else {
            let node = new ListNode(newNode)
            this.tail.next = node
            this.tail = node
        }
    }
    display(){
        let array = []

        if (!this.head){
            return array
        }

        let current = this.head


        while(current.next){
            array.push(current.val)
            current = current.next
        }

        array.push(current.val)

        return array
    }
    search(number){

        if (!this.head){
            return false
        }

        let current = this.head


        while(current.next){
            if (current.val === number){
                return true
            }
            current = current.next
        }

        return false

    }
}

const list = new Linkedlist

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

console.log(list.display())

console.log(list.search(4))

console.log(list.search(6));
