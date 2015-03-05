function comparison(elem1, elem2){
	$('#submissioncontainer').append("<aside id='menu'></aside>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>~</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>!</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>Shift left <<1</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>Shift right >>1</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>Convert to: Dec</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>Convert to: Hex</button><br>");
	$("#menu").append("<button onclick='test("+elem1.id+ "," + elem2.id+")' class='btn'>Convert to: TC</button><br>");
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
	var style = window.getComputedStyle(elem2, null);
	menuElem.style.left = (parseInt(style.getPropertyValue("left"),10))+ 200 + 'px';
	menuElem.style.top = (parseInt(style.getPropertyValue("top"),10)) +40+ 'px';

	console.log(elem1.id);
	console.log(elem2.id);
	//create a div with buttons inside

	//each button maps to different functions
}

function test(elem1, elem2){
	console.log(elem1.id);
	console.log(elem2.id);
}