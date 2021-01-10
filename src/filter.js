const filter = (array,functionToBeApplied) => {
	var resultArray = [];
	
	for( let i=0;i<array.length;i++){
		var resultantValue=functionToBeApplied(array[i]);
		if(resultantValue){
		
			resultArray.push(array[i]);	
		}

	}	
	
    return resultArray;

}
module.exports = filter;
