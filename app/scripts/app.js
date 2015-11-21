/**
 * Created by kumarp9 on 08/11/15.
 */

var myApp = angular.module('myApp', ['ngRoute']);


//Configuration block.
myApp.config(['$provide', 'pconstant', 'pHelloProvider', '$routeProvider', function ($provide, pconstant, pHelloProvider, $routeProvider) {
    console.log("This is configuration block.");
    $provide.value('myValue', "Welcome to the world of AngularJs" + pconstant);
    pHelloProvider.doConfig();

    $routeProvider.when('/form1', {
        templateUrl: 'views/formView.html',
        controller: 'FormController'
    }).when('/form2', {
        templateUrl: 'views/formValidationView.html',
        controller: 'FormValidationController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

//Value
myApp.value('pvalue',
    {   author: "Piyush",
        subject: "AngularJs"
    }
);

//A constant
myApp.constant('pconstant', "My name is Piyush Kumar");


//Run block.
myApp.run(function () {
    console.log("This is the run block.");
});