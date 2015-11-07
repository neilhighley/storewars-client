angular.module('location.services', [])

  .factory('locationService', function() {

    return{
      register:function(){

        var obj=[
          {EventName:"free beer",
           Lon:100,
           Lat:10,
          },
          {EventName:"free mice",
            Lon:10,
            Lat:10,
          },{EventName:"free rice",
            Lon:10,
            Lat:100,
          }
        ]

        return obj;
      }

    }

  });
