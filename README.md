# ll-js (LinkedList in Javascript)

A small library that creates LinkedList datastructure and provides most basic and non basic methods for it.
This LinkedList data structure is a Singly Linked List.

## Installation

  npm install ll-js --save

## Usage - Creation of Linked List

```

  var ll = require('ll-js')
      LinkedList = ll.LinkedList;

  var obj = new LinkedList();
  obj.insert('x');
  obj.insert('y');
  obj.insert('z');
  obj.show(); // logs x --> y --> z
  ```  
##  Usage - Joining two Different Linked List Objects

```  
  var newob = new LinkedList();
  newobj.insert('Insert any object here');
  obj.union(newobj);
  obj.show(); // Logs all elements
  newobj.show(); // Logs null element
  
```

## Usage - Other Functions

```  
  obj.find(data); // Returns the node if available
  obj.position(data); // Returns the position of data if available
  obj.insertAtHead(data); // Inserts particularly at Head
  obj.insertAtPosition(data); // Inserts at the position specified
  obj.remove(data); // Removes the data from the list if available
  obj.removeFirst(); // Removes the first element in the list
  obj.removeLast(); // Removes last element in the list
  obj.reverse(); // Reverses the entire list.
  
```  

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.1 Document Updates
* 0.1.0 Initial release
