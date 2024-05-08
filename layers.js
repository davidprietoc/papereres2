var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Resultatdelreadinfluncia_1 = new ol.format.GeoJSON();
var features_Resultatdelreadinfluncia_1 = format_Resultatdelreadinfluncia_1.readFeatures(json_Resultatdelreadinfluncia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resultatdelreadinfluncia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resultatdelreadinfluncia_1.addFeatures(features_Resultatdelreadinfluncia_1);
var lyr_Resultatdelreadinfluncia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resultatdelreadinfluncia_1, 
                style: style_Resultatdelreadinfluncia_1,
                popuplayertitle: "Resultat de l'àrea d'influència",
                interactive: true,
                title: '<img src="styles/legend/Resultatdelreadinfluncia_1.png" /> Resultat de l\'àrea d\'influència'
            });
var format_papereresnova_2 = new ol.format.GeoJSON();
var features_papereresnova_2 = format_papereresnova_2.readFeatures(json_papereresnova_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_papereresnova_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_papereresnova_2.addFeatures(features_papereresnova_2);cluster_papereresnova_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_papereresnova_2
});
var lyr_papereresnova_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_papereresnova_2, 
                style: style_papereresnova_2,
                popuplayertitle: "papereresnova",
                interactive: true,
                title: '<img src="styles/legend/papereresnova_2.png" /> papereresnova'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Resultatdelreadinfluncia_1.setVisible(true);lyr_papereresnova_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Resultatdelreadinfluncia_1,lyr_papereresnova_2];
lyr_Resultatdelreadinfluncia_1.set('fieldAliases', {'id': 'id', 'papers': 'papers', });
lyr_papereresnova_2.set('fieldAliases', {'id': 'id', 'papers': 'papers', });
lyr_Resultatdelreadinfluncia_1.set('fieldImages', {'id': 'TextEdit', 'papers': 'TextEdit', });
lyr_papereresnova_2.set('fieldImages', {'id': 'TextEdit', 'papers': 'TextEdit', });
lyr_Resultatdelreadinfluncia_1.set('fieldLabels', {'id': 'no label', 'papers': 'no label', });
lyr_papereresnova_2.set('fieldLabels', {'id': 'no label', 'papers': 'no label', });
lyr_papereresnova_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});