'use strict';
var chai = require('chai'),
    assert = chai.assert,
    resistorNotation = require('../source/resistor-notation');

describe('Error Notation to Number', function () {

    it('throws an error for an invalid symbol', function () {
        assert.throws(function () {
            resistorNotation.notationToValue('5p');
        }, Error, 'Invalid symbol p');
    });

    it('throws an error for invalid notation', function () {
        assert.throws(function () {
            resistorNotation.notationToValue('I am not valid');
        }, Error, 'Invalid string');
    });

});

describe('Resistor notation to Number', function () {

    it('asserts 5 is a number', function () {
        assert.isNumber(resistorNotation.notationToValue('5'), 'Resistor notation 5 is a number');
    });

    it('asserts 5k is a number', function () {
        assert.isNumber(resistorNotation.notationToValue('5'), 'Resistor notation 5k is a number');
    });

    it('asserts 5k5 is a number', function () {
        assert.isNumber(resistorNotation.notationToValue('5'), 'Resistor notation 5k5 is a number');
    });

    it('asserts 5k', function () {
        assert.equal(resistorNotation.notationToValue('5k'), 5000, 'Resistor notation 5k = 5000');
    });

    it('asserts 5k5', function () {
        assert.equal(resistorNotation.notationToValue('5k5'), 5500, 'Resistor notation 5k5 = 5500');
    });

    it('asserts 1', function () {
        assert.equal(resistorNotation.notationToValue('1'), 1, 'Resistor notation 1 = 1');
    });

    it('asserts 1M', function () {
        assert.equal(resistorNotation.notationToValue('1M'), 1000000, 'Resistor notation 1M = 1000000');
    });

    it('asserts 1M2', function () {
        assert.equal(resistorNotation.notationToValue('1M2'), 1200000, 'Resistor notation 1M2 = 1200000');
    });

});

describe('Error Number to Resistor notation', function () {

    it('assert throws an error for invalid value', function () {
        assert.throws(function () {
            resistorNotation.valueToNotation('woo');
        }, Error, 'Invalid value');
    });
    it('assert throws an error for invalid value', function () {
        assert.throws(function () {
            resistorNotation.valueToNotation('');
        }, Error, 'Invalid value');
    });

});

describe('Number to Resistor notation', function () {

    it('3 is a string', function () {
        assert.isString(resistorNotation.valueToNotation(3), 'Resistor notation 5 is a string');
    });

    it('3k  is a string', function () {
        assert.isString(resistorNotation.valueToNotation(3000), 'Resistor notation 5k is a string');
    });

    it('3k3  is a string', function () {
        assert.isString(resistorNotation.valueToNotation(3300), 'Resistor notation 5k5 is a string');
    });

    it('3k', function () {
        assert.equal(resistorNotation.valueToNotation('3000'), '3k', 'String 3000 = 3k');
    });

    it('3k', function () {
        assert.equal(resistorNotation.valueToNotation(3000), '3k', 'Number 300 = 3k');
    });

    it('3k3', function () {
        assert.equal(resistorNotation.valueToNotation(3300), '3k3', 'Number 3300 = 3k3');
    });

    it('1', function () {
        assert.equal(resistorNotation.valueToNotation(1), '1', 'Number 1 = 1');
    });

    it('1M', function () {
        assert.equal(resistorNotation.valueToNotation(1000000), '1m', 'Number 1 = 1');
    });

    it('2M2', function () {
        assert.equal(resistorNotation.valueToNotation(2200000), '2m2', 'Number 1 = 1');
    });

});

