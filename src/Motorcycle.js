var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers)
  this.seats = 2
}

Motorcycle.prototype = Object.create(Car.prototype)

Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log('Doing a sick wheelie!!')
    return true
  }
  else {
    return false
  }
}

module.exports = Motorcycle;
