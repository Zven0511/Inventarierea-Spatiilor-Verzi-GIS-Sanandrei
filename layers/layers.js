ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([195407.432758, 486890.601803, 212193.317525, 498851.972071]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Intravilan_1 = new ol.format.GeoJSON();
var features_Intravilan_1 = format_Intravilan_1.readFeatures(json_Intravilan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Intravilan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intravilan_1.addFeatures(features_Intravilan_1);
var lyr_Intravilan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intravilan_1, 
                style: style_Intravilan_1,
                popuplayertitle: 'Intravilan',
                interactive: true,
                title: '<img src="styles/legend/Intravilan_1.png" /> Intravilan'
            });
var format_Cimitir_2 = new ol.format.GeoJSON();
var features_Cimitir_2 = format_Cimitir_2.readFeatures(json_Cimitir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Cimitir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cimitir_2.addFeatures(features_Cimitir_2);
var lyr_Cimitir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cimitir_2, 
                style: style_Cimitir_2,
                popuplayertitle: 'Cimitir',
                interactive: true,
                title: '<img src="styles/legend/Cimitir_2.png" /> Cimitir'
            });
var format_SVLocuinteCondominiu_Carani_Covaci_3 = new ol.format.GeoJSON();
var features_SVLocuinteCondominiu_Carani_Covaci_3 = format_SVLocuinteCondominiu_Carani_Covaci_3.readFeatures(json_SVLocuinteCondominiu_Carani_Covaci_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVLocuinteCondominiu_Carani_Covaci_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVLocuinteCondominiu_Carani_Covaci_3.addFeatures(features_SVLocuinteCondominiu_Carani_Covaci_3);
var lyr_SVLocuinteCondominiu_Carani_Covaci_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVLocuinteCondominiu_Carani_Covaci_3, 
                style: style_SVLocuinteCondominiu_Carani_Covaci_3,
                popuplayertitle: 'SV-Locuinte Condominiu_Carani_Covaci',
                interactive: true,
                title: '<img src="styles/legend/SVLocuinteCondominiu_Carani_Covaci_3.png" /> SV-Locuinte Condominiu_Carani_Covaci'
            });
var format_SVParcurisiGradini_Carani_Covaci_4 = new ol.format.GeoJSON();
var features_SVParcurisiGradini_Carani_Covaci_4 = format_SVParcurisiGradini_Carani_Covaci_4.readFeatures(json_SVParcurisiGradini_Carani_Covaci_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcurisiGradini_Carani_Covaci_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcurisiGradini_Carani_Covaci_4.addFeatures(features_SVParcurisiGradini_Carani_Covaci_4);
var lyr_SVParcurisiGradini_Carani_Covaci_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcurisiGradini_Carani_Covaci_4, 
                style: style_SVParcurisiGradini_Carani_Covaci_4,
                popuplayertitle: 'SV-Parcuri si Gradini_Carani_Covaci',
                interactive: true,
                title: '<img src="styles/legend/SVParcurisiGradini_Carani_Covaci_4.png" /> SV-Parcuri si Gradini_Carani_Covaci'
            });
var format_SVZoneVerziSpecializate_Carani_Covaci_5 = new ol.format.GeoJSON();
var features_SVZoneVerziSpecializate_Carani_Covaci_5 = format_SVZoneVerziSpecializate_Carani_Covaci_5.readFeatures(json_SVZoneVerziSpecializate_Carani_Covaci_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneVerziSpecializate_Carani_Covaci_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneVerziSpecializate_Carani_Covaci_5.addFeatures(features_SVZoneVerziSpecializate_Carani_Covaci_5);
var lyr_SVZoneVerziSpecializate_Carani_Covaci_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneVerziSpecializate_Carani_Covaci_5, 
                style: style_SVZoneVerziSpecializate_Carani_Covaci_5,
                popuplayertitle: 'SV-Zone Verzi Specializate_Carani_Covaci',
                interactive: true,
                title: '<img src="styles/legend/SVZoneVerziSpecializate_Carani_Covaci_5.png" /> SV-Zone Verzi Specializate_Carani_Covaci'
            });
