'use strict';
var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    resistorNotation = require('./lib/resistor-notation'),
    resistorBands = require('./lib/resistor-bands');
    
describe('Resistor Bands to Resistor Notation', function() {
    it('2k4', function() {
        assert.equal(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'brown'])[0], '2k4', 'colours 1');
    });
    it('2k4', function() {
        assert.equal(resistorBands.decode(['red', 'yellow', 'black', 'red', 'brown'])[0], '24k', 'colours 1');
    });
    it('2k4', function() {
        assert.equal(resistorBands.decode(['orange', 'orange', 'black', 'red', 'brown'])[0], '33k', 'colours 1');
    });
});
describe('Resistor Notation to Resistor Bands', function() {
    it('2k4', function() {
        assert.deepEqual(resistorBands.encode(['2k4', 0.5]), ['red', 'yellow', 'black', 'brown', 'green'], 'colours 1');
    });
    it('1', function() {
        assert.deepEqual(resistorBands.encode(['1', 0.5]), ['brown', 'black', 'black', 'silver', 'green'], 'colours 1');
    });
});
describe('Resistor notation to Number', function() {
    it('5k', function() {
        assert.equal(resistorNotation.decode('5k'), 5000, 'Resistor notation 5k = 5000');
    });
    it('5k5', function() {
        assert.equal(resistorNotation.decode('5k5'), 5500, 'Resistor notation 5k5 = 5500');
    });
    it('1', function() {
        assert.equal(resistorNotation.decode('1'), 1, 'Resistor notation 1 = 1');
    });
});
describe('Number to Resistor notation', function() {
    it('5k', function() {
        assert.equal(resistorNotation.encode('3000'), '3k', 'String 3000 = 3k');
    });
    it('5k5', function() {
        assert.equal(resistorNotation.encode(3000), '3k', 'Number 300 = 3k');
    });
    it('5k5', function() {
        assert.equal(resistorNotation.encode(3300), '3k3', 'Number 3300 = 3k3');
    });
    it('1', function() {
        assert.equal(resistorNotation.encode('1'), 1, 'Number 1 = 1');
    });
});