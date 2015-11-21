/**
 * Created by kumarp9 on 08/11/15.
 */
myApp.controller("FirstController", ['$scope', function ($scope) {
    $scope.student = {
        firstName: "Piyush",
        lastName: "Kumar",
        age: 25
    }

    $scope.fullName = function () {

        return $scope.student.firstName + $scope.student.lastName;
    }
    $scope.checkName = function () {
        if (!$scope.student.firstName || !$scope.student.lastName) {
            return true;
        }
        return false;
    }
}]);