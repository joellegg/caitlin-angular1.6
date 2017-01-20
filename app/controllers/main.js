app.controller('MainCtrl', function($scope, varFactory) {
    $scope.potatoes = "Baked!";
    $scope.steak = "ribeye";
    $scope.functionThing = (arg) => {
            console.log('hey', arg)
        }

    $scope.thingFromFactory = varFactory.getThatVar();

    $scope.setter = (newVal)=> {
        console.log('this is a turtle, I got the newVal', newVal)
        varFactory.setThatVar(newVal)
        $scope.thingFromFactory = newVal;
    }
})
