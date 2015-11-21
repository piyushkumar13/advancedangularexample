/**
 * Created by kumarp9 on 15/11/15.
 */
myApp.controller('FormValidationController', ['$scope', function ($scope) {

    $scope.school = {};
    $scope.school.student = {};
    $scope.school.student.name = "";

    $scope.myCheck = {};
    $scope.myCheck.getCssForForm = function (formFieldModel) {
        console.log(formFieldModel.$invalid);
        if (formFieldModel.$pristine) {
            return " ";
        }
        return formFieldModel.$valid ? "fieldValid" : "fieldInvalid";
    };
}]);