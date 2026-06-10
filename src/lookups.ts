import type { ResistorColor, ResistorTolerance } from './types';
import { makeReverseMap } from './utils';

const colorToValueMap: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    gold: -1,
    silver: -2,
};

const colorToTolerance: Record<string, number> = {
    brown: 1,
    red: 2,
    yellow: 5,
    green: 0.5,
    blue: 0.25,
    violet: 0.1,
    grey: 0.05,
    gold: 5,
    silver: 10,
    none: 20,
};

const expToSymbolMap: Record<number, string> = {
    6: 'm',
    3: 'k',
    0: '',
};

const symbolPowerToMap: Record<string, number> = {
    m: Math.pow(10, 6),
    k: Math.pow(10, 3),
    r: Math.pow(10, 0),
};

const valueToColourMap = makeReverseMap(colorToValueMap);
const toleranceToColourMap = makeReverseMap(colorToTolerance);

export function getToleranceFromColor(color: string): ResistorTolerance {
    return colorToTolerance[color] as ResistorTolerance;
}

export function getColorFromTolerance(tolerance: number): ResistorColor {
    return toleranceToColourMap[tolerance] as ResistorColor;
}

export function getColorFromValue(value: number): ResistorColor {
    return valueToColourMap[value] as ResistorColor;
}

export function getValueFromColor(color: string): number {
    const value = colorToValueMap[color];
    if (typeof value === 'undefined') {
        throw new Error(`Invalid colour ${color}`);
    }
    return value;
}

export function getSymbolFromExp(exp: number): string {
    return expToSymbolMap[exp] ?? '';
}

export function getPowerFromSymbol(symbol: string): number {
    const value = symbolPowerToMap[symbol.toLowerCase()];
    if (typeof value === 'undefined') {
        throw new Error(`Invalid symbol ${symbol}`);
    }
    return value;
}