var format_SVDAliniamentInfrastructura_Carani_Covaci_6 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_Carani_Covaci_6 = format_SVDAliniamentInfrastructura_Carani_Covaci_6.readFeatures(json_SVDAliniamentInfrastructura_Carani_Covaci_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_Carani_Covaci_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_Carani_Covaci_6.addFeatures(features_SVDAliniamentInfrastructura_Carani_Covaci_6);
var lyr_SVDAliniamentInfrastructura_Carani_Covaci_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_Carani_Covaci_6, 
                style: style_SVDAliniamentInfrastructura_Carani_Covaci_6,
                popuplayertitle: 'SVD-Aliniament Infrastructura_Carani_Covaci',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_Carani_Covaci_6.png" /> SVD-Aliniament Infrastructura_Carani_Covaci'
            });
var format_SVAliniamentInfrastructura_Carani_Covaci_7 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_Carani_Covaci_7 = format_SVAliniamentInfrastructura_Carani_Covaci_7.readFeatures(json_SVAliniamentInfrastructura_Carani_Covaci_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_Carani_Covaci_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_Carani_Covaci_7.addFeatures(features_SVAliniamentInfrastructura_Carani_Covaci_7);
var lyr_SVAliniamentInfrastructura_Carani_Covaci_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_Carani_Covaci_7, 
                style: style_SVAliniamentInfrastructura_Carani_Covaci_7,
                popuplayertitle: 'SV-Aliniament Infrastructura_Carani_Covaci',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_Carani_Covaci_7.png" /> SV-Aliniament Infrastructura_Carani_Covaci'
            });
var format_SVLocuinteCondominiu_Sanandrei_8 = new ol.format.GeoJSON();
var features_SVLocuinteCondominiu_Sanandrei_8 = format_SVLocuinteCondominiu_Sanandrei_8.readFeatures(json_SVLocuinteCondominiu_Sanandrei_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVLocuinteCondominiu_Sanandrei_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVLocuinteCondominiu_Sanandrei_8.addFeatures(features_SVLocuinteCondominiu_Sanandrei_8);
var lyr_SVLocuinteCondominiu_Sanandrei_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVLocuinteCondominiu_Sanandrei_8, 
                style: style_SVLocuinteCondominiu_Sanandrei_8,
                popuplayertitle: 'SV-Locuinte Condominiu_Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/SVLocuinteCondominiu_Sanandrei_8.png" /> SV-Locuinte Condominiu_Sanandrei'
            });
var format_SVParcurisiGradini_Sanandrei_9 = new ol.format.GeoJSON();
var features_SVParcurisiGradini_Sanandrei_9 = format_SVParcurisiGradini_Sanandrei_9.readFeatures(json_SVParcurisiGradini_Sanandrei_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcurisiGradini_Sanandrei_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcurisiGradini_Sanandrei_9.addFeatures(features_SVParcurisiGradini_Sanandrei_9);
var lyr_SVParcurisiGradini_Sanandrei_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcurisiGradini_Sanandrei_9, 
                style: style_SVParcurisiGradini_Sanandrei_9,
                popuplayertitle: 'SV-Parcuri si Gradini_Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/SVParcurisiGradini_Sanandrei_9.png" /> SV-Parcuri si Gradini_Sanandrei'
            });
var format_SVZoneVerziSpecializate_Sanandrei_10 = new ol.format.GeoJSON();
var features_SVZoneVerziSpecializate_Sanandrei_10 = format_SVZoneVerziSpecializate_Sanandrei_10.readFeatures(json_SVZoneVerziSpecializate_Sanandrei_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneVerziSpecializate_Sanandrei_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneVerziSpecializate_Sanandrei_10.addFeatures(features_SVZoneVerziSpecializate_Sanandrei_10);
var lyr_SVZoneVerziSpecializate_Sanandrei_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneVerziSpecializate_Sanandrei_10, 
                style: style_SVZoneVerziSpecializate_Sanandrei_10,
                popuplayertitle: 'SV-Zone Verzi Specializate_Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/SVZoneVerziSpecializate_Sanandrei_10.png" /> SV-Zone Verzi Specializate_Sanandrei'
            });
