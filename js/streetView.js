streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView
  
  function inicializar() {
    var position = {lat: -34.617134, lng: -58.445232};
    panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
          position: position,
          pov: {
            heading: 34,
            pitch: 10
          },
        });
    // mapa.StreetViewPanorama(panorama);
    mapa.setStreetView(panorama);
  }
  
    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    //panorama.setPosition(ubicacion)
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
