$(document).ready(function(){
	
	
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

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({ scrollTop: $(hash).position().top - 135 }, 500, function() {
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

