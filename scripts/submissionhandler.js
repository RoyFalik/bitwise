var counter = 0;
var txtinput;
var previous;
var result;
var word_size;

function resultElement(elem1, elem2, txtinput, base){
	var elementID = "draggable" + counter;
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>" + txtinput + "</aside>");
			$("#"+elementID).append("\
				<div class='btn-group'>\
  					<button type='button' class='btn btn-sm dropdown-toggle' data-toggle='dropdown' aria-expanded='false' style='float:right;' id='button" + counter +"'>\
    					Action <span class='caret'></span>\
  					</button>\
  					<ul class='dropdown-menu' role='menu'style='z-index:9999;' >\
					    <li onclick='negate(" +  elementID + ")'><a>~</a></li>\
					    <li onclick='not(" +  elementID + ")'><a>!</a></li>\
					    <li onclick='shift_left(" +  elementID + ")'><a>Shift left <<1</a></li>\
					    <li onclick='shift_right(" +  elementID + ")'><a>Shift right >>1</a></li>\
					    <li onclick='convertDec(" +  elementID + ")'><a>Convert to dec</a></li>\
					    <li onclick='convertHex(" +  elementID + ")'><a>Convert to hex</a></li>\
					    <li onclick='convertTC(" +  elementID + ")'><a>Convert to two's complement</a></li>\
					    <li onclick='convertBin(" +  elementID + ")'><a>Convert to binary</a></li>\
					    <li onclick='deleteElement(" +  elementID + ")'><a>Delete</a></li>\
  					</ul>\
				</div>\
				<div id='base" + counter +"' style='display:none;'>"+base+"\
				</div>\
				<div id='value" + counter +"' style='display:none;'>"+txtinput+"\
				</div>\
			");
			var elemleft = ((parseInt($('#' + elem1.id).css('left'))) + (parseInt($('#' + elem2.id).css('left'))))/2;
			var elemtop = parseInt($('#' + elem1.id).css('height')) + parseInt($('#' + elem1.id).css('top'));
			var color;
				switch(base){
        			case "hex":
            			color = "red";break;
        			case "dec":
            			color = "blue";break;
            		case "bin":
            			color = "green";break;
            		case "tc":
            			color = "yellow";break;
        			default:
            			color = "black";break;
    			}
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid;\
			    border-color: "+color+";\
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

function newElement(txtinput, base){
	var elementID = "draggable" + counter;
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>" + txtinput + "</aside>");
			$("#"+elementID).append("\
				<div class='btn-group'>\
  					<button type='button' class='btn btn-sm dropdown-toggle' data-toggle='dropdown' aria-expanded='false' style='float:right;' id='button" + counter +"'>\
    					Action <span class='caret'></span>\
  					</button>\
  					<ul class='dropdown-menu' role='menu'style='z-index:9999;' >\
					    <li onclick='negate(" +  elementID + ")'><a>~</a></li>\
					    <li onclick='not(" +  elementID + ")'><a>!</a></li>\
					    <li onclick='shift_left(" +  elementID + ")'><a>Shift left <<1</a></li>\
					    <li onclick='shift_right(" +  elementID + ")'><a>Shift right >>1</a></li>\
					    <li onclick='convertDec(" +  elementID + ")'><a>Convert to dec</a></li>\
					    <li onclick='convertHex(" +  elementID + ")'><a>Convert to hex</a></li>\
					    <li onclick='convertTC(" +  elementID + ")'><a>Convert to two's complement</a></li>\
					    <li onclick='convertBin(" +  elementID + ")'><a>Convert to binary</a></li>\
					    <li onclick='deleteElement(" +  elementID + ")'><a>Delete</a></li>\
  					</ul>\
				</div>\
				<div id='base" + counter +"' style='display:none;'>"+base+"\
				</div>\
				<div id='value" + counter +"' style='display:none;'>"+txtinput+"\
				</div>\
			");
			var color;
				switch(base){
        			case "hex":
            			color = "red";break;
        			case "dec":
            			color = "blue";break;
            		case "bin":
            			color = "green";break;
            		case "tc":
            			color = "yellow";break;
        			default:
            			color = "black";break;
    			}
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 230px;\
			    top: 110px;\
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid;\
			    border-color: "+color+";\
			    border-radius: 4px; padding: 8px;\
			    z-index: 9998;\
				} </style>").appendTo("head");
			var dm = document.getElementById(elementID);
			dm.addEventListener('dragstart', drag_start,false); 
			dm.addEventListener('dragover', drag_over_item,false); 
			dm.addEventListener('drop',drop_over_item,false); 
			textbox.value = "";
			counter++;

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
			var base = dropdown.value;
			newElement(txtinput, base);
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
		if(this.value != 'tc'){
			result = convert_bases(previous, txtinput, this.value);
		}
		//if two's complement, interpret as two's complement
		else{
			//interpret
			var word_size;
			//determine if and which word size is chosen
			if(document.getElementById("thirty_two_bit").checked)
				word_size = 32;
			else if(document.getElementById("sixty_four_bit").checked)
				word_size = 64;
			else
				alert("Please choose a word size");

			result = twos_complement(txtinput, word_size);
		}
		textbox.value = result;
	});

	var dec = "0123456789-".split("");
	var bin = ["0", "1"];
	var hex = "0xabcdefXABCDEF0123456789".split("");
	$("#textbox").on('input', function(event){
		var last = textbox.value.substring(textbox.value.length-1);
		var type = dropdown.value;
		if ((type == "bin" || type == "tc") && bin.indexOf(last) == -1){
			textbox.value = textbox.value.substring(0, textbox.value.length-1);
		}
		else if (type == "hex" && hex.indexOf(last) == -1){
			textbox.value = textbox.value.substring(0, textbox.value.length-1);	
		}
		else if (type == "dec" && dec.indexOf(last) == -1){
			textbox.value = textbox.value.substring(0, textbox.value.length-1);	
		}
	});



});
	
