/**
 * Created by kumarp9 on 14/11/15.
 */
'use strict';
myApp.factory('myFactory', function () {

    console.log("This is factory example.");
    return {
        company: 'XYZ',
        designation: 'scientist',
        location: 'India'
    };
});

/*
 We can inject value and constant into the factory. Factory is used to make the dynamic values at the runtime. It may use
 the injected values to make the dynamic value at runtime as happening here.
 */
myApp.factory('pfactory', ['pvalue', 'pconstant', function (pvalue, pconstant) {
    console.log("This is factory 2 example.");
    return pvalue.subject + " " + pconstant;
}]);

/*
 * We should provide the function name in the service function since service is created by the constructors function i.e
 * using new operator. In the following case, it will be var MyService = new MyService(); Even, if we don't provide the
 * name in the function
 * */
myApp.service('MyService', ['pvalue', 'pconstant', 'myFactory', function MyService(pvalue, pconstant, myFactory) {
    console.log("This is service example.");

    this.doLog = function () {
        console.log("This is the service example");
        console.log(pvalue.author + " " + pvalue.subject);
        console.log(pconstant);
        console.log(myFactory.company + " " + myFactory.designation);
    }
}]);

/*
 * This creates the provider as well as services. It is actually the most verbose and the comprehensive way of creating
 * services and provider. The other way of creating value services and factories is just the syntatic sugar of this way
 * of creating services. Whatever is achieved by the myApp.value,factory,service, same can be achieved by the provider.
 * */
myApp.provider('pHello', function () {
    console.log("This is provider example.");
    var provider = {};

    provider.doConfig = function () {
        console.log("This is the provider part of the provider.");
    };
    provider.$get = function () {
        var service = {};
        service.doIt = function () {
            console.log("this is the service part of the provider.");
        };
        return service;
    };
    return provider;
});