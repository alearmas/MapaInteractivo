lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  function autocompletar () {
    var circulo = new google.maps.Circle({
      center: {lat: -34.617134, lng: -58.445232}, 
      map: mapa,
      radius: 20000,
      visible: false,
    })
    var completarDireccion = new google.maps.places.Autocomplete(document.getElementById("direccion"));
    var completarInicio = new google.maps.places.Autocomplete(document.getElementById("desde"));
    var completarDestino = new google.maps.places.Autocomplete(document.getElementById("hasta"));
    var completarAgregar = new google.maps.places.Autocomplete(document.getElementById("agregar"));
    completarDireccion.setBounds(circulo.getBounds())
    completarInicio.setBounds(circulo.getBounds())
    completarDestino.setBounds(circulo.getBounds())
    completarAgregar.setBounds(circulo.getBounds())
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
    var request = {
      location : posicion,
      radius: document.getElementById('radio').value,
      types : [document.getElementById('tipoDeLugar').value],
    };
    servicioLugares.nearbySearch(request,marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
