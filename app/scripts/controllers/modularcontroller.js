/**
 * Created by kumarp9 on 14/11/15.
 */

'use strict';
myApp.controller('ModularController', ['$scope', 'pvalue', 'pconstant', 'myFactory', 'pfactory', 'MyService', 'myValue', 'pHello', function ($scope, pvalue, pconstant, myFactory, pfactory, MyService, myValue, pHello) {

    console.log("This is the controller.");
    console.log("The result of the value is " + pvalue.author + " and " + pvalue.subject);
    console.log("The result of the constant is " + pconstant);
    console.log("The result of the factory is " + myFactory.company + " " + myFactory.designation);
    console.log("The result of the pfactory is " + pfactory);

    MyService.doLog();
    console.log(myValue);

    pHello.doIt();

}]);