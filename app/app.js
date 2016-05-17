var app = angular.module("app", ['ui.router', 'jkuri.gallery', 'ui.bootstrap']);

function CarouselDemoCtrl($scope){
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: "app/layout/images/slider-img-1.png",
      text: 'mauris vita'
    },
    {
      image: "app/layout/images/menu-bg-home.png",
      text: 'lorem ipsum'
    }
  ];
}