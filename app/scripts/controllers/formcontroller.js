/**
 * Created by kumarp9 on 14/11/15.
 */
myApp.controller('FormController', ['$scope','$routeParams', function ($scope,$routeParams) {
    $scope.college = {};
    $scope.college.name = " ";
    $scope.college.location = "no";
    $scope.college.stream = "science";
    $scope.college.course = "science";
    $scope.college.campus = [
        {
            name: "delhi",
            value: "Delhi"
        },
        {
            name: "mumbai",
            value: "Mumbai"
        },
        {
            name: "bangalore",
            value: "Bangalore"
        },
        {
            name: "Select a car",
            value: " "
        }
    ];

    $scope.college.select = " ";

//    console.log("The parameters are "+$routeParams.param1);
//    console.log("The parameters are "+$routeParams.param2);

}]);