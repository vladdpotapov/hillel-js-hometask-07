// Getting info about user:
const userName = getData('What is your name?');
const userAge = getAgeData('What is your age?');

// Create an object 'Driver':
const Driver = new Human(userName, userAge);

// Getting user's data about desirable car:
const userCarBrand = getData('What car brand would you prefer?');
const userCarModel = getData('What model would you prefer?');
const userCarAge = getAgeData('What car\'s age would you prefer?');
const userCarColor = getData('What car color would you prefer?');

// Create an object 'Car':
const Car = new Vehicle(userCarBrand, userCarModel, userCarAge, userCarColor);

// Add the 'Driver' object as the owner of the 'Car' object if Driver's age is above 18:
Car.addOwner();

console.log(Driver);
console.log(Car);