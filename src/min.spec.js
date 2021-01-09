const min = require('./min');

describe ('min', function(){
	
	it('Min of [1,2,3,4] is 1', function() {
		expect(min([1,2,3,4])).toEqual(1);
	});
})