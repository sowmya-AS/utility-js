var tail = require('./tail');

describe('Tail', function()  {

	it('Tail of [1,2,3] is [2,3]' ,function() {
		expect(tail([1,2,3])).toEqual([2,3]);
	});

	it('Tail of [] is []' ,function() {
		expect(tail([])).toEqual([]);
	});


	
})