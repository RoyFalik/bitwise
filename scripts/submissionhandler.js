var counter = 0;
var txtinput;
var previous;
var result;
var word_size;

function resultElement(elem1, elem2){
	var elementID = "draggable" + counter;
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>Result of: " + elem1.id + " and " + elem2.id + "</aside>");
			$("#"+elementID).append("\
				<div class='btn-group'>\
  					<button type='button' class='btn btn-sm dropdown-toggle' data-toggle='dropdown' aria-expanded='false' style='float:right;' id='button" + counter +"'>\
    					Action <span class='caret'></span>\
  					</button>\
  					<ul class='dropdown-menu' role='menu'>\
					    <li onclick='test(" +  elementID + ")'><a>~</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>!</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Shift left <<1</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Shift right >>1</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to dec</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to hex</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to two's complement</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to binary</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Delete</a></li>\
  					</ul>\
				</div>\
			");
			var elemleft = ((parseInt($('#' + elem1.id).css('left'))) + (parseInt($('#' + elem2.id).css('left'))))/2;
			var elemtop = parseInt($('#' + elem1.id).css('height')) + parseInt($('#' + elem1.id).css('top'));
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid rgba(0,0,0,0.5);\
			    border-radius: 4px; padding: 8px;\
			    z-index: 9999;\
				} </style>").appendTo("head");
			var dm = document.getElementById(elementID);
			dm.style.left = elemleft + 'px';
			dm.style.top = elemtop + 'px';
			dm.addEventListener('dragstart', drag_start,false); 
			dm.addEventListener('dragover', drag_over_item,false); 
			dm.addEventListener('drop',drop_over_item,false); 
			textbox.value = "";
			counter++;
}

function newElement(txtinput){
	var elementID = "draggable" + counter;
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>"+txtinput+"</aside>");
			$("#"+elementID).append("\
				<div class='btn-group'>\
  					<button type='button' class='btn btn-sm dropdown-toggle' data-toggle='dropdown' aria-expanded='false' style='float:right;' id='button" + counter +"'>\
    					Action <span class='caret'></span>\
  					</button>\
  					<ul class='dropdown-menu' role='menu'>\
					    <li onclick='test(" +  elementID + ")'><a>~</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>!</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Shift left <<1</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Shift right >>1</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to dec</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to hex</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to two's complement</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Convert to binary</a></li>\
					    <li onclick='test(" +  elementID + ")'><a>Delete</a></li>\
  					</ul>\
				</div>\
			");
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid rgba(0,0,0,0.5);\
			    border-radius: 4px; padding: 8px;\
			    z-index: 9999;\
				} </style>").appendTo("head");
			var dm = document.getElementById(elementID);
			dm.addEventListener('dragstart', drag_start,false); 
			dm.addEventListener('dragover', drag_over_item,false); 
			dm.addEventListener('drop',drop_over_item,false); 
			textbox.value = "";
			counter++;
			console.log(elementID);
}

$(document).ready(function() {
	var textbox = document.getElementById("textbox");
	var dropdown = document.getElementById("dropdown");

	//creates a new div of a submitted number
	$("#submitbutton").on("click", function submitNumber(event) {
		var txtinput = textbox.value;
		if (txtinput === "")
		{
			console.log("please enter a number");
		}
		else{
			newElement(txtinput);
		}
	});

		//when dropdown selected
	$("#dropdown").on('focus', function(){
		//get input base
		previous = this.value;
		txtinput = textbox.value;

		//when dropdown value (base) is changed, get output base
	}).change(function convertRequest() {
		//if original base was not two's complement, convert to new base
		if(previous != 'tc' && this.value != 'tc'){
			result = convert_bases(previous, txtinput, this.value);
		}
		//if two's complement, interpret as two's complement
		else{
			//determine word size
			if(document.getElementById("thirty_two_bit").checked)
				word_size = 32;
			else if(document.getElementById("sixty_four_bit").checked)
				word_size = 64;
			else
				alert("Please choose a word size");

			//interpret
			result = twos_complement(previous, txtinput, word_size);
		}
		textbox.value = result;
		console.log("converted to: " + this.value);
	});

});
	
