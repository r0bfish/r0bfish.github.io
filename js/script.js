$(document).ready(function(){



	// Create popup
    var popup = `
        <div id="clubPopupOverlay">
            <div id="clubPopup">
                <button id="clubPopupClose">&times;</button>

                <h2>Denna förening finns inte längre</h2>

                <p>
                    Men om du fortfarande är intresserad av en kampsport
                    så rekommenderar jag att prova på BJJ på Hilti,
                    som också finns i Munktell!
                </p>

                <a href="https://www.hiltieskilstuna.se/"
                   target="_blank"
                   rel="noopener noreferrer">
                    Besök Hilti Eskilstuna
                </a>
            </div>
        </div>
    `;

    // Add popup to page
    $("body").append(popup);

    // Popup styling
    $("#clubPopupOverlay").css({
        "display": "flex",
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.65)",
        "z-index": "999999",
        "align-items": "center",
        "justify-content": "center"
    });

    $("#clubPopup").css({
        "position": "relative",
        "width": "90%",
        "max-width": "500px",
        "padding": "30px",
        "background": "#fff",
        "border-radius": "12px",
        "box-shadow": "0 10px 40px rgba(0,0,0,0.3)",
        "box-sizing": "border-box",
        "font-family": "Arial, sans-serif",
        "text-align": "center"
    });

    $("#clubPopup h2").css({
        "margin-top": "0"
    });

    $("#clubPopupClose").css({
        "position": "absolute",
        "top": "8px",
        "right": "12px",
        "border": "0",
        "background": "transparent",
        "font-size": "30px",
        "cursor": "pointer",
        "line-height": "1"
    });

    $("#clubPopup a").css({
        "display": "inline-block",
        "margin-top": "15px",
        "padding": "12px 20px",
        "background": "#222",
        "color": "#fff",
        "text-decoration": "none",
        "border-radius": "6px"
    });

    // Close button
    $("#clubPopupClose").on("click", function () {
        $("#clubPopupOverlay").fadeOut(200, function () {
            $(this).remove();
        });
    });

    // Optional: close when clicking outside the popup
    $("#clubPopupOverlay").on("click", function (e) {
        if (e.target === this) {
            $("#clubPopupClose").trigger("click");
        }
    });
  
  addCollapsible();
  googleMap();
	
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


function googleMap() {
	
	//set your google maps parameters
	var latitude = 59.378139,
		longitude = 16.509143,
		map_zoom = 14,
		controlSize = 40;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? 'img/cd-icon-location.png' : 'img/cd-icon-location.svg';
		
	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [ 
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		/*{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},*/
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//add a custom marker to the map				
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map 
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
}


