'use strict';
var resistorNotation = require('./resistor-notation');
var utils = require('./utils');
var maps = require('./maps');
var decode = function decode(bands) {
    var tolerance;
    var exp;
    var split;
    if (bands.length === 4) {
        tolerance = maps.getToleranceFromColor(bands[3]);
        exp = maps.getValueFromColor(bands[2]);
        split = 2;
    } else if (bands.length === 5) {
        tolerance = maps.getToleranceFromColor(bands[4]);
        exp = maps.getValueFromColor(bands[3]);
        split = 3;
    }
    var tmp = '';
    for (var i = 0; i < split; i++) {
        tmp += String(maps.getValueFromColor(bands[i]));
    }
    tmp = tmp * Math.pow(10, exp);
    return [resistorNotation.encode(tmp), tolerance];
}
exports.decode = decode;
var encode = function encode(data, bands) {
    var bands = (typeof bands !== 'undefined') ? bands : 5;
    var value = resistorNotation.decode(data[0]);
    var tolerance = data[1];
    var tmp = value * 1000;
    var digits;
    if (bands === 4) {
        digits = tmp.toString().split('').slice(0, 2)
    } else if (bands === 5) {
        digits = tmp.toString().split('').slice(0, 3)
    }
    var exp = utils.getExponentialFor10(value / (digits.join('')));
    var colors = [];
    for (var i = 0; i < digits.length; i++) {
        colors.push(maps.getColorFromValue(digits[i]))
    }
    colors.push(maps.getColorFromValue(exp));
    colors.push(maps.getColorFromTolerance(tolerance));
    return colors;
}
exports.encode = encode;