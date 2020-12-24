var noWebGL = document.getElementById("no-webgl");
var threeD = document.getElementById("3d");
if (!Detector.webgl)
{
  // Detector.addGetWebGLMessage();
  noWebGL.removeAttribute("hidden");
  threeD.setAttribute("hidden", true);
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
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
