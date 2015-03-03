$(document).ready(function() {
	var textbox = document.getElementById("textbox");
	var dropdown = document.getElementById("dropdown");
	var counter = 0;

	//creates a new div of a submitted number
	$("#submitbutton").on("click", function submitNumber(event) {
		var txtinput = textbox.value;
		if (txtinput === "")
		{
			console.log("please enter a number");
		}
		else{
			var priority = dropdown.value;
			var elementID = "draggable" + counter;
			console.log(elementID);
			// $('#submissioncontainer').empty();
			$('#submissioncontainer').append("<aside id='"+elementID+"' draggable='true'>" + txtinput + "</aside>");
			$("<style type='text/css'> #"+elementID+"{\
			    position:  absolute;\
			    left: 0;\
			    top: 0;\
			    width: 200px; \
			    background: rgba(255,255,255,0.66); \
			    border: 2px solid rgba(0,0,0,0.5);\
			    border-radius: 4px; padding: 8px;\
			    z-index: 9999;\
				} </style>").appendTo("head");
			var dm = document.getElementById(elementID);
			console.log(dm);
			dm.addEventListener('dragstart', drag_start,false);  
			textbox.value = "";
			counter++;
		}
	});

	//recognizes if value is changed
	$("#dropdown").change(function convertRequest() {
		console.log("converted to: " + this.value);
	});
	
});