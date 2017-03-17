// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
var testTruck = new Truck('Make', 'Model', 2017, 'Blue', 4, ['Anil', 'Sarah'])
console.log('Testing instance of Truck');
assert.strictEqual(testTruck instanceof Truck, true, 'Must be an instance of Truck')
success()

console.log('Testing instance of Car');
assert.strictEqual(testTruck instanceof Car, true, 'Must be an instance of Car')
success()

console.log('Testing constructor parameters (make)');
assert.strictEqual(testTruck.make, 'Make', 'Constructor did not set make.')
console.log('Testing constructor parameters (model)');
assert.strictEqual(testTruck.model, 'Model', 'Constructor did not set model.')
console.log('Testing constructor parameters (year)');
assert.strictEqual(testTruck.year, 2017, 'Constructor did not set year.')
console.log('Testing constructor parameters (color)');
assert.strictEqual(testTruck.color, 'Blue', 'Constructor did not set color.')
console.log('Testing constructor parameters (passenger)');
assert.deepEqual(testTruck.passengers, [ 'Anil', 'Sarah' ], 'Constructor did not set passenger.')
success()

console.log('Testing constructor parameters (seats)');
assert.strictEqual(testTruck.seats, 3, 'Seat not set to default 3 seats.')
success()
