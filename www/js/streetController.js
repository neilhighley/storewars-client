angular.module('streetview.controllers', ['camera.services','notification.services'])
  .controller('StreetViewCtrl',function($scope,camera,pusherNotification){

    pusherNotification.init($scope.ProcessPusherEvent);

    $scope.settings={
      camerafeed:"img/streetscene.jpg"
    }

    $scope.UpdateUI=function(){
      console.log("updateUI");
      $scope.settings.camerafeed="img/streetscene.jpg";
    }

    $scope.ProcessPusherEvent=function(cp){
      console.log({"Process pusher":cp});
    };

  });


