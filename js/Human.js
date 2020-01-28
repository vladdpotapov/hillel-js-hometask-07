function Human(userName, userAge) {
    this.name = userName;
    this.age = userAge;
    this.showData = function() {
        console.log(this.name + '' + this.age);
    }
}