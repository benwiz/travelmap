function createMarker(map, location, isLast) {
  var options = {
    strokeColor: isLast ? '#0000FF' : '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: isLast ? '#0000FF' : '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: { lat: location.lat, lng: location.lng },
    radius: 75000,
  };

  var marker = new google.maps.Circle(options);
}

function createMarkers(map, locations) {
  locations.forEach(function(location, i) {
    var isLast = i === locations.length - 1;
    createMarker(map, location, isLast);
  });
}

function initMap() {
  var parsedYaml = YAML.load('locations.yml');
  var locations = parsedYaml.locations;

  // Create map
  var lastLocation = locations[locations.length - 1];
  var center = { lat: lastLocation.lat, lng: lastLocation.lng };
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 4,
  });

  // For each location, create a marker
  createMarkers(map, locations);
}
