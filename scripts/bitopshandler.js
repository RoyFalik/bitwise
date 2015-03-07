function negate(num){
	return ~num;
}

function not(num){
	return !num;
}

function shift(num, shift){
	if (shift == "left")
		num << 1;
	else
		num >> 1;
}