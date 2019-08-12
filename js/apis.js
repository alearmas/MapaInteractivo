var mapa // Mapa que vamos a modificar

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  var myLatLng = {lat: -34.617134, lng: -58.445232};

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
  
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "¡Aquí estás!"
  });
  marker.setAnimation(google.maps.Animation.DROP)
  
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}