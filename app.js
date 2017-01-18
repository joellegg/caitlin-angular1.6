console.log('ballers');

const app = angular.module('greatAppName', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/list', {
            controller: 'ListCtrl',
            templateUrl: 'partials/list.html'
        })
        .when('/list/:bologna', {
            controller: 'DetailCtrl',
            templateUrl: 'partials/detail.html'
        })
        .otherwise({
            redirectTo: '/'
        })
})

app.controller('MainCtrl', function($scope) {
    $scope.potatoes = "Baked!";
    $scope.steak = "ribeye";
    $scope.functionThing = (arg) => {
            console.log('hey', arg)
        }
})

app.controller('ListCtrl', function($scope, $http) {
    console.log("This is the mothertricking list app.");

    $http.get(`list.json`)
    .then((anything) => {
        console.log('the anything', anything);
        $scope.list = anything.data.list;
    })
})

app.controller('DetailCtrl', function($scope, $routeParams, $http) {
    console.log('detail controller');
    $scope.thingFromUrl = $routeParams.bologna

    $http.get('list.json')
    .then((value) => {
        console.log('value', value)
        let list = value.data.list;
        $scope.selectedItem = list[$scope.thingFromUrl];
    })
})
