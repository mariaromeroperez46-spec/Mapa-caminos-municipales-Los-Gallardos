var wms_layers = [];

var lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/mta10r_2001-2013",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mta10r_2001-2013",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'IDEAndalucía Mapa Topográfico de Andalucía 1:10.000 ráster (Año 2013)',
                            popuplayertitle: 'IDEAndalucía Mapa Topográfico de Andalucía 1:10.000 ráster (Año 2013)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_0, 0]);
var lyr_Ortoimagen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            popuplayertitle: 'Ortoimagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_1, 0]);

    var projection_CartografadelIGN_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartografadelIGN_2 = projection_CartografadelIGN_2.getExtent();
    var size_CartografadelIGN_2 = ol.extent.getWidth(projectionExtent_CartografadelIGN_2) / 256;
    var resolutions_CartografadelIGN_2 = new Array(14);
    var matrixIds_CartografadelIGN_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartografadelIGN_2[z] = size_CartografadelIGN_2 / Math.pow(2, z);
        matrixIds_CartografadelIGN_2[z] = z;
    }
    var lyr_CartografadelIGN_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://www.ign.es/wmts/mapa-raster",
                                attributions: ' ',
                                "layer": "MTN",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartografadelIGN_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartografadelIGN_2),
                resolutions: resolutions_CartografadelIGN_2,
                matrixIds: matrixIds_CartografadelIGN_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Cartografía del IGN',
                            opacity: 1.0,
                            
                            
                          });
var format_Los_Gallardos_3 = new ol.format.GeoJSON();
var features_Los_Gallardos_3 = format_Los_Gallardos_3.readFeatures(json_Los_Gallardos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Los_Gallardos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Los_Gallardos_3.addFeatures(features_Los_Gallardos_3);
var lyr_Los_Gallardos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Los_Gallardos_3, 
                style: style_Los_Gallardos_3,
                popuplayertitle: 'Los_Gallardos',
                interactive: true,
                title: '<img src="styles/legend/Los_Gallardos_3.png" /> Los_Gallardos'
            });
