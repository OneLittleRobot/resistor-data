import {notationToValue, valueToNotation} from './resistor-notation';
import {getExponentialFor10} from './utils';
import {getColorFromTolerance, getValueFromColor, getToleranceFromColor, getColorFromValue} from './lookups';

export const bandsToNotation = (bands = []) => {

    if (!Array.isArray(bands)) {
        throw new TypeError('Expected an array');
    } else if (bands.length < 4 || bands.length > 5) {
        throw new Error('A resistor should have 4 or 5 bands');
    }

    const clone = bands.slice(0);
    const tolerance = getToleranceFromColor(clone.pop());
    const exp = getValueFromColor(clone.pop());

    const value = clone
        .reverse()
        .reduce((sum, current, currentIndex) => {
            return sum + (getValueFromColor(current) * Math.pow(10, currentIndex));
        }, 0) * (Math.pow(10, exp));

    return [valueToNotation(value), tolerance];
};

export const notationToBands = (data, bands = 5) => {

    if (!Array.isArray(data)) {
        throw new TypeError('Expected an array');
    }

    const value = notationToValue(data[0]);
    const tolerance = data[1] || 1;
    const digits = (value * 1000)
        .toString()
        .split('')
        .slice(0, bands - 2);

    const exp = getExponentialFor10(value / (digits.join('')));

    return digits.map(getColorFromValue).concat([
        getColorFromValue(exp),
        getColorFromTolerance(tolerance)
    ]);
};
