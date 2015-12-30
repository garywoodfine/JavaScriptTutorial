
var freelancer = {
    name: 'Gary Woodfine',
    role: 'Freelance Software Developer',
    rate: 1000,
    registeredDate: new Date(),
    address :{
        city: 'Swindon',
        county:'Wiltshire',
        country : 'United Kingdom'

    },
    skills : [
        {
            language : "JavaScript",
            level :"advanced",
            proficiency:10
        },
        {
            language : "C#",
            level :"advanced",
            proficiency:10
        },
        {
            language : "Java",
            level :"advanced",
            proficiency:10
        },
        {
            language : "C++",
            level :"advanced",
            proficiency:10
        }
    ]
};

console.log(freelancer);

console.log(freelancer.name);

for(var att in freelancer){
    console.log(att);
}

console.log(freelancer.hasOwnProperty('name'));

freelancer.name = "Woody the awesome!";

console.log(freelancer);

freelancer['name'] = "Gary Woodfine";
console.log(freelancer);


for(var i=0;i<freelancer.skills.length;i++){
    console.log('\n');
    console.log('Programming language:' + freelancer.skills[i].language);
    console.log('Level:' + freelancer.skills[i].level);
    console.log('Proficiency:' + freelancer.skills[i].proficiency);
}





