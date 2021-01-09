const map = require('./map');

describe ('map', function()  {
	
	it('cube of an empty array', function()  {
		const cube = function(element)  {
			return element*element*element;
		}
		expect(map([],cube)).toEqual([]);

	});

	it('cube of a non-empty array', function()  {
		const cube = function(element)  {
			return element*element*element;
		}
		expect(map([1,2,3],cube)).toEqual([1,8,27]);

	});

	it('identity elemets of a non-empty array', function()  {
		const identity = function(element)  {
			return element;
		}
		expect(map([1,2,3],identity)).toEqual([1,2,3]);
	});


	it('adding one to an object', function()  {
		
		expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);

	});
		

});


