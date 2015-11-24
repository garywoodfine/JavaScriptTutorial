/*
   An example to illustrate hoisting in action
   even though the variable has been declared at a global
   level within the function
 */


var scope = "global";       // Variable will be unused
function hoist(){
    console.log(scope);     // Returns undefined
    var scope = "local";
    console.log(scope);     // Returns local
}

hoist();