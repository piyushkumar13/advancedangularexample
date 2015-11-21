/**
 * Created by kumarp9 on 11/11/15.
 */
myApp.controller('FilterController', ['$scope', 'numberFilter', 'orderByFilter', 'filterFilter', function ($scope, numberFilter, orderByFilter, filterFilter) {

    $scope.cars = [
        {
            name: "maruti",
            model: 2013,
            price: 3
        },
        {
            name: "creta",
            model: 2014,
            price: 11
        },
        {
            name: "range rover",
            model: 2015,
            price: 65
        }

    ];

    $scope.myDate = new Date();

    $scope.carFilter = function (car) {
        if (car.name === "maruti") {
            return false;
        }
        return true;
    };

    $scope.filteredCarsByName = orderByFilter($scope.cars, 'name');
    $scope.filteredCarsBySpecificYear = filterFilter($scope.cars, '2015');
    $scope.filteredCarsByPriceNumber = $scope.cars;

    for (car in $scope.cars) {
        $scope.filteredCarsByPriceNumber[car].price = numberFilter($scope.cars[car].price, '3');
    }

    $scope.inputCarName = "";
    $scope.carName = "";

}]);