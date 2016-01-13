module.exports = (function() {

var Node,LinkedList;

Node = function (item) {
    this.item = item;
    this.next = null;
};

LinkedList = function () {
    this.head = new Node('head');
    this.size = 0;
};

LinkedList.prototype.find = function(data) {
    var cur_node = this.head;
    while (cur_node !== null && cur_node.item !== data) {
        cur_node = cur_node.next;
    }
    return cur_node;
};

LinkedList.prototype.position = function(data) {
    var cur_node = this.head;
    var i = 0;
    while (cur_node !== null && cur_node.item !== data) {
        cur_node = cur_node.next;
        i+=1;
    }
    if(cur_node===null) {
       	console.log('Node Not Found');
       	return false;
    }
    return i;
};

LinkedList.prototype.insert = function(data) {
   if(this.find(data) === null) {
    	var cur_node = this.head;
        while (cur_node.next !== null) {
            cur_node = cur_node.next;
        }	
        var new_node = new Node(data);
        new_node.next = cur_node.next;
        cur_node.next = new_node;
        this.size += 1;
        return true;
    }
    else {
    	return false;
    }
};

LinkedList.prototype.insertAtHead = function(data) {
    var cur_node = this.head;
    var new_node = new Node(data);
    new_node.next = cur_node.next;
    cur_node.next = new_node;
    this.size += 1;
    return true;
};

LinkedList.prototype.insertAtPosition = function(data, pos) {
    if(this.find(data) === null) {
        var cur_node = this.head;
        if(pos > 0 && cur_node.next===null) return false;
        var i = 0;
        while(cur_node.next !== null) {
            if(i<pos) {
                cur_node = cur_node.next;
                i++;
            }
            else break;
        }
        if(i<pos) return false;
        var new_node = new Node(data);
        new_node.next = cur_node.next;
        cur_node.next = new_node;
        this.size += 1;
        return true;
    } else return false;
};

LinkedList.prototype.show = function() {
    var cur_node = this.head;
    if(!cur_node.next) return '';
    var out = [];
    while (cur_node.next !== null) {
        out.push(JSON.stringify(cur_node.next.item));
        cur_node = cur_node.next;
    }
    var res = out.join(' --> ');
    return res;
};

LinkedList.prototype.getPrevious = function(data) {
    var cur_node = this.head;
    while (cur_node !== null && cur_node.next.item !== data) {
        cur_node = cur_node.next;
    }
    return cur_node;
};

LinkedList.prototype.remove = function(data) {
    var prev_node = this.getPrevious(data);
    if (prev_node.next !== null) {
        prev_node.next = prev_node.next.next;
        this.size -= 1;
        return true;
    }
    else {
    	return false;
    }
};

LinkedList.prototype.removeFirst = function() {
    var cur_node = this.head;
    if(cur_node.next!=null) {
      cur_node.next = cur_node.next.next;
      this.size -=1;
      return true;  
    }
    else return false;
};

LinkedList.prototype.removeLast = function() {
    var cur_node = this.head;
    if(cur_node.next!=null) {
        var temp;
        while(cur_node.next!=null) {
            temp = cur_node;
            cur_node = cur_node.next;
        }
        temp.next = cur_node.next;
        return true;
        this.size -=1;
    }
    else return false;
};

LinkedList.prototype.union = function(NewList) {
    if(NewList instanceof LinkedList === false) {
	   console.log("Wrong Parameter passed");
	   return false;
    }
    var cur_node = this.head;
    while (cur_node.next !== null) {
        cur_node = cur_node.next;
    }
    var NewListHead = NewList.head;
    cur_node.next = NewListHead.next;
    this.size += NewList.size;
    NewListHead.next = null;
    NewList.size = 0;
};

LinkedList.prototype.reverse = function() {
    var previous = null, next_node = null;
    var cur_node = this.head;
    if(this.size <= 1) return false;
    cur_node = cur_node.next;
    next_node = cur_node;
    while(cur_node !== null) {
        next = cur_node.next;
        cur_node.next = previous;
        previous = cur_node;
        cur_node = next;
    }
    this.head.next = previous; 
};

return {
    LinkedList : LinkedList
};

})();