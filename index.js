const randomSk = (arrOrString, valOrKeyIfObjectTrueForValFalForKeys) => {
    if (Array.isArray(arrOrString)) {
        let a = arrOrString.length;
        let randArr = Math.floor(Math.random() * a);
        return arrOrString[randArr];
    } else if (
        typeof arrOrString === 'object' &&
        !Array.isArray(arrOrString) &&
        arrOrString !== null
    ) {
        if (valOrKeyIfObjectTrueForValFalForKeys) {
            let vals = Object.values(arrOrString);
            let randomVals = Math.floor(Math.random() * vals.length);
            return vals[randomVals]
        }
        else {
            let keys = Object.keys(arrOrString);
            let randomKeys = Math.floor(Math.random()*keys.length);
            return keys[randomKeys];
        }
    }
};

module.exports = randomSk;

