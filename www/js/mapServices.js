angular.module('map.services', [])

  .factory('mapService', function() {

    var map;
    // Initialize the map view
    //var div = document.getElementById("map_canvas");
    //map = plugin.google.maps.Map.getMap(div);
    //map.setMapTypeId(plugin.google.maps.MapTypeId.HYBRID);

    function refreshMe(){
      map.getMyLocation(onLocationRetrieved, function(){
        console.log("MAP ERROR");
        alert("Map error");
      });
    }
    function onLocationRetrieved(loc){

      map.animateCamera({
        'target': loc.latLng,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140,
        'duration': 5000 // 5 seconds
      });
    }

    function setMarker(mk){

      map.addMarker({
        position: mk.latLng,
        icon: "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png",
        animation: plugin.google.maps.Animation.DROP
      }, function(marker) {
        var button = document.getElementById("button");
        button.addEventListener("click", function() {
          marker.setAnimation(plugin.google.maps.Animation.BOUNCE);
        });
      });
    }

    return{
      setMap:function(div){
        document.addEventListener("deviceready", function()  {
          //var mdiv=$("#map_canvas");
          map = plugin.google.maps.Map.getMap(div);
          //map.setMapTypeId(plugin.google.maps.MapTypeId.HYBRID);
          map.on(plugin.google.maps.event.MAP_READY, refreshMe);
          //refreshMe();
          //map.on(plugin.google.maps.event.CAMERA_CHANGE, onMapCameraChanged);
        });
      },
      addMarker:function(mk){
        setMarker(mk);
      },
      refresh:function(){
       refreshMe();

      }

    }

  });
