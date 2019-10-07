$(document).ready(function(){
	
  addCollapsible();
	
  // Close menu when an item is selected.
  $("#menu").on("click", function () {
	  $("#menu-btn").click();
  });


  
  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = $(this).attr("href");
	  var margin = isPortrait() ? 135 : 65;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({ scrollTop: $(hash).position().top - margin }, 500, function() {
		  if (history.pushState) { 
		    history.pushState(null, null, hash);
		  } else {
			window.location.hash = hash;
		  }
	  });
        // Add hash (#) to URL
	  //return false;
	  //window.location.hash = hash;
	  
    } // End if
	
	

  });
});



function addCollapsible() {
  $("#button-sjj").on('click', function(event) {
    $('#about-sjj').css("display", "block");
    $('#about-bujinkan').css("display", "none");
    $('#about-sjj-barn').css("display", "none");
    $('#about-sjj-rank').css("display", "none");
	
	//var margin = isPortrait() ? 65 : 110;
	//$([document.documentElement, document.body]).animate({ scrollTop: $("#button-bujinkan").offset().top + margin}, 500);
  });
  
  $("#button-bujinkan").on('click', function(event) {
    $('#about-sjj').css("display", "none");
    $('#about-bujinkan').css("display", "block");
    $('#about-sjj-barn').css("display", "none");
    $('#about-sjj-rank').css("display", "none");
	
	//var margin = isPortrait() ? 65 : 110;
	//$([document.documentElement, document.body]).animate({ scrollTop: $("#button-bujinkan").offset().top + margin}, 500);

  });
  
  $("#button-sjj-barn").on('click', function(event) {
    $('#about-sjj').css("display", "none");
    $('#about-bujinkan').css("display", "none");
    $('#about-sjj-barn').css("display", "block");
    $('#about-sjj-rank').css("display", "none");
	//var margin = isPortrait() ? 65 : 110;
	//$([document.documentElement, document.body]).animate({ scrollTop: $("#button-sjj-barn").offset().top + margin}, 500);
  });
  
  
  $("#button-sjj-rank").on('click', function(event) {
    $('#about-sjj').css("display", "none");
    $('#about-bujinkan').css("display", "none");
    $('#about-sjj-barn').css("display", "none");
    $('#about-sjj-rank').css("display", "block");
	//var margin = isPortrait() ? 65 : 110;
	//$([document.documentElement, document.body]).animate({ scrollTop: $("#button-sjj-rank").offset().top + margin}, 500);
  });
}


function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

function isLandscape() {
    return (window.orientation === 90 || window.orientation === -90);
}

