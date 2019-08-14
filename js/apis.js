var mapa // Mapa que vamos a modificar
var posCentral = {lat: -34.617134, lng: -58.445232};
var transitLayer;
var bikeLayer;

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {

  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posCentral,
    zoom: 13
  });
  // mapa.setOptions({styles: styles['default']});
  transitLayer = new google.maps.TransitLayer();
  bikeLayer = new google.maps.BicyclingLayer();
  // transitLayer.setMap(mapa)  

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}