export const getExponentialFor10 = (value: number): number => {
    const strValue = Math.abs(value).toString();
    if (strValue.includes('.')) {
        return -strValue.split('.')[1].length;
    } else {
        return strValue.length - 1;
    }
};

export const roundToStandard = (value: number): number => {
    return Math.floor(value / 3) * 3;
};

export const makeReverseMap = (forwardMap: Record<string, string | number>): Record<string | number, string> => {
    const reverseMap: Record<string | number, string> = {};
    for (const key in forwardMap) {
        if (Object.prototype.hasOwnProperty.call(forwardMap, key)) {
            reverseMap[forwardMap[key]] = key;
        }
    }
    return reverseMap;
};