var format_SVDAliniamentInfrastructura_Sanandrei_11 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_Sanandrei_11 = format_SVDAliniamentInfrastructura_Sanandrei_11.readFeatures(json_SVDAliniamentInfrastructura_Sanandrei_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_Sanandrei_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_Sanandrei_11.addFeatures(features_SVDAliniamentInfrastructura_Sanandrei_11);
var lyr_SVDAliniamentInfrastructura_Sanandrei_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_Sanandrei_11, 
                style: style_SVDAliniamentInfrastructura_Sanandrei_11,
                popuplayertitle: 'SVD-Aliniament Infrastructura_Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_Sanandrei_11.png" /> SVD-Aliniament Infrastructura_Sanandrei'
            });
var format_SVAliniamentInfrastructura_Sanandrei_12 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_Sanandrei_12 = format_SVAliniamentInfrastructura_Sanandrei_12.readFeatures(json_SVAliniamentInfrastructura_Sanandrei_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_Sanandrei_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_Sanandrei_12.addFeatures(features_SVAliniamentInfrastructura_Sanandrei_12);
var lyr_SVAliniamentInfrastructura_Sanandrei_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_Sanandrei_12, 
                style: style_SVAliniamentInfrastructura_Sanandrei_12,
                popuplayertitle: 'SV-Aliniament Infrastructura_Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_Sanandrei_12.png" /> SV-Aliniament Infrastructura_Sanandrei'
            });
var format_CopaciCarani_13 = new ol.format.GeoJSON();
var features_CopaciCarani_13 = format_CopaciCarani_13.readFeatures(json_CopaciCarani_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciCarani_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciCarani_13.addFeatures(features_CopaciCarani_13);
var lyr_CopaciCarani_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciCarani_13, 
                style: style_CopaciCarani_13,
                popuplayertitle: 'Copaci Carani',
                interactive: true,
                title: '<img src="styles/legend/CopaciCarani_13.png" /> Copaci Carani'
            });
var format_CopaciCovaci_14 = new ol.format.GeoJSON();
var features_CopaciCovaci_14 = format_CopaciCovaci_14.readFeatures(json_CopaciCovaci_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciCovaci_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciCovaci_14.addFeatures(features_CopaciCovaci_14);
var lyr_CopaciCovaci_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciCovaci_14, 
                style: style_CopaciCovaci_14,
                popuplayertitle: 'Copaci Covaci',
                interactive: true,
                title: '<img src="styles/legend/CopaciCovaci_14.png" /> Copaci Covaci'
            });
