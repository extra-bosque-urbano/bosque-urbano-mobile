var args = arguments[0] || {};

var Map = require('ti.map');
var mapview = Map.createView({
  mapType: Map.NORMAL_TYPE,
  region: {
    latitude: 20.694441,
    longitude: -103.3742985,
    latitudeDelta:0.01,
    longitudeDelta:0.01
  },
});
$.mapView.add(mapview);

var annotation = Map.createAnnotation({
    latitude: 20.694441,
    longitude: -103.3742985,
    title: 'Bar Américas',
    subtitle: 'A plantar árboles!',
    pincolor: Map.ANNOTATION_RED,
    custom_id: 1
});

function showList() {
  $.mapView.visible = false;
  $.listView.visible = true;
}

function showMap() {
  $.mapView.visible = true;
  $.listView.visible = false;
}
