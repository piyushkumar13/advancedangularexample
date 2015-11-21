/**
 * Created by kumarp9 on 11/11/15.
 */
myApp.filter('customFilter', function () {
    return function (someItem) {

        return someItem.substring(0, 3);
    }
});

myApp.filter('customOrderByFilter', ['orderByFilter', function (orderByFilter) {
    return function (arrayToFilter) {
        return orderByFilter(arrayToFilter, 'name');
    }
}]);

myApp.filter('custFilter',['filterFilter','$scope',function(filterFilter,$scope){
    return function(arrayToFilter){
        return filterFilter(arrayToFilter,$scope.carName);
    }
}]);