

// Import our fibonacci class
var f = require('../Array/Fibonacci')();
var fibonacci = new Array();

// Use a simple fibonacci module to create a fibonacci sequence
for(var i =1 ; i <= 8; i++){
    fibonacci.push(f.recursive(i));
}

//iterate through the array
for(var i=0;i<fibonacci.length;i++){
    console.log(fibonacci[i]);
}


//updating elements in an array
fibonacci[3] = 17;
fibonacci[10] = 100000000000000;


//remove data
fibonacci.pop();

//iterate through the array
for(var i=0;i<fibonacci.length;i++){
    console.log(fibonacci[i]);
}



