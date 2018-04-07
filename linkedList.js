/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let linkedList = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }

  let head = null;
  let tail = null;
  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let node = {
      value: value,
      next: null,
    }
    if (head === null) {
      head = node;
      tail = head;
    } else {
      tail['next'] = node;
      tail = node;
    }
    return node;
  }

  function get(number) {
    if (number < 0) {
      return false;
    }
    let nodeHolder = head;
    for (let i = 0; i < number; i++) {
      nodeHolder = nodeHolder.next;
      if (nodeHolder === null) {
        return false;
      }
    }
    return nodeHolder;
  }

  function remove(number) {
    let indexNode = get(number);
    let saveNode = get(number - 1);

    if (indexNode === false) {
      return false;
    }

    if (number === 0) {
      head = indexNode.next;
    }

    indexNode = indexNode.next;

    if (indexNode === null) {
      console.log(saveNode);
      saveNode.next = null;
      tail = saveNode;
    } else {
      saveNode.next = indexNode;
    }
    
  }

  function insert(value, number) {
    let currentNode = get(number);
    let prevNode = get(number - 1);
    let newNode = {
      value: value,
      next: null,
    }
    if (currentNode === false) {
      return false;
    }
    if (number === 0) {
      newNode['next'] = currentNode;
      head = newNode;
    } else {
      prevNode['next'] = newNode;
      newNode['next'] = currentNode;
    }
  }

  return linkedList;
}