app.factory('listFactory', function($http) {
    return {
        getList: () => {
            return $http.get('list.json')
                .then((val) => {
                    console.log('val', val)
                    return val.data.list;
                })
        }
    }
})
