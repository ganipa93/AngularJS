app.controller('home', ['$scope', function ($scope) {
    $scope.mensaje = 'Bienvenidos!!!'
    $scope.bool = false;

    $scope.user = {
        nombre: 'Federico',
        apellido: 'Rocha',
    }
    $scope.alumnos = [
        "Patricio", "Gino"
    ]

    $scope.myclick = function (e) {
        alert('hizo click')
    }

    $scope.modificarDatos = function () {
        $scope.user.nombre = 'Patricio';
        $scope.user.apellido = 'Colombo';
    }
}])