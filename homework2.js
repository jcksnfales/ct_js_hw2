//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function showFavFoods(person) {
    for (let i = 0; i < Object.keys(person).length; i++) {
        if (Array.isArray(Object.values(person)[i])) {
            // if key value is an array:
            if (typeof Object.values(person)[i][0] === 'object') {
                // if array contains an object:
                Object.keys(Object.values(person)[i][0]).forEach(key => console.log(`Favorite ${Object.keys(person)[i]} from ${key}? ${Object.values(person)[i][0][key]}.`));
            } else {
                // if array does not contain an object:
                console.log(`Favorite ${Object.keys(person)[i]}? ${Object.values(person)[i]}.`);
            }
        } else {
            // if key value is not an array:
            console.log(`Favorite ${Object.keys(person)[i]}? ${Object.values(person)[i]}.`);
        }
    }
}

showFavFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`This is ${this.name}, who is ${this.age} years old.`);
    }
    // Create another arrow function for the addAge method that takes a single parameter
    this.ageUp = (years) => {
        this.age += years;
    }
}

let person1 = new Person('Jack', 22);
person1.printInfo();
// Adding to the age 
[1,2,3].forEach(i => person1.ageUp(1));
person1.printInfo();

let person2 = new Person('Michael', 23);
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const howLongIsIt = (word) => {
    return new Promise((resolve, reject) => {
        (word.length >= 10) ? resolve("Big word") : reject("Small Number"); 
    });
}

let theWord = "bird";
howLongIsIt(theWord)
.then((result) => {
    console.log(result);
})
.catch((reject) => {
    console.log(reject);
});