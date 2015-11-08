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

    //$scope.ShowMessage();

    $ionicPlatform.ready(function () {
      alert("pusher init");
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

    $scope.ShowMessage=function(obj){
      var msgBox = document.getElementById("msgboxalert");
      $("#msgboxalert").html("<p>MESSAGE HERE</p>");
      $("#msgboxalert").css({'display':'block'});
    }
    $scope.HideMessage=function(obj){
      var msgBox = document.getElementById("msgboxalert");
      $("#msgboxalert").css({'display':'none'});
    }

    $scope.ProcessPusherEvent=function(evt,arg){
      if($rootScope.team==undefined){
        $rootScope.team="red";

      }
      if($rootScope.messageNumber==undefined){
        $rootScope.messageNumber=0;
      }
      if(arg.target.identifier!=$rootScope.team){
        $rootScope.messageNumber++;
        alert(arg.name);
        alert(arg.flavour)
      }


      if(IsAMessageAlert){
        $scope.ShowMessage(evt);
      }

    };

  });


