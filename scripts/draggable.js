    //on drag start set the data to (x coordinate, y coordinate, elementID)
	function drag_start(ev) {
		    var style = window.getComputedStyle(ev.target, null);
		    var elementID = ev.target.id;
		    var packet = (parseInt(style.getPropertyValue("left"),10) - ev.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - ev.clientY) + ',' + elementID;
		    ev.dataTransfer.setData("text/plain", packet);
		} 
		function drag_over(event) { 
		    event.preventDefault(); 
		    return false; 
		} 
		function drop(event) { 
		    event.preventDefault();
		    var packet = event.dataTransfer.getData("text/plain").split(',');
		    var dm = document.getElementById(packet[2]);
		    dm.style.left = (event.clientX + parseInt(packet[0],10)) + 'px';
		    dm.style.top = (event.clientY + parseInt(packet[1],10)) + 'px';
		    return false;
		} 

$(document).ready(function() {
		// var dm = document.getElementById('dragme');
		var workspace = document.getElementById('workspace'); 
		// dm.addEventListener('dragstart', drag_start,false);  
		workspace.addEventListener('dragover',drag_over,false); 
		workspace.addEventListener('drop',drop,false);
});