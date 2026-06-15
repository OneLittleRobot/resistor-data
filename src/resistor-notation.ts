import { roundToStandard, getExponentialFor10 } from './utils';
import { getPowerFromSymbol, getSymbolFromExp } from './lookups';

const validRegex = /\d+\.?\d*\D?\d*/;
const matchRegex = /[\D]/i;

export const notationToValue = (notation = ''): number => {
    if (!validRegex.test(notation)) {
        throw new Error('Invalid string');
    }

    let value: number;
    if (typeof notation === 'string' && notation.trim()) {
        const match = matchRegex.exec(notation) ?? ['r'];
        const symbol = match[0];
        const multiplier = getPowerFromSymbol(symbol);
        value = Number(notation.split(symbol).join('.')) * multiplier;
    } else {
        value = Number(notation);
    }
    return parseInt(String(value), 10);
};

export const valueToNotation = (value: number | string): string => {
    if (value === '' || isNaN(Number(value))) {
        throw new Error('Invalid value');
    }

    const numValue = Number(value);
    const exp = roundToStandard(getExponentialFor10(numValue));
    const multiplier = Math.pow(10, exp);
    const res = (numValue / multiplier).toString();

    if (res.indexOf('.') === -1) {
        return res + getSymbolFromExp(exp);
    } else {
        return res.split('.').join(getSymbolFromExp(exp));
    }
};
