var size = 0;
var placement = 'point';

var style_e911BuildingsforTown_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ff0000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("HOUSE_NUMB") !== null) {
        labelText = String(feature.get("HOUSE_NUMB"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
             fill: new ol.style.Fill({color: 'rgba(242,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
