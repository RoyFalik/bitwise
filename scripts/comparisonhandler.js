function comparison(elem1, elem2){
	$('#submissioncontainer').append("<aside id='menu'></aside>");
	$("#menu").append("<button onclick='test2("+elem1.id+ "," + elem2.id+")' class='btn'>XOR</button><br>");
	$("#menu").append("<button onclick='test2("+elem1.id+ "," + elem2.id+")' class='btn'>AND</button><br>");
	$("#menu").append("<button onclick='test2("+elem1.id+ "," + elem2.id+")' class='btn'>OR</button><br>");
	$("#menu").append("<button onclick='test2("+elem1.id+ "," + elem2.id+")' class='btn'>Add</button><br>");
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

function test(elem1){
	console.log(elem1);
}

function test2(elem1, elem2){
	console.log(elem1);
	console.log(elem2);
	$("#menu").remove();
	//create a new element that is the result of the operation selected -- located in submissionhandler
	resultElement(elem1, elem2);
}