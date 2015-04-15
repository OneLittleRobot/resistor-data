var utils = require('./utils');
var colorToValueMap = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
    'gold': -1,
    'silver': -2
};
var colorToTolerance = {
    'brown': 1,
    'red': 2,
    'yellow': 5,
    'green': 0.5,
    'blue': 0.25,
    'violet': 0.1,
    'grey': 0.05,
    'gold': 5,
    'silver': 10,
    'none': 20
};
var expToSymbolMap = {
    6: 'm',
    3: 'k',
    0: '',
}
var symbolPowerToMap = {
    'm': Math.pow(10, 6),
    'k': Math.pow(10, 3),
    'r': Math.pow(10, 0)
};
var valueToColourMap = utils.makeReverseMap(colorToValueMap)
var toleranceToColourMap = utils.makeReverseMap(colorToTolerance)
exports.getToleranceFromColor = function getToleranceFromColor(color) {
    return colorToTolerance[color];
}
exports.getColorFromTolerance = function getColorFromTolerance(tolerance) {
    return toleranceToColourMap[tolerance];
}
exports.getColorFromValue = function getColorFromValue(value) {
    return valueToColourMap[value];
}
exports.getValueFromColor = function getValueFromColor(color) {
    return colorToValueMap[color];
}
exports.getSymbolFromExp = function getSymbolFromExp(exp) {
    return expToSymbolMap[exp];
}
exports.getPowerFromSymbol = function getPowerFromSymbol(symbol) {
    return symbolPowerToMap[symbol.toLowerCase()];
}