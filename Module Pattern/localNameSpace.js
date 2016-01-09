

var Genie = (function (){

    //local name space
    var Speak ={};
    //Declared with a var statement so must be private
    var onWake = function (){
        return 'Who dares to disturb my slumber?';
    };

    //public accessible method
    Speak.Wake =  function (){
        return onWake();
    };

    // Return the local namespace object
    return Speak;
})();


console.log(Genie.Wake());
