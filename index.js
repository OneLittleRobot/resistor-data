var notation = require('./lib/resistor-notation');
var bands = require('./lib/resistor-bands');

exports.bandsToNotation = bands.decode;
exports.notationToBands = bands.encode;

exports.notationToValue = notation.decode;
exports.valueToNotation = notation.encode;
