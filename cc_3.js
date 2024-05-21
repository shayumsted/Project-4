// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

//Car's accelerated speed with a given value
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.make + 'accelerated to' + this.speed + ' km/h.');}

// Car's braking speed with a given value
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.make +'slowed down to'+ this.speed +' km/h.');}

// Car Class updated to include an EV Class
function EV(make, speed, charge) {Car.call(this, make, speed); this.charge = charge;}
EV.prototype = Object.create(Car.prototype);

