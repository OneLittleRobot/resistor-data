var notation = require('./lib/resistor-notation');
var bands = require('./lib/resistor-bands');

exports.bandsToNotation = bands.bandsToNotation;
exports.notationToBands = bands.notationToBands;

exports.notationToValue = notation.notationToValue;
exports.valueToNotation = notation.valueToNotation;