var format_InventariodecaminosMunicipalesLosGallardos_4 = new ol.format.GeoJSON();
var features_InventariodecaminosMunicipalesLosGallardos_4 = format_InventariodecaminosMunicipalesLosGallardos_4.readFeatures(json_InventariodecaminosMunicipalesLosGallardos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InventariodecaminosMunicipalesLosGallardos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InventariodecaminosMunicipalesLosGallardos_4.addFeatures(features_InventariodecaminosMunicipalesLosGallardos_4);
var lyr_InventariodecaminosMunicipalesLosGallardos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InventariodecaminosMunicipalesLosGallardos_4, 
                style: style_InventariodecaminosMunicipalesLosGallardos_4,
                popuplayertitle: 'Inventario de caminos Municipales Los Gallardos ',
                interactive: true,
    title: 'Inventario de caminos Municipales Los Gallardos <br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_0.png" /> 0109008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_1.png" /> 0190006<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_2.png" /> 0190007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_3.png" /> 0190008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_4.png" /> 0190010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_5.png" /> 0190014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_6.png" /> 0209037<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_7.png" /> 0290001<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_8.png" /> 0290002<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_9.png" /> 0290008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_10.png" /> 0290014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_11.png" /> 0290015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_12.png" /> 0290016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_13.png" /> 0290017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_14.png" /> 0290018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_15.png" /> 0309015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_16.png" /> 0309016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_17.png" /> 0309019<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_18.png" /> 0309020<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_19.png" /> 0390006<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_20.png" /> 0390007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_21.png" /> 0390008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_22.png" /> 0390009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_23.png" /> 0390010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_24.png" /> 0390011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_25.png" /> 0390013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_26.png" /> 0390014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_27.png" /> 0390015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_28.png" /> 0390017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_29.png" /> 0390018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_30.png" /> 0390021<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_31.png" /> 0409000<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_32.png" /> 0409118<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_33.png" /> 0490001<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_34.png" /> 0490002<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_35.png" /> 0490003<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_36.png" /> 0490005<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_37.png" /> 0490011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_38.png" /> 0490012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_39.png" /> 0490013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_40.png" /> 0490014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_41.png" /> 0490017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_42.png" /> 0490018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_43.png" /> 0490020<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_44.png" /> 0490021<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_45.png" /> 0490023<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_46.png" /> 0490024<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_47.png" /> 0490025<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_48.png" /> 0490030<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_49.png" /> 0490035<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_50.png" /> 0590010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_51.png" /> 0590011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_52.png" /> 0590013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_53.png" /> 0609047<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_54.png" /> 0690004<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_55.png" /> 0690005<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_56.png" /> 0690007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_57.png" /> 0690008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_58.png" /> 0690009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_59.png" /> 0690010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_60.png" /> 0690011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_61.png" /> 0690012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_62.png" /> 0690013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_63.png" /> 0690014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_64.png" /> 0690015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_65.png" /> 0690018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_66.png" /> 0709037<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_67.png" /> 0790001<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_68.png" /> 0790003<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_69.png" /> 0790007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_70.png" /> 0790008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_71.png" /> 0790009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_72.png" /> 0790010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_73.png" /> 0790011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_74.png" /> 0790012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_75.png" /> 0790013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_76.png" /> 0790014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_77.png" /> 0790015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_78.png" /> 0790016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_79.png" /> 0790017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_80.png" /> 0790018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_81.png" /> 0790019<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_82.png" /> 0790021<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_83.png" /> 0790022<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_84.png" /> 0790023<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_85.png" /> 0890004<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_86.png" /> 0890005<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_87.png" /> 0890006<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_88.png" /> 0890007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_89.png" /> 0890008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_90.png" /> 0890009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_91.png" /> 0890010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_92.png" /> 0890011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_93.png" /> 0890012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_94.png" /> 0890014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_95.png" /> 0890015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_96.png" /> 0890016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_97.png" /> 0890017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_98.png" /> 0890018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_99.png" /> 0890019<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_100.png" /> 0909000<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_101.png" /> 0990003<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_102.png" /> 0990004<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_103.png" /> 0990005<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_104.png" /> 0990006<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_105.png" /> 0990007<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_106.png" /> 0990008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_107.png" /> 0990011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_108.png" /> 0990012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_109.png" /> 0990014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_110.png" /> 0990015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_111.png" /> 0990016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_112.png" /> 1009031<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_113.png" /> 1090009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_114.png" /> 1090010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_115.png" /> 1090011<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_116.png" /> 1090012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_117.png" /> 1090013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_118.png" /> 1090014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_119.png" /> 1090015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_120.png" /> 1090017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_121.png" /> 1090018<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_122.png" /> 1090019<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_123.png" /> 1090028<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_124.png" /> 1109000<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_125.png" /> 1190001<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_126.png" /> 1190002<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_127.png" /> 1190003<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_128.png" /> 1190004<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_129.png" /> 1190010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_130.png" /> 1190012<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_131.png" /> 1190013<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_132.png" /> 1190014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_133.png" /> 1190015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_134.png" /> 1190016<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_135.png" /> 1190017<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_136.png" /> 1209014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_137.png" /> 1290002<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_138.png" /> 1290005<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_139.png" /> 1290008<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_140.png" /> 1290009<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_141.png" /> 1290010<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_142.png" /> 1290014<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_143.png" /> 1290015<br />\
    <img src="styles/legend/InventariodecaminosMunicipalesLosGallardos_4_144.png" /> <br />' });
var group_Caminos_lineas_dibujado = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Caminos_lineas_dibujado'});

lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_0.setVisible(true);lyr_Ortoimagen_1.setVisible(false);lyr_CartografadelIGN_2.setVisible(true);lyr_Los_Gallardos_3.setVisible(true);lyr_InventariodecaminosMunicipalesLosGallardos_4.setVisible(true);
var layersList = [lyr_IDEAndalucaMapaTopogrficodeAndaluca110000rsterAo2013_0,lyr_Ortoimagen_1,lyr_CartografadelIGN_2,lyr_Los_Gallardos_3,lyr_InventariodecaminosMunicipalesLosGallardos_4];
lyr_Los_Gallardos_3.set('fieldAliases', {'id_dera': 'id_dera', 'cod_mun': 'cod_mun', 'nombre': 'nombre', 'provincia': 'provincia', });
lyr_InventariodecaminosMunicipalesLosGallardos_4.set('fieldAliases', {'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'HOJA': 'HOJA', 'TIPO': 'TIPO', 'PARCELA': 'PARCELA', 'COORX': 'COORX', 'COORY': 'COORY', 'VIA': 'VIA', 'NUMERO': 'NUMERO', 'NUMERODUP': 'NUMERODUP', 'NUMSYMBOL': 'NUMSYMBOL', 'AREA': 'AREA', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'REFCAT': 'REFCAT', 'Perimetro': 'Perimetro', 'Longitud': 'Longitud', 'AREA.': 'AREA.', 'Ancho medio': 'Ancho medio', 'Ancho': 'Ancho', 'Perímetro': 'Perímetro', 'Orden de inventario': 'Orden de inventario', });
lyr_Los_Gallardos_3.set('fieldImages', {'id_dera': '', 'cod_mun': '', 'nombre': '', 'provincia': '', });
lyr_InventariodecaminosMunicipalesLosGallardos_4.set('fieldImages', {'MAPA': 'Range', 'DELEGACIO': 'Range', 'MUNICIPIO': 'Range', 'MASA': 'TextEdit', 'HOJA': 'TextEdit', 'TIPO': 'TextEdit', 'PARCELA': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'VIA': 'Range', 'NUMERO': 'Range', 'NUMERODUP': 'TextEdit', 'NUMSYMBOL': 'Range', 'AREA': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'Range', 'NUM_EXP': 'Range', 'CONTROL': 'Range', 'REFCAT': 'TextEdit', 'Perimetro': 'Range', 'Longitud': 'TextEdit', 'AREA.': 'TextEdit', 'Ancho medio': 'Range', 'Ancho': 'TextEdit', 'Perímetro': 'TextEdit', 'Orden de inventario': 'Range', });
lyr_Los_Gallardos_3.set('fieldLabels', {'id_dera': 'no label', 'cod_mun': 'no label', 'nombre': 'no label', 'provincia': 'no label', });
lyr_InventariodecaminosMunicipalesLosGallardos_4.set('fieldLabels', {'MAPA': 'hidden field', 'DELEGACIO': 'hidden field', 'MUNICIPIO': 'hidden field', 'MASA': 'hidden field', 'HOJA': 'hidden field', 'TIPO': 'hidden field', 'PARCELA': 'hidden field', 'COORX': 'inline label - visible with data', 'COORY': 'inline label - visible with data', 'VIA': 'hidden field', 'NUMERO': 'hidden field', 'NUMERODUP': 'hidden field', 'NUMSYMBOL': 'hidden field', 'AREA': 'hidden field', 'FECHAALTA': 'hidden field', 'FECHABAJA': 'hidden field', 'NINTERNO': 'hidden field', 'PCAT1': 'hidden field', 'PCAT2': 'hidden field', 'EJERCICIO': 'hidden field', 'NUM_EXP': 'hidden field', 'CONTROL': 'hidden field', 'REFCAT': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'AREA.': 'hidden field', 'Ancho medio': 'inline label - visible with data', 'Ancho': 'no label', 'Perímetro': 'no label', 'Orden de inventario': 'inline label - visible with data', });
lyr_InventariodecaminosMunicipalesLosGallardos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});