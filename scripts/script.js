$(document).ready(
	function(){

  // Animations JS
  // data-[num]: num denotes the scroll position. 
  // Here we can add all the keyframes for tweens through javascript.

  //BG Animations
  var bg = document.getElementById("bg");
  bg.setAttribute("data-0"," filter: blur(0px);");
  bg.setAttribute("data-200","filter: blur(5px);");

  //Shops Animation
  var shops = document.getElementById("shops"); 
  shops.setAttribute("data-0","filter: blur(3px)");
  shops.setAttribute("data-250","filter: blur(0px)");
  shops.setAttribute("data-500","filter: blur(5px)");

  // Traffic Animations 
  // Traffic layer 1
  var trafficlayer1 = document.getElementById("traffic_layer1"); 
  trafficlayer1.setAttribute("data-0","left: -120%; filter: blur(4px)");
  trafficlayer1.setAttribute("data-400","left: -116%; filter: blur(0px)");
  trafficlayer1.setAttribute("data-500","left: -115%; filter: blur(5px)");
  trafficlayer1.setAttribute("data-1100","left: -110%; filter: blur(5px)");
  trafficlayer1.setAttribute("data-1300","left: -110%; filter: blur(5px)");
  trafficlayer1.setAttribute("data-1350","left: -110%; filter: blur(0px)");
  trafficlayer1.setAttribute("data-1550","left: -110%; filter: blur(0px)");
  trafficlayer1.setAttribute("data-1600","left: -110%; filter: blur(5px)");

  // Traffic Layer 2 
  var trafficlayer2 = document.getElementById("traffic_layer2"); 
  trafficlayer2.setAttribute("data-0","left: -120%; filter: blur(4px)");
  trafficlayer2.setAttribute("data-400","left: -110%; filter: blur(0px)");
  trafficlayer2.setAttribute("data-500","left: -103%; filter: blur(5px)");
  trafficlayer2.setAttribute("data-1100","left: -50%; filter: blur(5px)");
  trafficlayer2.setAttribute("data-1350","left: -45%; filter: blur(5px)");
  trafficlayer2.setAttribute("data-1550","left: -40%; filter: blur(5px)");
  trafficlayer2.setAttribute("data-1600","left: -38%; filter: blur(0px)");
  trafficlayer2.setAttribute("data-1900","left: -35%; filter: blur(0px)");
  trafficlayer2.setAttribute("data-2000","left: -35%; filter: blur(0px)");
  trafficlayer2.setAttribute("data-5000","left: 5%; filter: blur(4px)");
  // Person
  var person = document.getElementById("person");
  person.setAttribute("data-0","filter: blur(5px);");
  person.setAttribute("data-500","filter: blur(0px);");

  // Road 
  var road = document.getElementById("road");
  road.setAttribute("data-0","filter: blur(3px);");
  road.setAttribute("data-300","filter: blur(0px);");
  road.setAttribute("data-500","filter: blur(2px);");

  // Scroll dialog.
  var scroll = document.getElementById("scroll");
  scroll.setAttribute("data-0","opacity: 1; visibility:visible;");
  scroll.setAttribute("data-200","opacity: 0; visibility:collapse;");

   // The popups are initiliased from the Json.
	}
);

 initialisePopups();

// Popups Initialise from Json.
function initialisePopups()	{

$.getJSON( "data/data.json", function( data ) {

  $.each( data, function( key, val ) {

    // var appendPopup = '<div id="'+val.name+'" class="popup" onclick="popup(this);" onmouseover="popup(this);"><a class="popup-img"><img src="./images/indicator.svg"></a><span class="popuptext" id="'+val.class+'"><h1>'+val.heading+'</h1><p>'+val.text+'</p></span></div>';

    var appendPopup = '<div id="'+val.name+'" class="narrative"><h1>'+val.heading+'</h1><p>'+val.text+'</p></div></div>';

    // console.log(appendPopup);
   	$("#popups").append(appendPopup);
   	setScrollForPopups(val);

  });
  	var s = skrollr.init(); // Used to initialise Scrollr library.
});


}


function setScrollForPopups(val){
// Popups 
  var popup = document.getElementById(val.name);
  // popup.setAttribute("data-0","visibility: collapse;");
  // // popup.setAttribute("data-"+val.scroll_start,"visibility: collapse;");
  // popup.setAttribute("data-"+val.scroll_start,"visibility: visible;");
  // popup.setAttribute("data-"+val.scroll_end,"visibility: collapse;");

  popup.setAttribute("data-0","visibility:collapse; top: 120%;");
  popup.setAttribute("data-"+parseInt(val.scroll_start-80),"visibility: visible; opacity:0;");
  popup.setAttribute("data-"+parseInt(val.scroll_start),"visibility: visible; opacity:1; top:80%;");
  popup.setAttribute("data-"+parseInt(val.scroll_end),"visibility: visible; top:0px; opacity:1;");
  popup.setAttribute("data-"+parseInt(parseInt(val.scroll_end)+80),"visibility: collapse; top:-20px; opacity:0;");

  popup.style.position = "fixed";
  popup.style.left = val.left+"%";
  
}

 // Popup function 
function popup(elt) {

    var popup = document.getElementById(elt.id);
   
    // for(var i=0;i<popup.childNodes.length;i++){
    //   console.log(popup.childNodes[i].id);
    // } // check for span element in the div.

    scrollLimit = 0;
    var element = popup.childNodes[1]; /// Span element is on index 1 for childnodes for the div.

    if($(element).css('visibility') == 'hidden'){
      $(element).css('visibility','visible');
    }
    else{
      $(element).css('visibility','hidden');
    }
    // toggles the span element to visibility.
 }


  var scrollLimit = 0; // flag to close popup on scroll
  // Modified code for popup from W3schools.
  // popup hide on scroll.
  window.onscroll = function(e) {
    scrollLimit++;
    if(scrollLimit>10)  {  
      // $(span).css('visibility','hidden');
      $("#popupWindow1").css('visibility','hidden');      
      $("#popupWindow2").css('visibility','hidden');      
      $("#popupWindow3").css('visibility','hidden');      
    }
  }

  // checking window size
  //  works best for screen resolutions 1140*720.

  $(window).resize(function(){
   var w = window.innerWidth;
   var h = window.innerHeight;
   console.log(w,h);
    if(w<1000 || h<680) {
      $("#content_wrapper").css("visibility","hidden");
      $("#space").css("visibility", "visible");
    }
    else{
     $("#space").css("visibility", "collapse");
    $("#content_wrapper").css("visibility","visible");
    }
  });