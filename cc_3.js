// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

//Car's accelerated speed with a given value
Car.prototype.accelerate = function(value) {
    this.speed += value;
    console.log(this.make + 'accelerated to' + this.speed + ' km/h.');}

// Car's braking speed with a given value
Car.prototype.brake = function(value) {
    this.speed -= value;
    console.log(this.make +'slowed down to' + this.speed + ' km/h.');}

// Car Class updated to include an EV Class
class EV extends Car {constructor(make, speed, charge) {super(make, speed); this.charge = charge;}}

// Charge Battery Method
EV.prototype.chargeBattery = function(chargeTo) {this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%.`);}

// Overriding the accelerating method into EV class
EV.prototype.accelerate = function() {
    this.speed += 20; // Increases speed by 20 km/h
    this.charge -= 1; // Decreases battery charge by 1%
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`);}

// Test Data
const tesla = new EV('Tesla', 120, 23);

console.log(`Initial speed - ${tesla.make}: speed ${tesla.speed} km/h, charge ${tesla.charge}%`);

console.log("\nTesting EV Acceleration and Charge:");
tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%.
tesla.accelerate(); // Tesla going at 160 km/h, with a charge of 21%.
tesla.chargeBattery(50); // Tesla battery charged to 50%.

console.log("\nTesting Braking:");
tesla.brake(10); // Tesla slowed down to 150 km/h.