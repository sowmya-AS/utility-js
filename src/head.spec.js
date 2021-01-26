const head = require('./head');

describe('Head', () => {

	it('Head of [1,2,3] is 1', function() {
		expect(head([1,2,3])).toEqual(1);
	});

	it('head of [] is undefined', function() {
		expect(head([])).toEqual(undefined);
	});
		
})