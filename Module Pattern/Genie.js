var Genie = (function(){
    var onWake = function (){
        return 'Who dares to disturb my slumber?';
    };

    return{
        Wake: onWake()
    }
})();
console.log(Genie.Wake);
