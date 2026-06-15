import { assert } from 'chai';
import { notationToValue, valueToNotation } from '../src';

describe('Error Notation to Number', () => {

    it('throws an error for an invalid symbol', () => {
        assert.throws(() => {
            notationToValue('5p');
        }, Error, 'Invalid symbol p');
    });

    it('throws an error for invalid notation', () => {
        assert.throws(() => {
            notationToValue('I am not valid');
        }, Error, 'Invalid string');
    });

});

describe('Resistor notation to Number', () => {

    it('asserts 5 is a number', () => {
        assert.isNumber(notationToValue('5'), 'Resistor notation 5 is a number');
    });

    it('asserts 5k is a number', () => {
        assert.isNumber(notationToValue('5k'), 'Resistor notation 5k is a number');
    });

    it('asserts 5k5 is a number', () => {
        assert.isNumber(notationToValue('5k5'), 'Resistor notation 5k5 is a number');
    });

    it('asserts 5k', () => {
        assert.equal(notationToValue('5k'), 5000, 'Resistor notation 5k = 5000');
    });

    it('asserts 5k5', () => {
        assert.equal(notationToValue('5k5'), 5500, 'Resistor notation 5k5 = 5500');
    });

    it('asserts 1', () => {
        assert.equal(notationToValue('1'), 1, 'Resistor notation 1 = 1');
    });

    it('asserts 1M', () => {
        assert.equal(notationToValue('1M'), 1000000, 'Resistor notation 1M = 1000000');
    });

    it('asserts 1M2', () => {
        assert.equal(notationToValue('1M2'), 1200000, 'Resistor notation 1M2 = 1200000');
    });

});

describe('Error Number to Resistor notation', () => {

    it('assert throws an error for invalid value', () => {
        assert.throws(() => {
            valueToNotation('woo');
        }, Error, 'Invalid value');
    });

    it('assert throws an error for invalid value', () => {
        assert.throws(() => {
            valueToNotation('');
        }, Error, 'Invalid value');
    });

});

describe('Number to Resistor notation', () => {

    it('3 is a string', () => {
        assert.isString(valueToNotation(3), 'Resistor notation 5 is a string');
    });

    it('3k  is a string', () => {
        assert.isString(valueToNotation(3000), 'Resistor notation 5k is a string');
    });

    it('3k3  is a string', () => {
        assert.isString(valueToNotation(3300), 'Resistor notation 5k5 is a string');
    });

    it('3k', () => {
        assert.equal(valueToNotation('3000'), '3k', 'String 3000 = 3k');
    });

    it('3k', () => {
        assert.equal(valueToNotation(3000), '3k', 'Number 300 = 3k');
    });

    it('3k3', () => {
        assert.equal(valueToNotation(3300), '3k3', 'Number 3300 = 3k3');
    });

    it('1', () => {
        assert.equal(valueToNotation(1), '1', 'Number 1 = 1');
    });

    it('1M', () => {
        assert.equal(valueToNotation(1000000), '1m', 'Number 1000000 = 1m');
    });

    it('2M2', () => {
        assert.equal(valueToNotation(2200000), '2m2', 'Number 2200000 = 2m2');
    });

});
