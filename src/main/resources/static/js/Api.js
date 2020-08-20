$('.layers input[type=checkbox]').on("change", function(e) {
    if(e.target.checked) {
        getApiData(e.target.id);
    } else {
        var layer = getLayerById(e.target.id);
        removeLayer(layer);
    }
});

var geojsonObject;

function getApiData(apiType) {
    var url = "http://api.vworld.kr/req/data";
    var param = "";
    var apiKey = "96CC6623-0AAC-3DCF-80E4-40F94A8442F3";
    var domain = "http://localhost:8888";
    var defaultParam = "&service=data&version=2.0&request=getfeature&format=json&geometry=true&attribute=true&crs=EPSG:4326";
    
    switch(apiType) {
        case "sido": 
            var totalCount = 17;
            var meta = "LT_C_ADSIDO_INFO";
            var attrfilter = "ctprvn_cd:between:0,60";
            param = "?&key="+ apiKey +"&domain="+ domain +"&size="+ totalCount +"&data="+ meta +"&attrfilter="+ attrfilter + defaultParam;
            break;
        case "sgg":
            var totalCount = 250;
            var meta = "LT_C_ADSIGG_INFO";
            var attrfilter = "sig_cd:between:0,60000";
            param = "?&key="+ apiKey +"&domain="+ domain +"&size="+ totalCount +"&data="+ meta +"&attrfilter="+ attrfilter + defaultParam;
            break;
        case "emd":
            var totalCount = 467; // total: 5051, seoul: 467
            var meta = "LT_C_ADEMD_INFO";
            // var attrfilter = "emd_cd:between:0,60000000";
            var attrfilter = "full_nm:like:서울특별시";
            param = "?&key="+ apiKey +"&domain="+ domain +"&size="+ totalCount +"&data="+ meta +"&attrfilter="+ attrfilter + defaultParam;
            break;
    }

    $.ajax({
        type: "get",
        url: url,
        data : param,
        dataType: 'jsonp',
        async: false,
        success: function(data) {
            if(data.response.status === "OK") {
                geojsonObject = data.response.result.featureCollection;
                addLayer(apiType, geojsonObject);
                toastNotice(apiType + " layer is displayed.");
            } else {
                alert(data.response.error.text);
                toastNotice(apiType + " layer cannot be displayed.");
            }
        },
        error: function(xhr, stat, err) {
            alert("ERROR " + stat + "\n" + error + "\nxhr : " + xhr);
        }
    });
}