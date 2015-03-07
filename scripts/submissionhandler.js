$(document).ready(function() {
	var textbox = document.getElementById("textbox");
	var dropdown = document.getElementById("dropdown");
	var counter = 0;
	var txtinput;
	var previous;
	var result;
	var word_size;

	//creates a new div of a submitted number
	$("#submitbutton").on("click", function submitNumber(event) {
		txtinput = textbox.value;
		if (txtinput === "")
		{
			console.log("please enter a number");
		}
		else{
			var priority = dropdown.value;
			var elementID = "draggable" + counter;
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>" + txtinput + "</aside>");
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    width: 200px; \
			    height: 40px;\
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
			result = twos_complement(txtinput, word_size);
		}
		textbox.value = result;
		console.log("converted to: " + this.value);
	});

	//recognizes if word size is changed
	$("input:radio[name='wordsize']").change(function getWordsize(){
      console.log($("input[name='wordsize']:checked").val());
  	});
});
