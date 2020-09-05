var app = angular.module('rootScope', [])

app.run(function ($rootScope) {
    $rootScope.titulo = '$rootScope AngularJS'
})
app.controller('rootScopeController', function ($scope, $rootScope) {
    $scope.tituloNuevo = '';
    $scope.cambiarTitulo = function () {
        $rootScope.titulo = $scope.tituloNuevo;
    }
})