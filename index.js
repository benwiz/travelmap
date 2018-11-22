var map; // TODO: Make not global.

function createMarker(location) {
  var marker = new google.maps.Marker({
    map: map,
    position: { lat: location.lat, lng: location.lng },
    title: location.name,
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
  locations.forEach(createMarker);
}
