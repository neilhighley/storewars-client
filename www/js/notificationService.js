angular.module('notification.services', ['configuration.services'])

  .factory('pusherNotification', function($rootScope,appconfig) {

      return{
        init:function(eventname){
          //console.log(callback);
          var conf=appconfig.get();
          console.log("pusher initialised");

          var pusher = new Pusher(conf.Pusher.API_KEY, {
            encrypted: true
          });

          var channel = pusher.subscribe(conf.Pusher.CHANNEL);
          channel.bind(conf.Pusher.EVENT, function(data) {
            //alert("msg in");
            $rootScope.$broadcast(eventname,data);
          });
        }
      }
  });
