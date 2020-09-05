var app = angular.module('clase2', ['ngAria', 'eduit'])
    .run(function ($rootScope) {
        // $rootScope.formatDate = 'fullDate'
    });

// Controllers
app.controller('inicio', function ($scope, $window, $filter, $timeout) {
    console.dir($window)
    $scope.urBaseImagenes = 'https://educacionit-live.s3.ca-central-1.amazonaws.com/assets/img/user/avatar/';
    $scope.empleados = [
        { nombre: 'Empleado', apellido: 'Nro. 1', edad: 10, coaching: false, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 2', edad: 20, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 3', edad: 15, coaching: false, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 4', edad: 40, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 5', edad: 30, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' }
    ];

    $scope.opcionSelect = 'dos';

    // for (let index = 0; index < $scope.empleados.length; index++) {
    //     const empleado = $scope.empleados[index];

    // }
    // for (const empleado of $scope.empleados) {

    // }

    // $scope.empleados.forEach(emplado => {

    // })

    // angular.forEach($scope.empleados, function (empleado) {

    // });

    $scope.fecha = "2012-04-23T18:25:43.511Z";
    // const filterDate = $filter('date');
    // $scope.fecha = filterDate(new Date());

    // alert($scope.fecha)

    $scope.orderProp = 'apellido';
    $scope.orderReverse = false;
    $scope.cambiarOrder = function (field) {
        if ($scope.orderProp !== field) {
            $scope.orderProp = field;
        } else {
            $scope.orderReverse = !$scope.orderReverse;
        }
    }

    $scope.formatDate = '';
    $scope.formatos = ['medium', 'short', 'fullDate']
    $scope.user = {
        nombre: '',
        apellido: ''
    }

    $scope.enviando = false;
    $scope.enviar = function (event) {
        $scope.enviando = true;
        $timeout(function () {
            $scope.enviando = false;
        }, 3000);
    }

    $scope.colorDefault = 'green';
    $scope.myStyle = { 'border': '1px solid ' + $scope.colorDefault };

    $scope.changeCheck = function () {
        $scope.classNg = { active: $scope.classActive };
    }
})

// filtros
app.filter('customerFilter', function () {
    return function (input, propOne) {
        return input + ' | ' + propOne;
    }
})