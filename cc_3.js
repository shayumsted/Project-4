// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

//Car's accelerated speed with a given value
Car.prototype.accelrate = function(value) {
    this.speed += value;
    console.log(this.make + 'accelerated to' + this.speed + ' km/h.');}

// Car's braking speed with a given value
Car.prototype.brake = function(value) {
    this.speed -= value;
    console.log(this.make +'slowed down to'+ this.speed +' km/h.');}

// Car Class updated to include an EV Class
class EV extends Car {constructor(make, speed, charge) {super(make, speed); this.charge = charge;}}

// Charge Battery Method
EV.prototype.chargeBattery = function(chargeTo) {this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%.`);
}

//