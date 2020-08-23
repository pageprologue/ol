
/**
 * Coordinate System Definition
 */
proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
var projection = ol.proj.get('EPSG:4326');
var extent = [-180.0, -90.0, 180.0, 90.0];
projection.setExtent(extent);

/**
 * Create View
 */
var view = new ol.View({
    zoom: 12,
    maxZoom: 18,
    center: [126.977234, 37.490115],
    projection : projection
});

/**
 * Tile Layer - OpenStreetMap
 */
var osm_layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var map = new ol.Map({
	target: 'map',
	layers: [osm_layer],
	view: view
});

/**
 * Layer Style
 */
var style = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        width: 2
    })
});
