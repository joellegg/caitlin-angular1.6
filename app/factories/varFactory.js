app.factory('varFactory', function() {

    let bologna;

    return {
        //getter
        getThatVar: () => {
            if (bologna) {
                return bologna
            } else {
                return "no bologna for you"
            }
        },

        //setter
        setThatVar: (newValue) => {
            bologna = newValue;
        }
    }
})
