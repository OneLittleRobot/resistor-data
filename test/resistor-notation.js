'use strict';
var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  resistorNotation = require('../lib/resistor-notation');

var resource;


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
  it('1M', function() {
    assert.equal(resistorNotation.decode('1M'), 1000000, 'Resistor notation 1M = 1000000');
  });  
  it('1M2', function() {
    assert.equal(resistorNotation.decode('1M2'), 1200000, 'Resistor notation 1M2 = 1200000');
  });    

});

describe('Number to Resistor notation', function() {

  it('3k', function() {
    assert.equal(resistorNotation.encode('3000'), '3k', 'String 3000 = 3k');
  });

  it('3k', function() {
    assert.equal(resistorNotation.encode(3000), '3k', 'Number 300 = 3k');
  });

  it('3k3', function() {
    assert.equal(resistorNotation.encode(3300), '3k3', 'Number 3300 = 3k3');
  });

  it('1', function() {
    assert.equal(resistorNotation.encode(1), '1', 'Number 1 = 1');
  });
  it('1M', function() {
    assert.equal(resistorNotation.encode(1000000), '1m', 'Number 1 = 1');
  });
  it('2M2', function() {
    assert.equal(resistorNotation.encode(2200000), '2m2', 'Number 1 = 1');
  });  

});

