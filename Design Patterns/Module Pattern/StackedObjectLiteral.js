

var Genie = (function (){


    //Declared with a var statement so must be private
    var onWake = function (){
        return 'Who dares to disturb my slumber?'
    };

    var onHungry = function (){
        return 'Feed me music , homeboy!'
    };

    //local name space
    var Speak = {
        Wake: function (){
            return onWake()
        },
        Hungry: function (){
           return onHungry();
        }
    };


    // Return the local namespace object
    return Speak;
})();

console.log(Genie.Hungry());
console.log(Genie.Wake());



