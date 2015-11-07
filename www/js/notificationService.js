angular.module('notification.services', [])

  .factory('pusherNotification', function() {
    var API_KEY="7aa4cf1670199fafc250";
    var PUSHER_CHANNEL="StoreWars";
    var PUSHER_EVENT="areaevent";

      return{
        init:function(callback){
          var pusher = new Pusher(API_KEY, {
            encrypted: true
          });
          var channel = pusher.subscribe(PUSHER_CHANNEL);
          channel.bind(PUSHER_EVENT, function(data) {
            callback(data.message);
          });
        }
      }
  });
