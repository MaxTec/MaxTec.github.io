
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(21.149509,-86.8845707),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
