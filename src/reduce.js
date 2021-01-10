const reduce = (array,functionToBeApplied, value) => {
	
	let reducedValue;

	if (value == undefined) {

		if(typeof(array[0])=="number") {

			reducedValue=0;

		}
		else if(typeof(array[0])=="string") {

			reducedValue="";
		} 

		else {

			reducedValue= undefined;
		}
	}

	else  {

		reducedValue= value;
	} 


	for(let i=0;i<array.length;i++) {

		reducedValue= functionToBeApplied(reducedValue, array[i],i,array);
	}
	return reducedValue;
}

module.exports = reduce;
