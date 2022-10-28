var urlServerSuite = "http://190.85.249.10:8082/geoserver/wms?service=WMS&version=1.1.0"

var urlServerSc2021 = "http://190.85.249.10:8082/geoserver/sc2022/wms?service=WMS&version=1.1.1"


var wmsLayer = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0', {
    layers: 'idesc:mc_comunas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsHuertas = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:huertas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsBloqueos = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:bloqueos',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsIPM = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:ipm',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsAreasServicioHuertas = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:areas_servicio_huertas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsAreasServicioComedores = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:areas_servicio_comedores',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsComedores = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comedores',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsComunas = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:idesc_comunas_huertas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true,
});


var wmsDrenajesDobles = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:drenajes_dobles',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsHumedales = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:idesc_humedales',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsCorredoresAmbientales = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:pot_corredores_ambientales',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsParquesNatRecreacionales = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:idesc_parques_naturales_recreacionales',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsZonasVerdesAreasP = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:idesc_zonas_verdes_areas_protectoras',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsVeredasParticipantes = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:veredas_participantes',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsZonasHomogeneasGeoeco = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:pot_zonashomogeneasgeoeconomicas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsEquipamentosRecreacion = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:pot_equiprecreacion',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsDrenajeSencillo = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:idesc_drenaje_sencillo',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsCuencasHidrograficas = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:cvc_cuencas_hidrograficas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsCuerposAgua = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:cvc_cuerpos_agua',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsParquesNacionales = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:pnn_parques_nacionales',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

//Capas con comunas 
var wmsComunas1_3 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_1_3',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsComunas4_5_6 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_4_5_6',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsComunas13 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_13',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsComunas15 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_15',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsComunas18 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_18',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsComunas20 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_20',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});

var wmsComunas21 = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_21',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});


var wmsComunasProcesosHuertas = L.tileLayer.wms(urlServerSc2021, {
    layers: 'sc2022:comunas_procesos_huertas',
    attribution: 'Creditos de la capa',
    format: 'image/png',
    transparent: true
});