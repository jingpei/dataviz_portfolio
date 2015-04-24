var portfolioApp = angular.module("portfolioApp", ['ngRoute']);

var PortfolioListController = angular.module('PortfolioListController', []);

portfolioApp.config(['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/', { templateUrl: "partials/portfolios.html", controller: "PortfolioListController" })
		.otherwise({ redirectTo: "/404" })
}])