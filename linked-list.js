const ListNode = (value = null, nextNode = null) => {
  return {
    value,
    nextNode
  }
}

const LinkedList = () => { 
  let head = null;
  let size = 0;

  const append = (value) => { // append to the end of the list 
    const newNode = ListNode(value);
    if (head === null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    size++;
  }

  const prepend = (value) => { // prepend to the beginning of the list
    const newNode = ListNode(value, head);
    head = newNode;
    size++;
  }

  const at = (index) => { // get the value at a specific index
    let indexCount = 0;
    let pointer = head;
    while (indexCount < index) {
      pointer = pointer?.nextNode;
      indexCount++;
    }
    return pointer;
  }

  const tail = () => { // get the last node in the list
    let pointer = head; 
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  
  const pop = () => { // remove the last node in the list and return its value
    let currPointer = head;
    let nextPointer = head.nextNode;
    while (nextPointer.nextNode !== null) {
      currPointer = currPointer.nextNode;
      nextPointer = nextPointer.nextNode;
    }
    const returnNode = nextPointer;
    currPointer.nextNode = null;
    size--;
    return returnNode;
  }

  const contains = (value) => { // check if the list contains a value and return true or false
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }

  const find = (value) => { // find the index of a value in the list and return its index
    let indexCounter = 0;
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value === value) return indexCounter;

      pointer = pointer.nextNode;
      indexCounter++;
    }
    return -1;
  }

  const toString = () => { // return a string representation of the list
    let pointer = head;
    let string = "";
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return `${string}null`;
  }

  const insertAt = (value, index) => { // insert a value at a specific index
    if (index === 0) {
      prepend(value);
      return;
    }

    const nodeBeforeIndex = at(index - 1);
    const newNode = ListNode(value, nodeBeforeIndex.nextNode);
    nodeBeforeIndex.nextNode = newNode;
    size++;
  }
  
  const removeAt = (index) => { // remove a value at a specific index
    if (index === 0) {
      head = head.nextNode;
      return;
    }
    const nodeBeforeIndex = at(index - 1);
    nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;
    size--;
  }

  return { // return the public methods of the linked list object
    append,
    prepend,
    get size(){ return size; },
    get head(){ return head; },
    at,
    tail,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  }
}

// Test Script
const list = LinkedList();
list.append(5);
list.append(6);
list.append(7)
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.insertAt(3, 1);
list.pop();
list.removeAt(4);

console.log(list.size);
console.log(list.head);
console.log(list.at(1));
console.log(list.find(10));
console.log(list.tail());
console.log(list.toString());