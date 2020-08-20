var getLayerById = function(layerId) {
    if(layerId) {
        var layers = map.getLayers().getArray();

        for(var i in layers){	 // 브라우저 호환성 - ie6~, chrome
            if(layers[i].get('id') === layerId){
                layer = layers[i];
                break;
            }
        }
    }
    return layer;
}

var addLayer = function(apiType, geojsonObject) {
    var vectorLayer = new ol.layer.Vector({
        id: apiType,
        style: style,
        source: new ol.source.Vector({
            features: new ol.format.GeoJSON().readFeatures(geojsonObject)
        })
    });

    map.addLayer(vectorLayer);
}

var removeLayer = function(layer) {
    map.removeLayer(layer);
}