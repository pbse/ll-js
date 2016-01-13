var should = require('chai').should(),
    ds = require('../index'),
    LinkedList = ds.LinkedList;

    describe('LinkedList' , function(){

		describe('init' , function(){
			it('should create a Linkedlist Instance' , function(){
				var obj = new LinkedList();
				obj.should.be.an('object');
				obj.size.should.equal(0);
				obj.head.item.should.equal('head');
				should.not.exist(obj.head.next);
			});
		});

		describe('show', function(){
			var emptylist, fullist;
			before(function() {
				emptylist = new LinkedList();
				fullist = new LinkedList();
				fullist.insert(1);
				fullist.insert(2);
				fullist.insert(3);
			});

			it('should create an emptylist', function() {
				emptylist.show().should.equal('');
			});

			it('should have only one element', function() {
				emptylist.insert(1);
				emptylist.show().should.equal('1');
			});

			it('should show 3 elements', function() {
				fullist.show().should.equal('1 --> 2 --> 3');
			});
		});

		describe('remove', function() {
			var list;
			before(function() {
				list = new LinkedList();
				list.insert(1);
				list.insert(2);
				list.insert(3);
				list.insert([45,'abc']);
			});

			it('should remove node with data as 3', function() {
				list.show().should.equal('1 --> 2 --> 3 --> [45,"abc"]');
				list.remove(3);
				list.show().should.equal('1 --> 2 --> [45,"abc"]');
			});

			it('should remove first element', function() {
				list.insertAtPosition(3,2);
				list.show().should.equal('1 --> 2 --> 3 --> [45,"abc"]');
				list.removeFirst();
				list.show().should.equal('2 --> 3 --> [45,"abc"]');
			});

			it('should remove Last element', function() {
				list.insertAtPosition(1,0);
				list.show().should.equal('1 --> 2 --> 3 --> [45,"abc"]');
				list.removeLast();
				list.show().should.equal('1 --> 2 --> 3');
			});

		});

		describe('insertAtHead', function() {
			var list;
			before(function() {
				list = new LinkedList();
			});

			it('should insert this data at head', function() {
				list.insertAtHead(3);
				list.size.should.equal(1);
				should.exist(list.head.next);
			});

			it('should show the data', function() {
				list.show().should.equal('3');
				list.insertAtHead(2);
				list.show().should.equal('2 --> 3');	
			});

		});

		describe('insert', function() {
			var list;
			before(function() {
				list = new LinkedList();
			});

			it('should insert this data at head', function() {
				list.insert(3);
				list.size.should.equal(1);
				should.exist(list.head.next);
			});

			it('should show the data', function() {
				list.show().should.equal('3');
				list.insert(2);
				list.show().should.equal('3 --> 2');	
			});

			it('should not allow insertion', function() {
				list.insert(2).should.be.false;
			});

		});

		describe('insertAtPosition', function() {
			var list;
			before(function() {
				list = new LinkedList();
			});

			it('should insert this data at head', function() {
				list.insertAtPosition(3,0);
				list.size.should.equal(1);
				should.exist(list.head.next);
			});

			it('should show the data', function() {
				list.show().should.equal('3');
				list.insertAtPosition(2,1);
				list.show().should.equal('3 --> 2');	
			});

			it('should not allow insertion', function() {
				list.insertAtPosition(4,3).should.be.false;
			});

		});

		describe('Union', function() {
			var list,newlist;
			before(function() {
				list = new LinkedList();
				list.insert(1);
				list.insert(2);
				list.insert(3);
				newlist = new LinkedList();
				newlist.insert(10);
			});

			it('should union the list and change the size', function() {
				newlist.size.should.equal(1);
				list.size.should.equal(3);
				list.union(newlist);
				list.size.should.equal(4);
				newlist.size.should.equal(0);
			});

			it('should check for null of new list', function() {
				newlist.show().should.equal('');
				list.show().should.equal('1 --> 2 --> 3 --> 10');
			});

		});

		describe('reverse', function() {
			var list;
			before(function() {
				list = new LinkedList();
				list.insert(1);
				list.insert(2);
				list.insert(3);
				list.insert(4);
			});

			it('should reverse the list', function() {
				list.show().should.equal('1 --> 2 --> 3 --> 4');
				list.reverse();
				list.show().should.equal('4 --> 3 --> 2 --> 1');
			});

			it('should return false if empty or only 1 element is present', function() {
				var newlist = new LinkedList();
				newlist.insert(10);
				newlist.reverse().should.be.false;
			});

		});


	});