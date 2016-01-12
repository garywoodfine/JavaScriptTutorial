
var Genie = (function(){

    //Private function
    var onWake = function (){
        return 'Who dares to disturb my slumber?';
    };

    // explicitly return public methods
    return {
        Wake : onWake

    };

}());


console.log(Genie.Wake());
