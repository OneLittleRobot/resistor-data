import {roundToStandard, getExponentialFor10} from './utils';
import {getPowerFromSymbol, getSymbolFromExp} from './lookups';

const validRegex = /\d+\.?\d*\D?\d*/;
const matchRegex = /[\D]/i;

export const notationToValue = (notation = '') => {

    if (!validRegex.test(notation)) {
        throw new Error('Invalid string');
    }

    let value = notation;
    if (typeof notation === 'string' && notation.trim()) {
        let match = matchRegex.exec(notation) || ['r'];
        const symbol = match[0];
        const multiplier = getPowerFromSymbol(symbol);
        value = notation.split(symbol).join('.') * multiplier;
    }
    return parseInt(value, 10);
};

export const valueToNotation = (value) => {

    if (value === '' || isNaN(value)) {
        throw new Error('Invalid value');
    }

    const exp = roundToStandard(getExponentialFor10(value));
    const multiplier = Math.pow(10, exp);
    const res = (value / multiplier).toString();
    let notation;
    if (res.indexOf('.') == '-1') {
        notation = res + getSymbolFromExp(exp);
    } else {
        notation = res.split('.').join(getSymbolFromExp(exp));
    }
    return notation;
};
