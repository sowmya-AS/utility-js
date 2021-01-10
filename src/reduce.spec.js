const reduce = require('./reduce');

describe ('reduce', function()  {
	
	it('Reducing using (x,y) => x+y for an empty array', function()  {
		
		expect(reduce([],(x,y) => x+y)).toBeUndefined();
	
	});

	it('Reducing using (x,y) => x+y,10 for an empty array', function()  {
		
		expect(reduce([],(x,y) => x+y,10)).toEqual(10);
	
	});

	it('Reducing using (x,y) => x+y for a non-empty array', function()  {
		
		expect(reduce(['a','b','c'],(x,y) => x+y)).toMatch(/abc/);
	});


	it('Reducing using (x,y) => x+y,z for a non-empty array', function()  {
		
		expect(reduce(['a','b','c'],(x,y) => x+y,'z')).toMatch(/zabc/);
	
	});

	

});
