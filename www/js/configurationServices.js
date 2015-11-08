angular.module('configuration.services', [])

  .factory('appconfig', function() {
    var PUSHER_API_KEY="9741dd04523515362e5c";
    var PUSHER_CHANNEL="StoreWars";
    var PUSHER_EVENT="areaevent";

    return{
      get:function(){
        return {
          Pusher:{API_KEY:PUSHER_API_KEY,
          CHANNEL:PUSHER_CHANNEL,
          EVENT:PUSHER_EVENT}
        }
      }
    }
  });
