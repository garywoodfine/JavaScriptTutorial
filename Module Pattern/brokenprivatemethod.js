


// Will Fail due to attempting to access a private method.
var someModule = (function(){
    var privateMethod = function (){
        console.log('Who dares to disturb my slumber?');
    }
})();


console.log(someModule.privateMethod);


// This function will work as we create a publicly accessible function which in turn calls the private method.