var format_CopaciSanandrei_15 = new ol.format.GeoJSON();
var features_CopaciSanandrei_15 = format_CopaciSanandrei_15.readFeatures(json_CopaciSanandrei_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciSanandrei_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciSanandrei_15.addFeatures(features_CopaciSanandrei_15);
var lyr_CopaciSanandrei_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciSanandrei_15, 
                style: style_CopaciSanandrei_15,
                popuplayertitle: 'Copaci Sanandrei',
                interactive: true,
                title: '<img src="styles/legend/CopaciSanandrei_15.png" /> Copaci Sanandrei'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Intravilan_1.setVisible(false);lyr_Cimitir_2.setVisible(true);lyr_SVLocuinteCondominiu_Carani_Covaci_3.setVisible(true);lyr_SVParcurisiGradini_Carani_Covaci_4.setVisible(true);lyr_SVZoneVerziSpecializate_Carani_Covaci_5.setVisible(true);lyr_SVDAliniamentInfrastructura_Carani_Covaci_6.setVisible(true);lyr_SVAliniamentInfrastructura_Carani_Covaci_7.setVisible(true);lyr_SVLocuinteCondominiu_Sanandrei_8.setVisible(true);lyr_SVParcurisiGradini_Sanandrei_9.setVisible(true);lyr_SVZoneVerziSpecializate_Sanandrei_10.setVisible(true);lyr_SVDAliniamentInfrastructura_Sanandrei_11.setVisible(true);lyr_SVAliniamentInfrastructura_Sanandrei_12.setVisible(true);lyr_CopaciCarani_13.setVisible(true);lyr_CopaciCovaci_14.setVisible(true);lyr_CopaciSanandrei_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Intravilan_1,lyr_Cimitir_2,lyr_SVLocuinteCondominiu_Carani_Covaci_3,lyr_SVParcurisiGradini_Carani_Covaci_4,lyr_SVZoneVerziSpecializate_Carani_Covaci_5,lyr_SVDAliniamentInfrastructura_Carani_Covaci_6,lyr_SVAliniamentInfrastructura_Carani_Covaci_7,lyr_SVLocuinteCondominiu_Sanandrei_8,lyr_SVParcurisiGradini_Sanandrei_9,lyr_SVZoneVerziSpecializate_Sanandrei_10,lyr_SVDAliniamentInfrastructura_Sanandrei_11,lyr_SVAliniamentInfrastructura_Sanandrei_12,lyr_CopaciCarani_13,lyr_CopaciCovaci_14,lyr_CopaciSanandrei_15];
lyr_Intravilan_1.set('fieldAliases', {'fid': 'fid', });
lyr_Cimitir_2.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVLocuinteCondominiu_Carani_Covaci_3.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVParcurisiGradini_Carani_Covaci_4.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVZoneVerziSpecializate_Carani_Covaci_5.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVDAliniamentInfrastructura_Carani_Covaci_6.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVAliniamentInfrastructura_Carani_Covaci_7.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVLocuinteCondominiu_Sanandrei_8.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVParcurisiGradini_Sanandrei_9.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVZoneVerziSpecializate_Sanandrei_10.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVDAliniamentInfrastructura_Sanandrei_11.set('fieldAliases', {'fid': 'fid', 'Suprafata': 'Suprafata', });
lyr_SVAliniamentInfrastructura_Sanandrei_12.set('fieldAliases', {'FID': 'FID', 'Suprafata': 'Suprafata', });
lyr_CopaciCarani_13.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciCovaci_14.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciSanandrei_15.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_Intravilan_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Cimitir_2.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVLocuinteCondominiu_Carani_Covaci_3.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVParcurisiGradini_Carani_Covaci_4.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVZoneVerziSpecializate_Carani_Covaci_5.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_Carani_Covaci_6.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVAliniamentInfrastructura_Carani_Covaci_7.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVLocuinteCondominiu_Sanandrei_8.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVParcurisiGradini_Sanandrei_9.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVZoneVerziSpecializate_Sanandrei_10.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_Sanandrei_11.set('fieldImages', {'fid': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_SVAliniamentInfrastructura_Sanandrei_12.set('fieldImages', {'FID': 'TextEdit', 'Suprafata': 'TextEdit', });
lyr_CopaciCarani_13.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciCovaci_14.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciSanandrei_15.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_Intravilan_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_Cimitir_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVLocuinteCondominiu_Carani_Covaci_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVParcurisiGradini_Carani_Covaci_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVZoneVerziSpecializate_Carani_Covaci_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVDAliniamentInfrastructura_Carani_Covaci_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_Carani_Covaci_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVLocuinteCondominiu_Sanandrei_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVParcurisiGradini_Sanandrei_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVZoneVerziSpecializate_Sanandrei_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVDAliniamentInfrastructura_Sanandrei_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_Sanandrei_12.set('fieldLabels', {'FID': 'inline label - visible with data', 'Suprafata': 'inline label - visible with data', });
lyr_CopaciCarani_13.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciCovaci_14.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciSanandrei_15.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciSanandrei_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});