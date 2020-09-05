angular.module('laboratorio', [])
    // .config(function () {
    // })
    .run(function ($rootScope) {
        $rootScope.title = 'Laboratorio';
        $rootScope.empleados = [
            { nombre: 'Empleado', apellido: 'Nro. 1', edad: 10, coaching: false },
            { nombre: 'Empleado', apellido: 'Nro. 2', edad: 10, coaching: true },
            { nombre: 'Empleado', apellido: 'Nro. 3', edad: 10, coaching: false },
            { nombre: 'Empleado', apellido: 'Nro. 4', edad: 10, coaching: true },
            { nombre: 'Empleado', apellido: 'Nro. 5', edad: 10, coaching: true }
        ];
        $rootScope.isForm = false;
    })
    .controller('listado', function ($scope, $rootScope) {
        $rootScope.mivariableinterna = 'interna'
        $scope.remove = function (index) {
            $rootScope.empleados.splice(index, 1);
        }
        $scope.countCoach = function () {
            return $rootScope.empleados.filter(x => x.coaching).length
        }
        $scope.agregarUser = function () {
            $rootScope.isForm = true;
        }
    })
    .controller('form', function ($scope, $rootScope) {
        $scope.newEmp = {
            nombre: '',
            apellido: '',
            edad: null,
            coaching: false
        }
        $scope.addEmp = function () {
            $rootScope.empleados.push($scope.newEmp);
            $rootScope.isForm = false;
            $scope.newEmp.nombre = '';
            $scope.newEmp.apellido = '';
            $scope.newEmp.edad = null;
            $scope.newEmp.coaching = false;
        }
    })