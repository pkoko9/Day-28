
angular.module ('app.controllers', [])

	.controller('submitController', function($scope) {
		
		$scope.correctSubmit = true;

	$scope.fix = function(){
		$scope.errorType='errorType';
	}

	$scope.enter = function() {
		'use strict';
		var correctEntry=0;

		var failArray = [
			'You must enter a name',
			'You must enter an email',
			'Email address must include @',
			'You must enter a web address',
			'Web address must start with http://',
			'You must enter a message'
			];

			// $scope.$watch($scope.name, function() {
			// console.log("name has changed!");
		// })
		
		if(angular.isUndefined($scope.name) || $scope.name === "") {
			$scope.fail1 = failArray[0];
		} else {
			$scope.fail11 = undefined;
			correctEntry++;
		}
		if(angular.isUndefined($scope.email) || $scope.email === "") {
			$scope.fail2 = failArray[1];
		} 
		else {
			for(var i=0; i < $scope.email.length; i++) {
				if($scope.email.indexOf('@') === -1) {
					$scope.fail2 = failArray[2];
				} else {
					$scope.fail2 = "";
					correctEntry++;
				}
			}
		}
		if(angular.isUndefined($scope.website) || $scope.website === "") {
			$scope.fail3 = failArray[3];
		} else {
			if($scope.website.substring(0,7) === "http://") {
				$scope.fail3 = "";
				correctEntry++;
			} else {
				$scope.fail3 = failArray[4];
			}
		}
		if(angular.isUndefined($scope.message) || $scope.message === "") {
			$scope.fail4 = failArray[5];
		} else {
			$scope.error4 = "";
			correctEntry++;
		}

		if(correctEntry === 4) {
			$scope.submitSuccess = false;
		}

	}
});