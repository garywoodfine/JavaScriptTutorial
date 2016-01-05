

var myStringObject = new String('Gary Woodfine');
var myObjectObject = new Object();
var myDateObject = new Date();
var myBooleanObject = new Boolean();


myObjectObject ['Name']= 'Gary Woodfine';


console.log(myObjectObject);
console.log(myStringObject);
console.log(myDateObject);
console.log(myBooleanObject);


/* Freelancer is a constructor function It was written with the intent of being used with the new keyword. */
var Freelancer = function (name, location, rate, available){
    // "this" below is the new object that is being created
    this.name = name;
    this.location = location;
    this.rate = rate;
    this.available = available;
    this.getAvailability = function () { return this.available; };
    };

var gary = new Freelancer('Gary Woodfine', 'United Kingdom', 1000, true);

console.log(gary);

console.log(gary.getAvailability());

var jack = Freelancer('Jack Jones', 'South Africa', 5000, false);

console.log(gary);
console.log(jack);


