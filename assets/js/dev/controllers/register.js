"use strict";

app.controller( 'registerCtrl', function( $scope, $http, $location ){
	$scope.reg_form = {
		username: "",
		name: "",
		email: "",
		password: "",
		image: ""
	};
	$scope.errList = [];
	$scope.err = false;


	$scope.register = function(){
		$scope.errList = [];
		$scope.err = false;
		if( !$scope.reg_form.username.length > 0 ){
			$scope.errList.push("Username");
		}
		if( !$scope.reg_form.name.length > 0 ){
			$scope.errList.push("Name");
		}
		if( !$scope.reg_form.email.length > 0 ){
			$scope.errList.push("Email");
		}
		if( !$scope.reg_form.password.length > 0 ){
			$scope.errList.push("Password");
		}
		if( !$scope.reg_form.image.length > 0 ){
			$scope.errList.push("Image");
		}

		if ( $scope.errList.length > 0 ) {
			$scope.err = true;
			return;
		}

		// $http.post("/register", $scope.reg_form, {})
		// .then(function(data){
		// 	//to-do
		// 	$location.path("/home");
		// },function(error){
		// 	//error handling
		// });

			$location.path("/");
	}
});