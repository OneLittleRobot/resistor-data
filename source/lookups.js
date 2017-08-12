import {makeReverseMap} from './utils';

const colorToValueMap = {
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

const colorToTolerance = {
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
const expToSymbolMap = {
    6: 'm',
    3: 'k',
    0: '',
};
const symbolPowerToMap = {
    'm': Math.pow(10, 6),
    'k': Math.pow(10, 3),
    'r': Math.pow(10, 0),
};
const valueToColourMap = makeReverseMap(colorToValueMap);
const toleranceToColourMap = makeReverseMap(colorToTolerance);

export function getToleranceFromColor(color) {
    return colorToTolerance[color];
}

export function getColorFromTolerance(tolerance) {
    return toleranceToColourMap[tolerance];
}

export function getColorFromValue(value) {
    return valueToColourMap[value];
}

export function getValueFromColor(color) {
    const value = colorToValueMap[color];
    if (typeof value === 'undefined') {
        throw new Error(`Invalid colour ${color}`);
    }
    return value;
}

export function getSymbolFromExp(exp) {
    return expToSymbolMap[exp];
}

export function getPowerFromSymbol(symbol) {
    const value = symbolPowerToMap[symbol.toLowerCase()];
    if (typeof value === 'undefined') {
        throw new Error(`Invalid symbol ${symbol}`);
    }
    return value;
}
