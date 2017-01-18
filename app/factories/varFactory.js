app.factory('varFactory', function() {

    let bologna;

    return {
        //getter
        getThatVar: () => {
            return "this dang var"
        },

        //setter
        setThatVar: (newValue) => {
            bologna = newValue;
        }
    }
})
