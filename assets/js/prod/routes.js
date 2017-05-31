"use strict";
app.config(function($routeProvider,$locationProvider){
	$routeProvider.when("/",{templateUrl:"/views/home",controller:"homeCtrl"}).when("/register",{templateUrl:"/views/register",controller:"registerCtrl"}).otherwise({redirectTo:"/404"}),$locationProvider.html5Mode({enabled:!0,requireBase:!1})});