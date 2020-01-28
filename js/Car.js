function Vehicle(userCarBrand, userCarModel, userCarAge, userCarColor) {
    this.brand = userCarBrand;
    this.model = userCarModel;
    this.age = userCarAge;
    this.color = userCarColor;
    this.power = 250;
    this.showData = function() {
        console.log(this.Car);
    }
    this.addOwner = function() {
        if (Driver.age > 18) {
            Car.owner = Driver;
        } else {
            alert('Sorry, you are under the age of 18 and can\'t drive this car');
        }
    }
}