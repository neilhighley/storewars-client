angular.module('yoyo.controllers', ['yoyo.services'])
  .controller('YoyoViewCtrl',function($scope,yoyoService){

    yoyoService.init();

    $scope.settings={
      yoyoCode:"img/QRCode.png"
    };

    $scope.UpdateUI=function(){
      console.log("updateUI");
      $scope.settings.yoyoCode=yoyoService.getImageCode().image;
    };

  });


