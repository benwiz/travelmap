function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("a");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.style.fontSize = "22px";
  controlUI.title = "Click to view 3D version";
  controlUI.text = "3D";
  controlDiv.appendChild(controlUI);
  // // Set CSS for the control interior.
  // const controlText = document.createElement("div");
  // controlText.style.color = "rgb(25,25,25)";
  // controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  // controlText.style.fontSize = "16px";
  // controlText.style.lineHeight = "38px";
  // controlText.style.paddingLeft = "5px";
  // controlText.style.paddingRight = "5px";
  // controlText.innerHTML = "Center Map";
  // controlUI.appendChild(controlText);
  // // Setup the click event listeners: simply set the map to Chicago.
  // controlUI.addEventListener("click", () => {
  //   map.setCenter(chicago);
  // });
}

function createMarker(map, location, isLast) {
  var options = {
    map: map,
    position: { lat: location.lat, lng: location.lng },
    title: location.name,
    // icon: "images/circle.png"
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillOpacity: 0.5,
      fillColor: "#ff0000",
      strokeOpacity: 0.8,
      strokeColor: "#ff0000",
      strokeWeight: 2.0,
      scale: 5 // pixels
    }
  };

  // if (isLast) {
  //   options.animation = google.maps.Animation.DROP;
  // }

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
  var parsedYaml = YAML.load("locations.yml");
  var locations = parsedYaml.locations;

  // Create map
  var lastLocation = locations[locations.length - 1];
  // var center = { lat: lastLocation.lat, lng: lastLocation.lng };
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    styles: JSON.parse(mapstyle)
  });

  // For each location, create a marker
  var markers = createMarkers(map, locations);

  // // Add a marker clusterer to manage the markers.
  // var clusterOptions = {
  //   gridSize: 15,
  //   // maxZoom: 0,
  //   // zoomOnClick: true,
  //   // imagePath: '../images/m',
  //   // imageExtension: 'png',
  //   averageCenter: true
  //   // minimumClusterSize: 2,
  //   // styles: {},
  // };
  // var markerCluster = new MarkerClusterer(map, markers, clusterOptions);

  // button to 3d version
  const threeDButton = document.createElement("div");
  CenterControl(threeDButton, map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(threeDButton);
}
