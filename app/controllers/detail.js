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
