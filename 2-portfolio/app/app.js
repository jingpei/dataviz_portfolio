var portfolioApp = angular.module("portfolioApp", ['ngRoute']);

var PortfolioListController = angular.module('PortfolioListController', []);

portfolioApp.config(['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/', { templateUrl: "partials/portfolios.html", controller: "PortfolioListController" })
		.when('/portfolio/:portfolio_name', { templateUrl: "partials/portfolio_viewer.html", controller: "PortfolioViewerController" })
		.otherwise({ redirectTo: "/404" })
}])