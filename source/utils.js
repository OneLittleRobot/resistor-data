export const getExponentialFor10 = (value) => {
    const strValue = Math.abs(value).toString();
    if (strValue.includes('.')) {
        return -strValue.split('.')[1].length;
    } else {
        return strValue.length - 1;
    }
};

export const roundToStandard = (value) => {
    return Math.floor(value / 3) * 3;
};

export const makeReverseMap = (forwardMap) => {
    const reverseMap = {};
    for (const key in forwardMap) {
        if (forwardMap.hasOwnProperty(key)) {
            reverseMap[forwardMap[key]] = key;
        }
    }
    return reverseMap;
};