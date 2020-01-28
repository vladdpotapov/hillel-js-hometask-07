// Get user's name:
function getUserName() {
    let name;
    do {
        name = prompt('What is your name?');
    } while(!name);
    return name;
}

const userName = getUserName();

// Get user's age:
function getUserAge() {
    let age;
    do {
        age = parseInt(prompt('What is your age?'));
    } while (isNaN(age) || age < 0);
    return age;
}

const userAge = getUserAge();

// Create an object 'Driver':
const Driver = new Human(userName, userAge);

// Get user's data about desirable car:
function getUserData(text) {
    let data = prompt(text);
    return data;
}

const userCarBrand = getUserData('What car brand would you prefer?');
const userCarModel = getUserData('What model would you prefer?');

function getUserCarAge() {
    let age = parseInt(prompt('What car\'s age would you prefer?'));
    return age;
}

const userCarAge = getUserCarAge();
const userCarColor = getUserData('What car color would you prefer?');

// Create an object 'Car':
const Car = new Vehicle(userCarBrand, userCarModel, userCarAge, userCarColor);

// Add the 'Driver' object as the owner of the 'Car' object if Driver's age is above 18:
Car.addOwner();

// console.log(Driver);
// console.log(Car);