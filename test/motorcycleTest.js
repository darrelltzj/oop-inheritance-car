// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var testMotorcycle = new Motorcycle('Make', 'Model', 2017, 'Blue', 2, ['Sarah'])
console.log('Testing instance of Motorcycle');
assert.strictEqual(testMotorcycle instanceof Motorcycle, true, 'Must be an instance of Motorcycle')
success()

console.log('Testing instance of Car');
assert.strictEqual(testMotorcycle instanceof Car, true, 'Must be an instance of Car')
success()

console.log('Testing constructor parameters (make)');
assert.strictEqual(testMotorcycle.make, 'Make', 'Constructor did not set make.')
console.log('Testing constructor parameters (model)');
assert.strictEqual(testMotorcycle.model, 'Model', 'Constructor did not set model.')
console.log('Testing constructor parameters (year)');
assert.strictEqual(testMotorcycle.year, 2017, 'Constructor did not set year.')
console.log('Testing constructor parameters (color)');
assert.strictEqual(testMotorcycle.color, 'Blue', 'Constructor did not set color.')
console.log('Testing constructor parameters (passenger)');
assert.deepEqual(testMotorcycle.passengers, ['Sarah' ], 'Constructor did not set passenger.')
success()

console.log('Testing constructor parameters (seats)');
assert.strictEqual(testMotorcycle.seats, 2, 'Seat not set to default 2 seats.')
success()

console.log('Testing wheelie');
var badWheelie = testMotorcycle.wheelie();
console.log('Testing wheelie when Motorcycle is off');
assert.strictEqual(typeof(badWheelie), 'boolean', 'wheelie function did not return a boolean value');
testMotorcycle.off();
assert.strictEqual(testMotorcycle.wheelie(), false, 'Motorcycle did a wheelie when the Motorcycle was off.');
console.log('Testing wheelie when Motorcycle is running');
testMotorcycle.start()
assert.strictEqual(testMotorcycle.wheelie(), true, 'Motorcycle did NOT do a wheelie when the Motorcycle was running.');
console.log('Testing if wheelie exists');
assert.equal(typeof(testMotorcycle.wheelie), 'function', 'there is no wheelie function')

success();
