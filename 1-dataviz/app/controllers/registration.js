graphApp.controller("registration", 
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL,
		Authentication
		){

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user){
				//.then = a promise that executes asynchronously once the authentication is done
				$location.path("/graph");
			}).catch(function(error){
				//error message provided by firebase saying a user doesn't exist
				$scope.message = error.message;
			}); // login
	} // end function

	$scope.register = function() {
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user);
			$location.path("/graph");
		}).catch(function(error){
			$scope.message = error.message;
		});
	} // register

});  






