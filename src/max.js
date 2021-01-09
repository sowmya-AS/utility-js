function findMaximum(array) {

	var maximumValue=array[0];
	for(var i=1;i<= array.length;i++) {
	
		if (array[i]> maximumValue) {
			maximumValue=array[i];
		}

	}
	return maximumValue;
}

const max =  function(array) {
    

    maximumValue= findMaximum(array);
    return maximumValue;
    
}

module.exports = max;
