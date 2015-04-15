'use strict';
var utils = require('./utils');
var maps = require('./maps');
var decode = function decode(resistorNotaionValue) {
    var value = resistorNotaionValue || 0;
    if (typeof value === 'string' && value.trim()) {
        var match = value.match(/[mkr]/i);
        var multiplier = 1;
        if (match) {
            match = match[0];
            multiplier = maps.getPowerFromSymbol(match);
        }
        var values = value.split(match);
        if (values.length > 1) {
            values[1] = '.' + values[1];
        }
        return values.join('') * multiplier;
    }
    return value;
};
exports.decode = decode;
var encode = function encode(value) {
    var exp = utils.roundToStandard(utils.getExponentialFor10(value));
    var multiplier = Math.pow(10, exp);
    var res = (value / multiplier);
    res = res.toString();
    if (res.indexOf('.') == '-1') {
        res = res + maps.getSymbolFromExp(exp);
    } else {
        res = res.split('.').join(maps.getSymbolFromExp(exp));
    }
    return res;
}
exports.encode = encode;