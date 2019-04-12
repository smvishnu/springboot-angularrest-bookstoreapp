/*app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});*/

angular.module('demo', [])
.controller('booksController', function($scope, $http) {
    $scope.headingTitle = "Books List";
    $http.get('http://localhost:8080/book').
    then(function(response) {
        $scope.books = response.data;
    });
});