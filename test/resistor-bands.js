'use strict';
var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    resistorBands = require('../lib/resistor-bands');
var resource;
describe('Resistor Bands to Resistor Notation', function() {
    it('2k4 - 5 bands', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'brown']), ['2k4', 1]);
    });
    it('33k - 5 bands', function() {
        assert.deepEqual(resistorBands.decode(['orange', 'orange', 'black', 'red', 'brown']), ['33k', 1]);
    });
    it('2k4 - 4 bands', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'red', 'brown']), ['2k4', 1]);
    });
    it('33k - 4 bands', function() {
        assert.deepEqual(resistorBands.decode(['orange', 'orange', 'orange', 'brown']), ['33k', 1]);
    });
});
describe('Resistor Notation to Resistor Bands', function() {
    it('2k4 - 5 bands', function() {
        assert.deepEqual(resistorBands.encode(['2k4', 0.5], 5), ['red', 'yellow', 'black', 'brown', 'green']);
    });
    it('1  - 5 bands', function() {
        assert.deepEqual(resistorBands.encode(['1', 0.5], 5), ['brown', 'black', 'black', 'silver', 'green']);
    });
    it('3M  - 5 bands', function() {
        assert.deepEqual(resistorBands.encode(['3M', 0.5], 5), ['orange', 'black', 'black', 'yellow', 'green']);
    });
    it('2k4 - 4 bands', function() {
        assert.deepEqual(resistorBands.encode(['2k4', 0.5], 4), ['red', 'yellow', 'red', 'green']);
    });
    it('1 - 4 bands', function() {
        assert.deepEqual(resistorBands.encode(['1', 0.5], 4), ['brown', 'black', 'gold', 'green']);
    });
    it('3M - 4 bands', function() {
        assert.deepEqual(resistorBands.encode(['3M', 0.5], 4), ['orange', 'black', 'green', 'green']);
    });
});
describe('Resistor Bands to Resistor Notation - Tolerance', function() {
    it('1%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'brown']), ['2k4', 1]);
    });
    it('2%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'red']), ['2k4', 2]);
    });
    it('0.5%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'green']), ['2k4', 0.5]);
    });
    it('0.25%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'blue']), ['2k4', 0.25]);
    });
    it('0.1%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'violet']), ['2k4', 0.1]);
    });
    it('0.05%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'grey']), ['2k4', 0.05]);
    });
    it('5%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'gold']), ['2k4', 5]);
    });
    it('10%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'silver']), ['2k4', 10]);
    });
    it('20%', function() {
        assert.deepEqual(resistorBands.decode(['red', 'yellow', 'black', 'brown', 'none']), ['2k4', 20]);
    });
});