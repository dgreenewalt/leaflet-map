var wms_layers = [];

var format_parp_2020_final_0 = new ol.format.GeoJSON();
var features_parp_2020_final_0 = format_parp_2020_final_0.readFeatures(json_parp_2020_final_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parp_2020_final_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parp_2020_final_0.addFeatures(features_parp_2020_final_0);
var lyr_parp_2020_final_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parp_2020_final_0, 
                style: style_parp_2020_final_0,
                interactive: true,
                title: '<img src="styles/legend/parp_2020_final_0.png" /> parp_2020_final'
            });
var format_sw_poly_2018_1 = new ol.format.GeoJSON();
var features_sw_poly_2018_1 = format_sw_poly_2018_1.readFeatures(json_sw_poly_2018_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sw_poly_2018_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sw_poly_2018_1.addFeatures(features_sw_poly_2018_1);
var lyr_sw_poly_2018_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sw_poly_2018_1, 
                style: style_sw_poly_2018_1,
                interactive: false,
                title: '<img src="styles/legend/sw_poly_2018_1.png" /> sw_poly_2018'
            });
var format_tz2020_2 = new ol.format.GeoJSON();
var features_tz2020_2 = format_tz2020_2.readFeatures(json_tz2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tz2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tz2020_2.addFeatures(features_tz2020_2);
var lyr_tz2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tz2020_2, 
                style: style_tz2020_2,
                interactive: false,
    title: 'tz2020<br />\
    <img src="styles/legend/tz2020_2_0.png" /> LAND HOOK<br />\
    <img src="styles/legend/tz2020_2_1.png" /> LEADERLINE<br />\
    <img src="styles/legend/tz2020_2_2.png" /> ORIGINAL LINE<br />\
    <img src="styles/legend/tz2020_2_3.png" /> PRIVATE ROW<br />\
    <img src="styles/legend/tz2020_2_4.png" /> ROAD CENTERLINE<br />\
    <img src="styles/legend/tz2020_2_5.png" /> UTILITY EASEMENT<br />\
    <img src="styles/legend/tz2020_2_6.png" /> Subdivision<br />\
    <img src="styles/legend/tz2020_2_7.png" /> WATER<br />\
    <img src="styles/legend/tz2020_2_8.png" /> <br />\
    <img src="styles/legend/tz2020_2_9.png" /> TB OUT<br />'
        });
var format_parl_2020_3 = new ol.format.GeoJSON();
var features_parl_2020_3 = format_parl_2020_3.readFeatures(json_parl_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parl_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parl_2020_3.addFeatures(features_parl_2020_3);
var lyr_parl_2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parl_2020_3, 
                style: style_parl_2020_3,
                interactive: true,
    title: 'parl_2020<br />\
    <img src="styles/legend/parl_2020_3_0.png" /> none<br />\
    <img src="styles/legend/parl_2020_3_1.png" /> PARCEL<br />\
    <img src="styles/legend/parl_2020_3_2.png" /> ROAD<br />\
    <img src="styles/legend/parl_2020_3_3.png" /> VRTANS<br />\
    <img src="styles/legend/parl_2020_3_4.png" /> LEGAL TRAIL<br />\
    <img src="styles/legend/parl_2020_3_5.png" /> RAILROAD<br />\
    <img src="styles/legend/parl_2020_3_6.png" /> SUBPARCEL<br />\
    <img src="styles/legend/parl_2020_3_7.png" /> TOWN<br />\
    <img src="styles/legend/parl_2020_3_8.png" /> STATE<br />\
    <img src="styles/legend/parl_2020_3_9.png" /> WATER<br />\
    <img src="styles/legend/parl_2020_3_10.png" /> Building<br />'
        });
var format_Label_2019_4 = new ol.format.GeoJSON();
var features_Label_2019_4 = format_Label_2019_4.readFeatures(json_Label_2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Label_2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Label_2019_4.addFeatures(features_Label_2019_4);
var lyr_Label_2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Label_2019_4, 
                style: style_Label_2019_4,
                interactive: false,
                title: 'Label_2019'
            });
