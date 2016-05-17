
var GalleryCtrl = function($scope, $rootScope, $document) {
	$rootScope.title = 'Gallery';

	$scope.slides = [
		{thumb: 'app/layout/images/gallery-item-1.jpg', img: 'app/layout/images/gallery-item-1-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-4.jpg', img: 'app/layout/images/gallery-item-4-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-6.jpg', img: 'app/layout/images/gallery-item-6-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-5.jpg', img: 'app/layout/images/gallery-item-2-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-2.jpg', img: 'app/layout/images/gallery-item-5-big.jpg'},	
		{thumb: 'app/layout/images/gallery-item-7.jpg', img: 'app/layout/images/gallery-item-7-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-8.jpg', img: 'app/layout/images/gallery-item-8-big.jpg'},
		{thumb: 'app/layout/images/gallery-item-3.jpg', img: 'app/layout/images/gallery-item-3-big.jpg'}
	];

	$scope.viewSlide = false;
	$scope.count = $scope.slides.length;

	$scope.defineImage = function(index) {
		$scope.index = index;
		$scope.currentImg = $scope.slides[index].img;			
	};

	$scope.openSlide = function (e, index) {
		e.preventDefault();
		$scope.viewSlide = true;
		$scope.defineImage(index);
	};

	$scope.closeSlide = function() {
		$scope.viewSlide = false;
	};

	$scope.prev = function (e) {
		e.stopPropagation();
		if ($scope.slides[$scope.index - 1] === undefined) {
			$scope.defineImage($scope.count - 1);
		} else {
			$scope.defineImage($scope.index - 1);
		}		
	};

	$scope.next = function (e) {
		e.stopPropagation();
		if ($scope.slides[$scope.index + 1] === undefined) {
			$scope.defineImage(0);
		} else {
			$scope.defineImage($scope.index + 1);
		}
	};

};
