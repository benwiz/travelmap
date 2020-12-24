if(!Detector.webgl){
  // TODO display google map version, or maybe just redirect
  // actually, probably display a link stating lack of webgl
  Detector.addGetWebGLMessage();
} else {
  var container = document.getElementById('container');
  var globe = new DAT.Globe(container, {imgDir: "assets/"});
  var parsedYaml = YAML.load("locations.yml");
  var locations = parsedYaml.locations;
  var datoms = locations.map(function (loc) {
    return [loc.lat, loc.lng, 0.1];
  });
  globe.addData(datoms.flat(), {format: "magnitude",
                                name: "travel",
                                animated: true});
  globe.createPoints();
  TWEEN.start();
  new TWEEN.Tween(globe)
    .to({time: 0}, 500)
    .easing(TWEEN.Easing.Cubic.EaseOut)
    .start();
  globe.animate();
  document.body.style.backgroundImage = "none"; // remove loading
}
