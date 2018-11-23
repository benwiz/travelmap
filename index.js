function createMarker(map, location, isLast) {
  var options = {
    map: map,
    position: { lat: location.lat, lng: location.lng },
    title: location.name,
    // icon: 'images/circle.png',
  };
  if (isLast) {
    options.animation = google.maps.Animation.DROP;
  }

  var marker = new google.maps.Marker(options);
  return marker;
}

function createMarkers(map, locations) {
  var markers = locations.map(function(location, i) {
    var isLast = i === locations.length - 1;
    var marker = createMarker(map, location, isLast);
    return marker;
  });
  return markers;
}

function initMap() {
  var parsedYaml = YAML.load('locations.yml');
  var locations = parsedYaml.locations;

  // Create map
  var lastLocation = locations[locations.length - 1];
  // var center = { lat: lastLocation.lat, lng: lastLocation.lng };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });

  // For each location, create a marker
  var markers = createMarkers(map, locations);

  // Add a marker clusterer to manage the markers.
  var clusterOptions = {
    gridSize: 15,
    // maxZoom: 0,
    // zoomOnClick: true,
    // imagePath: '../images/m',
    // imageExtension: 'png',
    averageCenter: true,
    // minimumClusterSize: 2,
    // styles: {},
  };
  var markerCluster = new MarkerClusterer(map, markers, clusterOptions);
}
