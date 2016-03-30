var spapp = angular.module("spa", ["ngRoute"]);



spapp.config([ "$routeProvider", function($routeProvider) {
	 $routeProvider.when("/home", {
		template : '<div class="container"> <h2>Welcome to AngularJS</h2></div>'
	})
	 .when("/contact", {
		templateUrl : "contact.html"
	})
	 .when("/about",{templateUrl: "about.html"
	})
	 .otherwise({templateUrl : "error.html"})
} ]);
	
spapp.controller('about', function($scope) {

	//controller for about me page. For this demo there is nothing interesting to be done since the page only displays some text
});

spapp.controller('contact', function($scope, $http) {

	$scope.sendData = function() {
		//note, appropriate input validation must be performed here before submitting to the server where server-side validation can be performed to ensure maximum security.
		// The url can be a form handler in the server-side. This form will not submit because there is no url to the server.

		//if($scope.fullName.$valid && $scope.email.$valid && $scope.message.$valid){
		 	$http({
		 		url: "contact2.php", 
		 		method: "POST",
		 		data: {fullName: $scope.fullName,email: $scope.email,message: $scope.message}
			}).
		  	 success(function(data) {
			  console.log(data);
		    });
		
	};

});