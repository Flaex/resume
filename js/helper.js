

// Data template
var HTMLheaderName = '<h1 class="blueThree">%data%</h1>';
var HTMLheaderRole = '<h2 class="blueTwo ">%data%</h2>';
var HTMLbioPic = '<div class="bioPic col-20"><img src="images/%data%"></div>';
var HTMLbioInfo = '<div class="bioText col-80">%data%</div>';
var HTMLbioContactsStart = '<ul id="topContacts"><h4>Contact me:</h4></ul>';

var HTMLmobile = '<li ><i class="fa fa-phone"></i>%data%</li>';
var HTMLemail = '<li ><i class="fa fa-envelope"></i>%data%</li>';
var HTMLgithub = '<li ><i class="fa fa-github"></i>%data%</li>';
var HTMLlocation = '<li ><i class="fa fa-map-marker"></i>%data%</li>';
var HTMLwelcomeMsg = '<h3 class="welcomemessage">%data%</h3>';

var HTMLskillsStart = '<ul id="skills"><h4>Skills at a Glance:</h4></ul>';
var HTMLskills = '<li><i class="fa fa-caret-right"></i>%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div><br>';
var HTMLworkEmployer = '<h3>%data%';
var HTMLworkTitle = ' - %data%</h3>';
var HTMLworkDates = '<div class="date">%data%</div>';
var HTMLworkLocation = '<p class="location-text">%data%</p>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry col-50"></div>';
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectDates = '<div class="date">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImageContainer = '<div class="projectThumb col-25 %data%">';
var HTMLprojectImageHref = '<a >';
var HTMLprojectImageMask = '<img class="%data%"';
var HTMLprojectImage = ' src="images/%data%"></a></div>';
var HTMLprojectModal = '<div class="modalDialog"><div><a href="#close" title="Close" class="close"><strong>x</strong></a><img class="preview" src="images/%data%"></div></div>';

var HTMLschoolStart = '<div class="education-entry"></div><br>';
var HTMLschoolName = '<h3>%data%';
var HTMLschoolDegree = ' - %data%</h3>';
var HTMLschoolMajors = '<p class="majors">• %data% </p>';
var HTMLschoolDates = '<div class="date">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';

var HTMLonlineTitle = '<h3 href="#">%data%';
var HTMLonlineSchool = ' - %data%</h3>';
var HTMLonlineDates = '<div class="date">%data%</p>';
var HTMLonlineURL = '<a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
