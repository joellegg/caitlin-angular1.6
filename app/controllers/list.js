app.controller('ListCtrl', function($scope, $http, varFactory, listFactory) {
    console.log("This is the mothertricking list app.");

    listFactory.getList()
    .then((val) => {
        console.log('val from listCtrl', val);
        $scope.list = val;
    })
})
