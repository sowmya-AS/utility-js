const filter = require('./filter');



describe ('filter', function()  {
	
	it('filter of an empty array when x is true', function()  {
		
		expect(filter([],x => true)).toEqual([]);
	
	});

	it('filter of a non-empty array when x is true', function()  {
		
		expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
	
	});

	it('filter of an empty array when x is false', function()  {
		
		expect(filter([1,2,3],x => false)).toEqual([]);
	
	});


	it('filter of a non-empty array when x => x>1', function()  {
		
		expect(filter([1,2,3],x => x>1)).toEqual([2,3]);
	
	});

	it('filtering out uppercase from an array',function(){

		const UpperCase = alphabet => {
			return alphabet === alphabet.toUpperCase();
		}

		expect(filter(['a','B','c','D'],UpperCase)).toEqual(['B','D']);
	

	});

});


