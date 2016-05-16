var app = angular.module("app", ['ui.router', 'ui.bootstrap', 'jkuri.gallery', 'wu.masonry']);

var MasonryCtrl = function($scope) {
  $scope.bricks = [
      {src: 'app/layout/images/gallery-item-1.jpg'},
      {src: 'app/layout/images/gallery-item-4.jpg'},
      {src: 'app/layout/images/gallery-item-6.jpg'},
      {src: 'app/layout/images/gallery-item-2.jpg'},
      {src: 'app/layout/images/gallery-item-5.jpg'},  
      {src: 'app/layout/images/gallery-item-7.jpg'},
      {src: 'app/layout/images/gallery-item-8.jpg'},
      {src: 'app/layout/images/gallery-item-3.jpg'}
  ];
};



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



