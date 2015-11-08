angular.module('mapview.controllers', ['camera.services','notification.services','map.services'])
  .controller('MapViewCtrl',function($scope,$rootScope,$ionicPlatform,pusherNotification,mapService){

    var PUSHER_EVENT_IN="pusher-event";
    var chats=[
      {name:"Neil",
      lastText:"just a text thing"},
      {name:"Noel",
        lastText:"just a thing"}
    ];
    // Initialize the map view

    //var div = document.getElementById("map_canvas");
    //mapService.setMap(div);

    $ionicPlatform.ready(function () {
      pusherNotification.init(PUSHER_EVENT_IN);
    });

    $rootScope.$on(PUSHER_EVENT_IN,function(evt,args){
      $scope.ProcessPusherEvent(evt,args);
    });

    $scope.settings={
      camerafeed:"img/streetscene.jpg"
    };

    $scope.UpdateUI=function(){
      $scope.settings.camerafeed="img/streetscene.jpg";
    };

    $scope.ProcessPusherEvent=function(evt,arg){
      console.log({"Process pusher":arg});

      alert(arg);
      mapService.refresh();
    };

  });


