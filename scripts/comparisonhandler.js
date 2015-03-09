function comparison(elem1, elem2){
	//pop up a little menu
	$('#submissioncontainer').append("<aside id='menu'></aside>");
	$("#menu").append("<button onclick='xor("+elem1.id+ "," + elem2.id+")' class='btn'>XOR</button><br>");
	$("#menu").append("<button onclick='and("+elem1.id+ "," + elem2.id+")' class='btn'>AND</button><br>");
	$("#menu").append("<button onclick='or("+elem1.id+ "," + elem2.id+")' class='btn'>OR</button><br>");
	$("#menu").append("<button onclick='add("+elem1.id+ "," + elem2.id+")' class='btn'>Add</button><br>");
	$("<style type='text/css'> #"+ menu +"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid rgba(0,0,0,0.5);\
			    border-radius: 4px; padding: 25x;\
			    z-index: 9999;\
				} </style>").appendTo("head");
	var menuElem = document.getElementById("menu");
	var menuleft = ((parseInt($('#' + elem1.id).css('left'))) + (parseInt($('#' + elem2.id).css('left'))))/2;
	var menutop = parseInt($('#' + elem1.id).css('height')) + parseInt($('#' + elem1.id).css('top'));
	menuElem.style.left = menuleft + 'px';
	menuElem.style.top = menutop+ 'px';

	console.log(elem1.id);
	console.log(elem2.id);
	//create a div with buttons inside

	//each button maps to different functions
}

function xor(elem1, elem2){

}

function and(elem1, elem2){

}
function or(elem1, elem2){

}
function add(elem1, elem2){
	var dec1;
	var txtinput;
	$("#menu").remove();
	var base1 = document.getElementById("base"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML;
	var value1 = document.getElementById("value"+elem1.id.substr(elem1.id.indexOf("draggable")+9)).innerHTML;
	dec1 = convert_bases(base1, value1, "dec");

	var base2 = document.getElementById("base"+elem2.id.substr(elem2.id.indexOf("draggable")+9)).innerHTML;
	var value2 = document.getElementById("value"+elem2.id.substr(elem2.id.indexOf("draggable")+9)).innerHTML;
	dec2 = convert_bases(base2, value2, "dec");
	
	console.log(dec1);
	console.log(dec2);
	var result = parseInt(dec1, 10) + parseInt(dec2, 10);
	console.log("result: "+ result);
	txtinput = convert_bases("dec", ""+result, ""+base2);
	//create a new element that is the result of the operation selected -- located in submissionhandler
	resultElement(elem1, elem2, txtinput, base2);
}


function test2(elem1, elem2){
	console.log(elem1);
	console.log(elem2);
	$("#menu").remove();
	//create a new element that is the result of the operation selected -- located in submissionhandler
	// resultElement(elem1, elem2);
}