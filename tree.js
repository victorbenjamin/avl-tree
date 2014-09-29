'use strict';

module.exports = (function() {

	var Node = function(value, comparator) {
		Object.defineProperty(this, 'value', {value: value, writable: false});
		Object.defineProperty(this, 'height', {value: 0, writable: false, configurable: true});
		Object.defineProperty(this, 'comparator', {value: comparator, writable: false});
	};

	Node.prototype.insert = function(node) {
		var side = (this.comparator(node.value, this.value))?'right':'left';
		if(this[side])
			this[side].insert(node);
		else {
			Object.defineProperty(this, side, {value: node, writable: false});
			Object.defineProperty(node, 'parent', {value: this, writable: false});	
		};
		var hr = this.right?this.right.height:0;
		var hl = this.left?this.left.height:0;
		var h = (hr > hl)?hr:hl;
		Object.defineProperty(this, 'height', {value: h + 1, writable: false});

	};

	Node.prototype.hasBothSide = function() {
		return this.right && this.left;
	};

	Node.prototype.hasAnySide = function() {
		return this.right || this.left;
	};

	var Tree = function(comparator) {
		Object.defineProperty(this, 'comparator', {value: comparator, writable: false});	
	};

	Tree.prototype.insert = function(value) {
		var newNode = new Node(value, this.comparator);
		if(this.isEmpty()) {
			Object.defineProperty(this, 'root', {value: newNode, writable: false});
		} else {
			this.root.insert(newNode);
		};
		return newNode;
	};

	Tree.prototype.isEmpty = function() {
		return this.root?false:true;
	};

	Tree.prototype.isNotEmpty = function() {
		return !this.isEmpty();
	};

	return {
		Tree : Tree
	};

})();