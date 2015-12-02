

//Create an object with some properties

var personObject = { Name : "", LastName : "", Hair : "", Eyes : "", Job : ""};

//Create a new object inherit properties from the base object
var gary = Object.create(personObject );
    gary.Name = "Gary";
    gary.LastName = "Woodfine";
    gary.Job = "Freelance Software Developer";
    gary.Eyes = "Blue";
    gary.Hair = "Brown";



for(var prop in gary){
    if(gary.hasOwnProperty(prop)) {
        console.log(prop + " = " + gary[prop]);
    }
}


