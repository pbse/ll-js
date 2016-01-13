# linkedlist-js

A small library that creates LinkedList datastructure and provides most basic and non basic methods for it.
This LinkedList data structure is a Singly Linked List.

## Installation

  npm install ll-js --save

## Usage
```

  var ll = require('ll-js')
      LinkedList = ll.LinkedList;

  var obj = new LinkedList();
  obj.insert('x');
  obj.insert('y');
  obj.insert('z');
  var newob = new LinkedList();
  newobj.insert('Insert any object here');
  obj.union(newobj);
  obj.show(); // Logs all elements
  newobj.show(); // Logs null element
  
```  
## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
