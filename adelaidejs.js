function initMap() {
    var adelaide = { lat: -34.92866, lng: 138.59993 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: adelaide
    });
    var flightPath = new google.maps.Polyline({
      path: [
        { lat: -34.92866, lng: 138.59993 },
        { lat: -34.9312, lng: 138.6210 },
        { lat: -34.9074, lng: 138.6159 },
        { lat: -34.9199, lng: 138.6010 }
      ],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    flightPath.setMap(map);
  }
  

  