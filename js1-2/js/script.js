var base = prompt('Основа', '');
	if ((base+"").indexOf(".") > 0) {
    	alert("Основа не целое число");
    }

var exponent = prompt('Степень', '');
	if ((exponent+"").indexOf(".") > 0) {
    	alert("Степень не целое число");
    }

function pow(base,exponent) {
	console.log('Основа =', base);
	console.log('Степень =', exponent);
	var result;
	result= Math.pow(base,exponent);
	return result;
}

var endresult = pow(base,exponent);
console.log('result is', endresult);
alert(endresult);