var format_e911BuildingsforTown_5 = new ol.format.GeoJSON();
var features_e911BuildingsforTown_5 = format_e911BuildingsforTown_5.readFeatures(json_e911BuildingsforTown_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_e911BuildingsforTown_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_e911BuildingsforTown_5.addFeatures(features_e911BuildingsforTown_5);
var lyr_e911BuildingsforTown_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_e911BuildingsforTown_5, 
                style: style_e911BuildingsforTown_5,
                interactive: true,
                title: '<img src="styles/legend/e911BuildingsforTown_5.png" /> e911 Buildings for Town'
            });
var format_Rail_6 = new ol.format.GeoJSON();
var features_Rail_6 = format_Rail_6.readFeatures(json_Rail_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rail_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rail_6.addFeatures(features_Rail_6);
var lyr_Rail_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rail_6, 
                style: style_Rail_6,
                interactive: false,
                title: '<img src="styles/legend/Rail_6.png" /> Rail'
            });
var format_StreamsfromLidar_7 = new ol.format.GeoJSON();
var features_StreamsfromLidar_7 = format_StreamsfromLidar_7.readFeatures(json_StreamsfromLidar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreamsfromLidar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamsfromLidar_7.addFeatures(features_StreamsfromLidar_7);
var lyr_StreamsfromLidar_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StreamsfromLidar_7, 
                style: style_StreamsfromLidar_7,
                interactive: false,
                title: '<img src="styles/legend/StreamsfromLidar_7.png" /> Streams from Lidar'
            });

