var mapa // Mapa que vamos a modificar

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  /* Modificá la variable mapa con el constructor Map().
  Tendrás que asignarle un valor de zoom y
  un centro igual a la variable posicionCentral. */
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.617134, lng:-58.445232},
    zoom: 13
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
