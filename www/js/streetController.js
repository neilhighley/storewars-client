angular.module('streetview.controllers', ['camera.services','notification.services'])
  .controller('StreetViewCtrl',function($scope,$rootScope,$ionicPlatform,camera,pusherNotification){


    $scope.currentImage="";

    $ionicPlatform.ready(function () {
      alert("updating camera");
      //take photo immediately
      camera.getPicture().then(function(imageURI) {
        alert("Image:"+imageURI);
        $scope.currentImage=imageURI;
        $scope.settings.cameraFeed=imageURI;
      }, function(err) {
        alert(err);
        console.err(err);
      });

    });

    //$rootScope.$on(PUSHER_EVENT_IN,function(evt,args){
    //  console.log("event in");
    //  $scope.ProcessPusherEvent(evt,args);
    //});

    $scope.settings={
      camerafeed:"img/streetscene.jpg"
    };

    $scope.UpdateUI=function(){
      console.log("updateUI");
      $scope.settings.camerafeed="img/streetscene.jpg";
    };

    //$scope.ProcessPusherEvent=function(evt,arg){
    //  console.log({"Process pusher":arg});
    //};

  });


