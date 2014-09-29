'use strict';

var Tree = require('./tree').Tree;

exports.test1 = function(test) {
	var t = new Tree(function(value1, value2) {
		return value1 > value2;
	});
	test.ok(t.isEmpty());

	var root = t.insert(1);
	test.ok(t.isNotEmpty());
	test.equal(t.root.height, 0);
	test.equal(t.root.value, 1);
	
	var node2 = t.insert(2);
	test.equal(root.height, 1, 'Altura errada');
	test.equal(node2.height, 0, 'Altura errada');
	
	var node0 = t.insert(0);
	test.equal(node0.height, 0, 'Altura errada');
	
	var nodeM1 = t.insert(-1);
	test.equal(t.root.height, 2);
	test.equal(node0.height, 1, 'Altura errada');
	//test.equal(t.root.height, 0);
	test.done();
};