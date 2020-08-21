proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
var extent = [-180.0, -90.0, 180.0, 90.0];
var projection = ol.proj.get('EPSG:4326');
projection.setExtent(extent);

var view = new ol.View({
    zoom: 12,
    maxZoom: 18,
    center: [126.977234, 37.490115],
    projection : projection
});

var osm_layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var map = new ol.Map({
	target: 'map',
	layers: [osm_layer],
	view: view
});

var style = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        width: 2
    })
});
