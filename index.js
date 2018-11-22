function createMarker(map, location, isLast) {
  var options = {
    map: map,
    position: { lat: location.lat, lng: location.lng },
    title: location.name,
  };

  if (isLast) {
    options.animation = google.maps.Animation.BOUNCE;
  }

  var marker = new google.maps.Marker(options);
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
