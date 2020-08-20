var osm_layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var center = ol.proj.transform([126.977234, 37.490115], 'EPSG:4326', 'EPSG:3857');
var view = new ol.View({
	center: center,
	zoom: 10
});

var map = new ol.Map({
	target: 'map',
	layers: [osm_layer],
	view: view
});


