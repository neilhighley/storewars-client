angular.module('yoyo.services', [])

  .factory('yoyoService', function() {

    return{
      init:function(){
        alert("yoyo init");

      },
      getImageCode:function(){
        return {'image':"img/QRCode.png"};
      }

    }

  });
