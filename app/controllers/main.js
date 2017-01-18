app.controller('MainCtrl', function($scope) {
    $scope.potatoes = "Baked!";
    $scope.steak = "ribeye";
    $scope.functionThing = (arg) => {
            console.log('hey', arg)
        }
})