lyr_parp_2020_final_0.setVisible(true);lyr_sw_poly_2018_1.setVisible(true);lyr_tz2020_2.setVisible(true);lyr_parl_2020_3.setVisible(true);lyr_Label_2019_4.setVisible(false);lyr_e911BuildingsforTown_5.setVisible(true);lyr_Rail_6.setVisible(false);lyr_StreamsfromLidar_7.setVisible(true);
var layersList = [lyr_parp_2020_final_0,lyr_sw_poly_2018_1,lyr_tz2020_2,lyr_parl_2020_3,lyr_Label_2019_4,lyr_e911BuildingsforTown_5,lyr_Rail_6,lyr_StreamsfromLidar_7];
lyr_parp_2020_final_0.set('fieldAliases', {'AREA': 'AREA', 'PARCELNUM': 'PARCELNUM', 'ACREAGE': 'ACREAGE', 'ACRES': 'ACRES', 'MAP_NUM': 'MAP_NUM', 'SHORT_NUM': 'SHORT_NUM', 'SHEET': 'SHEET', 'PARCNUM': 'PARCNUM', 'OLD_NUMBER': 'OLD_NUMBER', 'PROPTYPE': 'PROPTYPE', 'NUM_LAB': 'NUM_LAB', 'X': 'X', 'Y': 'Y', 'SURVEYED': 'SURVEYED', 'Not_GL': 'Not_GL', });
lyr_sw_poly_2018_1.set('fieldAliases', {'COMID': 'COMID', 'GNIS_NAME': 'GNIS_NAME', 'AREASQKM': 'AREASQKM', 'REACHCODE': 'REACHCODE', 'FTYPE': 'FTYPE', 'SHAPE_area': 'SHAPE_area', 'SHAPE_len': 'SHAPE_len', });
lyr_tz2020_2.set('fieldAliases', {'TAXLINE_ID': 'TAXLINE_ID', 'SHEET_ID': 'SHEET_ID', 'SHEET': 'SHEET', 'TAXMAPZ_ID': 'TAXMAPZ_ID', 'TYPE': 'TYPE', 'DIM': 'DIM', 'DIR': 'DIR', 'EDITDATE': 'EDITDATE', 'SOURCEDATE': 'SOURCEDATE', });
lyr_parl_2020_3.set('fieldAliases', {'DIM': 'DIM', 'DIR': 'DIR', 'PLTYPE': 'PLTYPE', 'SURVACC': 'SURVACC', 'SOURCETYPE': 'SOURCETYPE', 'EDITDATE': 'EDITDATE', 'SOURCEDATE': 'SOURCEDATE', 'EDITMETHOD': 'EDITMETHOD', 'LENGTH': 'LENGTH', 'DECVAL': 'DECVAL', 'SOURCENAME': 'SOURCENAME', 'JOINT': 'JOINT', });
lyr_Label_2019_4.set('fieldAliases', {'SHEET': 'SHEET', 'TEXT': 'TEXT', 'ANGLE': 'ANGLE', 'SIZE': 'SIZE', 'STYLE': 'STYLE', 'COLOR': 'COLOR', 'TEXTTYPE': 'TEXTTYPE', 'size2': 'size2', 'size3': 'size3', });
lyr_e911BuildingsforTown_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SEGMENTID': 'SEGMENTID', 'ESITEID': 'ESITEID', 'GEONAMEID': 'GEONAMEID', 'PD': 'PD', 'PT': 'PT', 'SN': 'SN', 'ST': 'ST', 'SD': 'SD', 'PRIMARYNAM': 'PRIMARYNAM', 'ALIAS1': 'ALIAS1', 'ALIAS2': 'ALIAS2', 'ALIAS3': 'ALIAS3', 'ALIAS4': 'ALIAS4', 'ALIAS5': 'ALIAS5', 'CALCADDRES': 'CALCADDRES', 'GFADDRESS': 'GFADDRESS', 'PRIMARYADD': 'PRIMARYADD', 'SITETYPE': 'SITETYPE', 'COMMENTS': 'COMMENTS', 'LR': 'LR', 'TOWNNAME': 'TOWNNAME', 'MCODE': 'MCODE', 'ESN': 'ESN', 'ZIP': 'ZIP', 'PARCELNUM': 'PARCELNUM', 'GPSFLG': 'GPSFLG', 'GPSX': 'GPSX', 'GPSY': 'GPSY', 'MAPYEAR': 'MAPYEAR', 'UPDATESOUR': 'UPDATESOUR', 'UPDATEDATE': 'UPDATEDATE', 'STATE': 'STATE', 'FIPS8': 'FIPS8', 'SPAN': 'SPAN', 'SUBTYPE': 'SUBTYPE', 'GlobalID_1': 'GlobalID_1', 'UNITCOUNT': 'UNITCOUNT', 'PRIMARYA_1': 'PRIMARYA_1', 'PRIMARYA_2': 'PRIMARYA_2', 'SITETYPE_M': 'SITETYPE_M', 'SITETYPE_1': 'SITETYPE_1', 'SITETYPE_2': 'SITETYPE_2', 'SITETYPE_3': 'SITETYPE_3', 'SITETYPE_4': 'SITETYPE_4', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'SOURCEOFDA': 'SOURCEOFDA', 'DRIVEWAYID': 'DRIVEWAYID', 'ESZ': 'ESZ', 'HOUSE_NUMB': 'HOUSE_NUMB', 'HOUSE_NU_1': 'HOUSE_NU_1', 'HOUSE_NU_2': 'HOUSE_NU_2', 'GC_EXCEPTI': 'GC_EXCEPTI', 'FIPS': 'FIPS', });
lyr_Rail_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VRLID': 'VRLID', 'LineName': 'LineName', 'Operator': 'Operator', 'Division': 'Division', 'Subdivisio': 'Subdivisio', 'Branch': 'Branch', 'FromMP': 'FromMP', 'ToMP': 'ToMP', 'TotalMiles': 'TotalMiles', 'StateOwned': 'StateOwned', 'RailTrail': 'RailTrail', 'GlobalID': 'GlobalID', });
lyr_StreamsfromLidar_7.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'stream_typ': 'stream_typ', 'type_code': 'type_code', 'network': 'network', });
lyr_parp_2020_final_0.set('fieldImages', {'AREA': 'TextEdit', 'PARCELNUM': 'TextEdit', 'ACREAGE': 'TextEdit', 'ACRES': 'TextEdit', 'MAP_NUM': 'TextEdit', 'SHORT_NUM': 'TextEdit', 'SHEET': 'TextEdit', 'PARCNUM': 'TextEdit', 'OLD_NUMBER': 'TextEdit', 'PROPTYPE': 'TextEdit', 'NUM_LAB': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'SURVEYED': 'Range', 'Not_GL': 'Range', });
lyr_sw_poly_2018_1.set('fieldImages', {'COMID': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'AREASQKM': 'TextEdit', 'REACHCODE': 'TextEdit', 'FTYPE': 'TextEdit', 'SHAPE_area': 'TextEdit', 'SHAPE_len': 'TextEdit', });
lyr_tz2020_2.set('fieldImages', {'TAXLINE_ID': 'Range', 'SHEET_ID': 'Range', 'SHEET': 'TextEdit', 'TAXMAPZ_ID': 'Range', 'TYPE': 'UniqueValues', 'DIM': 'TextEdit', 'DIR': 'TextEdit', 'EDITDATE': 'TextEdit', 'SOURCEDATE': 'TextEdit', });
lyr_parl_2020_3.set('fieldImages', {'DIM': 'TextEdit', 'DIR': 'TextEdit', 'PLTYPE': 'UniqueValues', 'SURVACC': 'TextEdit', 'SOURCETYPE': 'UniqueValues', 'EDITDATE': 'TextEdit', 'SOURCEDATE': 'TextEdit', 'EDITMETHOD': 'TextEdit', 'LENGTH': 'TextEdit', 'DECVAL': 'TextEdit', 'SOURCENAME': 'TextEdit', 'JOINT': 'TextEdit', });
lyr_Label_2019_4.set('fieldImages', {'SHEET': 'Range', 'TEXT': 'TextEdit', 'ANGLE': 'TextEdit', 'SIZE': 'TextEdit', 'STYLE': 'TextEdit', 'COLOR': 'TextEdit', 'TEXTTYPE': 'TextEdit', 'size2': 'TextEdit', 'size3': 'TextEdit', });
lyr_e911BuildingsforTown_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SEGMENTID': 'TextEdit', 'ESITEID': 'TextEdit', 'GEONAMEID': 'TextEdit', 'PD': 'TextEdit', 'PT': 'TextEdit', 'SN': 'TextEdit', 'ST': 'TextEdit', 'SD': 'TextEdit', 'PRIMARYNAM': 'TextEdit', 'ALIAS1': 'TextEdit', 'ALIAS2': 'TextEdit', 'ALIAS3': 'TextEdit', 'ALIAS4': 'TextEdit', 'ALIAS5': 'TextEdit', 'CALCADDRES': 'TextEdit', 'GFADDRESS': 'TextEdit', 'PRIMARYADD': 'TextEdit', 'SITETYPE': 'TextEdit', 'COMMENTS': 'TextEdit', 'LR': 'TextEdit', 'TOWNNAME': 'TextEdit', 'MCODE': 'TextEdit', 'ESN': 'TextEdit', 'ZIP': 'TextEdit', 'PARCELNUM': 'TextEdit', 'GPSFLG': 'TextEdit', 'GPSX': 'TextEdit', 'GPSY': 'TextEdit', 'MAPYEAR': 'TextEdit', 'UPDATESOUR': 'TextEdit', 'UPDATEDATE': 'TextEdit', 'STATE': 'TextEdit', 'FIPS8': 'TextEdit', 'SPAN': 'TextEdit', 'SUBTYPE': 'TextEdit', 'GlobalID_1': 'TextEdit', 'UNITCOUNT': 'TextEdit', 'PRIMARYA_1': 'TextEdit', 'PRIMARYA_2': 'TextEdit', 'SITETYPE_M': 'TextEdit', 'SITETYPE_1': 'TextEdit', 'SITETYPE_2': 'TextEdit', 'SITETYPE_3': 'TextEdit', 'SITETYPE_4': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'SOURCEOFDA': 'TextEdit', 'DRIVEWAYID': 'TextEdit', 'ESZ': 'TextEdit', 'HOUSE_NUMB': 'TextEdit', 'HOUSE_NU_1': 'TextEdit', 'HOUSE_NU_2': 'TextEdit', 'GC_EXCEPTI': 'TextEdit', 'FIPS': 'TextEdit', });
lyr_Rail_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'VRLID': 'TextEdit', 'LineName': 'TextEdit', 'Operator': 'TextEdit', 'Division': 'TextEdit', 'Subdivisio': 'TextEdit', 'Branch': 'TextEdit', 'FromMP': 'TextEdit', 'ToMP': 'TextEdit', 'TotalMiles': 'TextEdit', 'StateOwned': 'TextEdit', 'RailTrail': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_StreamsfromLidar_7.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'stream_typ': 'TextEdit', 'type_code': 'Range', 'network': 'Range', });
lyr_parp_2020_final_0.set('fieldLabels', {'AREA': 'no label', 'PARCELNUM': 'header label', 'ACREAGE': 'no label', 'ACRES': 'inline label', 'MAP_NUM': 'no label', 'SHORT_NUM': 'no label', 'SHEET': 'no label', 'PARCNUM': 'no label', 'OLD_NUMBER': 'no label', 'PROPTYPE': 'no label', 'NUM_LAB': 'no label', 'X': 'no label', 'Y': 'no label', 'SURVEYED': 'no label', 'Not_GL': 'no label', });
lyr_sw_poly_2018_1.set('fieldLabels', {'COMID': 'no label', 'GNIS_NAME': 'no label', 'AREASQKM': 'no label', 'REACHCODE': 'no label', 'FTYPE': 'no label', 'SHAPE_area': 'no label', 'SHAPE_len': 'no label', });
lyr_tz2020_2.set('fieldLabels', {'TAXLINE_ID': 'no label', 'SHEET_ID': 'no label', 'SHEET': 'no label', 'TAXMAPZ_ID': 'no label', 'TYPE': 'no label', 'DIM': 'no label', 'DIR': 'no label', 'EDITDATE': 'no label', 'SOURCEDATE': 'no label', });
lyr_parl_2020_3.set('fieldLabels', {'DIM': 'no label', 'DIR': 'no label', 'PLTYPE': 'inline label', 'SURVACC': 'no label', 'SOURCETYPE': 'inline label', 'EDITDATE': 'no label', 'SOURCEDATE': 'no label', 'EDITMETHOD': 'no label', 'LENGTH': 'inline label', 'DECVAL': 'inline label', 'SOURCENAME': 'no label', 'JOINT': 'no label', });
lyr_Label_2019_4.set('fieldLabels', {'SHEET': 'no label', 'TEXT': 'no label', 'ANGLE': 'no label', 'SIZE': 'no label', 'STYLE': 'no label', 'COLOR': 'no label', 'TEXTTYPE': 'no label', 'size2': 'no label', 'size3': 'no label', });
lyr_e911BuildingsforTown_5.set('fieldLabels', {'OBJECTID': 'no label', 'SEGMENTID': 'no label', 'ESITEID': 'no label', 'GEONAMEID': 'no label', 'PD': 'no label', 'PT': 'no label', 'SN': 'no label', 'ST': 'no label', 'SD': 'no label', 'PRIMARYNAM': 'no label', 'ALIAS1': 'no label', 'ALIAS2': 'no label', 'ALIAS3': 'no label', 'ALIAS4': 'no label', 'ALIAS5': 'no label', 'CALCADDRES': 'no label', 'GFADDRESS': 'no label', 'PRIMARYADD': 'no label', 'SITETYPE': 'inline label', 'COMMENTS': 'no label', 'LR': 'no label', 'TOWNNAME': 'no label', 'MCODE': 'no label', 'ESN': 'no label', 'ZIP': 'no label', 'PARCELNUM': 'no label', 'GPSFLG': 'no label', 'GPSX': 'no label', 'GPSY': 'no label', 'MAPYEAR': 'no label', 'UPDATESOUR': 'no label', 'UPDATEDATE': 'no label', 'STATE': 'no label', 'FIPS8': 'no label', 'SPAN': 'no label', 'SUBTYPE': 'no label', 'GlobalID_1': 'no label', 'UNITCOUNT': 'no label', 'PRIMARYA_1': 'no label', 'PRIMARYA_2': 'no label', 'SITETYPE_M': 'no label', 'SITETYPE_1': 'no label', 'SITETYPE_2': 'no label', 'SITETYPE_3': 'no label', 'SITETYPE_4': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'SOURCEOFDA': 'no label', 'DRIVEWAYID': 'no label', 'ESZ': 'no label', 'HOUSE_NUMB': 'inline label', 'HOUSE_NU_1': 'no label', 'HOUSE_NU_2': 'no label', 'GC_EXCEPTI': 'no label', 'FIPS': 'no label', });
lyr_Rail_6.set('fieldLabels', {'OBJECTID': 'no label', 'VRLID': 'no label', 'LineName': 'no label', 'Operator': 'no label', 'Division': 'no label', 'Subdivisio': 'no label', 'Branch': 'no label', 'FromMP': 'no label', 'ToMP': 'no label', 'TotalMiles': 'no label', 'StateOwned': 'no label', 'RailTrail': 'no label', 'GlobalID': 'no label', });
lyr_StreamsfromLidar_7.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'stream_typ': 'no label', 'type_code': 'no label', 'network': 'no label', });
lyr_StreamsfromLidar_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});