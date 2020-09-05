clase3.controller('listado', function ($scope) {
    $scope.empleados = [
        { nombre: 'Empleado', apellido: 'Nro. 1', edad: 10, coaching: false, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 2', edad: 20, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 3', edad: 15, coaching: false, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 4', edad: 40, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' },
        { nombre: 'Empleado', apellido: 'Nro. 5', edad: 30, coaching: true, avatar: 'Federico-Rocha-b95b453?nocache=7c922b7de7ffc06a7cfab8a57e82515e' }
    ];

    $scope.nuevoEmpleado = {
        nombre: '',
        apellido: '',
        edad: 0, coaching: true,
        avatar: ''
    }

    $scope.agregarEmpleado = function (event) {
        if ($scope.nuevoEmpleado.nombre === '') {
            alert('Ingrese el nombre')
            return;
        }
        if ($scope.nuevoEmpleado.apellido === '') {
            alert('Ingrese el nombre')
            return;
        }
        if ($scope.nuevoEmpleado.edad > 18) {
            alert('Ingrese el nombre')
            return;
        }

        $scope.empleados.push($scope.nuevoEmpleado);
        $scope.nuevoEmpleado = {
            nombre: '',
            apellido: '',
            edad: 0, coaching: true,
            avatar: ''
        }
    }

    $scope.submitEmpleado = function (event) {
        debugger
        if ($scope.empleadoForm.$valid) {
            $scope.empleados.push($scope.nuevoEmpleado);
            $scope.nuevoEmpleado = {
                nombre: '',
                apellido: '',
                edad: 0, coaching: true,
                avatar: ''
            }
        }
    }

    $scope.paises = ['Argentina', 'Colombia', 'Mexico']
    $scope.provincias = [];
    $scope.ciudades = [];

    $scope.edadMinima = 21;
    $scope.minLengthDefault = 10
    $scope.PatternSoloNum = '[0-9]{1,}';

    $scope.ciudadEsRequerido = function () {
        return $scope.empleadoForm.provincia.$valid
            && $scope.empleadoForm.pais.$valid;
    }

    $scope.changePais = function (event) {
        if ($scope.nuevoEmpleado.pais === 'Colombia') {
            $scope.provincias = ['Otra prov 1', 'Otra prov 2'];
        } else {
            $scope.provincias = ['Chubut', 'Bs. As.'];
        }
    }

    $scope.changeProv = function (event) {
        if ($scope.nuevoEmpleado.provincia === 'Chubut') {
            $scope.ciudades = ['Madryn', 'Rwason'];
        } else {
            $scope.ciudades = ['Otra ciudad', 'Otra ciudad'];
        }
    }
})