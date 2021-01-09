var head = require('./head');

describe('Head', function()  {

	it('Head of [1,2,3] is 1', function() {
		expect(head([1,2,3])).toEqual(1);
	});

	it('head of [] is null', function() {
		expect(head([])).toEqual(undefined);
	});
	
	it('head of [4,7,2,1,3] is 4', function() {
		expect(head([4,7,2,1,3])).toEqual(4);
	});
	



	
})