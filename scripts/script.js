document.onload = function(){
	// var bus = document.createAttribute("data-0");
	// bus.value = "left: -120%; filter: blur(2px)";
	// document.getElementById("bus").setAttributeNode(bus);

	document.getElementById("bus").setAttribute("data-0","left: -120%; filter: blur(2px)");
	var s = skrollr.init(); // Used to initialise Scrollr library.
}
// data-0="left: -120%; filter: blur(2px)" 
//         data-500="left:30%; filter: blur(0px)" 
//         data-800="left:30%;" 
//         data-900="left: 100%;"