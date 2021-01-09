function findMinimum(array) {

	var minimumValue=array[0];
	for(var i=1;i<= array.length;i++) {
	
		if (array[i]< minimumValue) {
			minimumValue=array[i];
		}

	}
	return minimumValue;
}

const min =  function(array) {
    

    minimumValue= findMinimum(array);
    return minimumValue;
    
}

module.exports = min;
