'use strict';
var chai = require('chai'),
    assert = chai.assert,
    resistorBands = require('../source/resistor-bands');

describe('Error Resistor Bands to Resistor Notation', function () {

    it('asserts not an array throws an error', function () {
        assert.throws(function () {
            resistorBands.bandsToNotation('banjo');
        }, TypeError, 'Expected an array');
    });

    it('asserts no bands throws an error', function () {
        assert.throws(function () {
            resistorBands.bandsToNotation([]);
        }, Error, 'A resistor should have 4 or 5 bands');
    });

    it('assert not enough bands throws an error', function () {
        assert.throws(function () {
            resistorBands.bandsToNotation(['red', 'yellow', 'black']);
        }, Error, 'A resistor should have 4 or 5 bands');
    });

    it('asserts too many bands throws an error', function () {
        assert.throws(function () {
            resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown', 'brown']);
        }, Error, 'A resistor should have 4 or 5 bands');
    });

    it('asserts invalid values throws an error', function () {
        assert.throws(function () {
            resistorBands.bandsToNotation(['pink', 'banjo', 'ham sandwich', 'monkey', 'woo']);
        }, Error);
    });

});

describe('Resistor Bands to Resistor Notation', function () {

    it('2k4 - 5 bands', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown']), ['2k4', 1]);
    });

    it('33k - 5 bands', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['orange', 'orange', 'black', 'red', 'brown']), ['33k', 1]);
    });

    it('2k4 - 4 bands', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'red', 'brown']), ['2k4', 1]);
    });

    it('33k - 4 bands', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['orange', 'orange', 'orange', 'brown']), ['33k', 1]);
    });

});

describe('Error Resistor Notation to Resistor Bands', function () {

    it('asserts not an array throws an error', function () {
        assert.throws(function () {
            resistorBands.notationToBands('not an array', 5);
        }, TypeError, 'Expected an array');
    });

});


describe('Resistor Notation to Resistor Bands', function () {

    it('2k4 - 5 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['2k4', 0.5], 5), ['red', 'yellow', 'black', 'brown', 'green']);
    });

    it('1  - 5 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['1', 0.5], 5), ['brown', 'black', 'black', 'silver', 'green']);
    });

    it('3M  - 5 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['3M', 0.5], 5), ['orange', 'black', 'black', 'yellow', 'green']);
    });

    it('2k4 - 4 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['2k4', 0.5], 4), ['red', 'yellow', 'red', 'green']);
    });

    it('1 - 4 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['1', 0.5], 4), ['brown', 'black', 'gold', 'green']);
    });

    it('3M - 4 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['3M', 0.5], 4), ['orange', 'black', 'green', 'green']);
    });

    it('assert defaults to 5 bands', function () {
        assert.deepEqual(resistorBands.notationToBands(['3M', 0.5]), ['orange', 'black', 'black', 'yellow', 'green']);
    });

    it('assert defaults to 1% tolerance', function () {
        assert.deepEqual(resistorBands.notationToBands(['3M'], 5), ['orange', 'black', 'black', 'yellow', 'brown']);
    });

});

describe('Resistor Bands to Resistor Notation - Tolerance', function () {

    it('1%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'brown']), ['2k4', 1]);
    });

    it('2%', function () {

        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'red']), ['2k4', 2]);
    });

    it('0.5%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'green']), ['2k4', 0.5]);
    });

    it('0.25%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'blue']), ['2k4', 0.25]);
    });

    it('0.1%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'violet']), ['2k4', 0.1]);
    });

    it('0.05%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'grey']), ['2k4', 0.05]);
    });

    it('5%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'gold']), ['2k4', 5]);
    });

    it('10%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'silver']), ['2k4', 10]);
    });

    it('20%', function () {
        assert.deepEqual(resistorBands.bandsToNotation(['red', 'yellow', 'black', 'brown', 'none']), ['2k4', 20]);
    });

});
