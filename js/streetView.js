streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView
  /*
  function inicializar() {
    var position = {lat: -34.617134, lng: -58.445232};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 14
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: position,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }
  */
    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    panorama.position = ubicacion;
    mapa.setStreetView(panorama);  
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
