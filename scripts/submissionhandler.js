$(document).ready(function() {
	var textbox = document.getElementById("textbox");
	var dropdown = document.getElementById("dropdown");
	var counter = 0;
	var textinput;
	var previous;

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


	//recognizes if value is changed
	$("#dropdown").on('focus', function(){
		previous = this.value;
	}).change(function convertRequest() {
		if(previous != 'tc'){
			//call base converstion
			convert_bases(previous, textinput, this.value);
		}
		else{
			//call twos complement
			twos_complement(number, word);
		}
		console.log("converted to: " + this.value);
	});

	//recognizes if word size is changed
	$("input:radio[name='wordsize']").change(function getWordsize(){
      console.log($("input[name='wordsize']:checked").val());
  	});

	
	
});
