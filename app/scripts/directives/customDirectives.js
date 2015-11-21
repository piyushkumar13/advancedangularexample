/**
 * Created by kumarp9 on 12/11/15.
 */


// Simple custom directive without any compile and link function.
// directive names should always be in lowercase. All uppercase and camelCase wont work.
myApp.directive('piyushkumar', function () {

    console.log("This is directive example.");
    var directive = {};
    directive.restrict = 'E';
    directive.template = "<b> This is custom directive example</b>";
    return directive;
});

//Directive with the template url.
myApp.directive('pdirective', function () {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'views/view1.html';
    return directive;

});

//Directive with isolate scope.
myApp.directive('isodirective', function () {

    var directive = {};
    directive.restrict = 'E';
    directive.template = "<b>This is the custom directive example with isolate scope.</b>My first name is {{user.firstName}} and last name is {{user.lastName}}";
    directive.scope = {
        user: '=user1'
    };
    return directive;
});

//Directive with tranclude option.

myApp.directive('ptrans', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.transclude = true;
    /*    we can give ng-transclude as a tag as well as an attribute of some tag.Ex - <div ng-transclude></div>
     or <ng-transclude></ng-tansclude>
     */
    directive.template = "<b>This is the custom directive example with transclude option.</b><ng-transclude></ng-transclude>";
    return directive;
});

myApp.directive('pcompiledirective', function () {

    var directive = {};
    directive.restrict = 'E';
    directive.compile = function (element, attributes) {
        console.log("This is directive compile function.");
        element.html("<b>This is the directive compile function.</b>")
        element.css("background-color", "#cccccc");
        /*
         * We can also have the link function only. In this case, we will have only link function to the JS directive object.
         * like directive.link = function($scope,element,attributes){...} and return the directive JS object.
         * */
        var linkFunction = function ($scope, element, attributes) {
            console.log("This is the directive link function.")
            element.html("<u>This is the link function example. The author name is : </u>" + $scope.piyush.firstName);
        };
        return linkFunction;
    };
    return directive;
});


