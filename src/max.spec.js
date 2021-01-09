const max = require('./max');

describe ('max', function(){
	
	it('Max of [1,2,3,4] is 4', function() {
		expect(max([1,2,3,4])).toEqual(4);
	});
})