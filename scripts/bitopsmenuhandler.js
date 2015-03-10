
function negate(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var num1 = parseInt(value1, get_base(base1));
	var txtinput = twos_complement(~num1, 32);
	newElement(txtinput, "tc");
}

function not(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var num1 = parseInt(value1, get_base(base1));
	if (!num1)
	{
		result = 1;
	}
	else
		result = 0;
	var txtinput = twos_complement(""+result, 32);
	newElement(txtinput, "tc");
}

function shift_left(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var num1 = parseInt(value1, get_base(base1));
	var result = num1<<1;
	if (base1 !="tc")
	{
		var newbase = convert_bases("dec", ""+result, base1);
	}
	else
		var newbase = twos_complement(""+result, 32);
	newElement(newbase, base1);
}

function shift_right(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var num1 = parseInt(value1, get_base(base1));
	var result = num1>>1;
	if (base1 !="tc")
	{
		var newbase = convert_bases("dec", ""+result, base1);
	}
	else
		var newbase = twos_complement(""+result, 32);
	newElement(newbase, base1);
}

function convertDec(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	if (base1 == "dec")
		return;
	var newbase = convert_bases(base1, value1, "dec");
	newElement(newbase, "dec");
}

function convertHex(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	if (base1 == "hex")
		return;
	var newbase = convert_bases(base1, value1, "hex");
	newElement(newbase, "hex");
}

function convertBin(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	if (base1 == "bin")
		return;
	var newbase = convert_bases(base1, value1, "bin");
	newElement(newbase, "bin");
}

function convertTC(elem1){
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML.trim();
	if (base1 == "tc")
		return;
	var newbase = twos_complement(value1, 32);
	newElement(newbase, "tc");
}

function deleteElement(elem){
	elem.remove();
}