app.controller('ListCtrl', function($scope, $http, varFactory) {
    console.log("This is the mothertricking list app.");

    $http.get(`list.json`)
    .then((anything) => {
        console.log('the anything', anything);
        $scope.list = anything.data.list;
    })

    $scope.factoryThing = varFactory.setThatVar();
})
