var mapa // Mapa que vamos a modificar
var posCentral = {lat: -34.617134, lng: -58.445232};

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {

  map = new google.maps.Map(document.getElementById('map'), {
    center: posCentral,
    zoom: 13
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}