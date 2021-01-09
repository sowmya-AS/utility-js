const map = (array,functionToBeApplied) => {
	var resultArray= [];
	for(var i=0;i<array.length;i++) {
		var resultantValue=functionToBeApplied(array[i],i,array);
		resultArray[i]=resultantValue;
	}
    return resultArray;
}

module.exports = map;
