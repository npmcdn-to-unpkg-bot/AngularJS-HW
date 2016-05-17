angular.module('app', ['ui.router', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: function ($rootScope) {
        $rootScope.title = 'Home';
      },
      templateUrl: 'app/components/home/home.html'
    })
    .state('contact', {
      url: '/contact',
      controller: function ($rootScope) {
        $rootScope.title = 'Contact';
      },
      templateUrl: 'app/components/contact/contact.html'
    })
    .state('gallery', {
      url: '/gallery',
      controller: 'GalleryCtrl',
      templateUrl: 'app/components/gallery/gallery.html'
    })
    .state('about', {
      url: '/about',
      controller: function ($rootScope) {
        $rootScope.title = 'About';
      },
      templateUrl: 'app/components/about/about.html'
    });
});