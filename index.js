const randomSk = (arrOrString, valOrKeyIfObjectTrueForValFalForKeys) => {
  if (Array.isArray(arrOrString)) {
    let a = arrOrString.length;
    let randArr = Math.floor(Math.random() * a);
    return arrOrString[randArr];
  } else if (
    typeof arrOrString === "object" &&
    !Array.isArray(arrOrString) &&
    arrOrString !== null
  ) {
    if (valOrKeyIfObjectTrueForValFalForKeys) {
      let vals = Object.values(arrOrString);
      let randomVals = Math.floor(Math.random() * vals.length);
      return vals[randomVals];
    } else if (typeof arrOrString === "object") {
      const rObj = (i,r)=>{
        return Object.keys(i)+Object.values(r);
      };
      let keys = Array.from(Object.keys(arrOrString))
      let vals = Array.from(Object.values(arrOrString));
      return fvalkey = aKeysVal(rObj(keys,vals))
      const aKeysVal=(inp)=>{
        return Array.from(inp)
      }
    }
  } else if (typeof arrOrString === "string" && arrOrString != null) {
    let arrs = Array.from(arrOrString);
    return randomSk(arrs);
  } else if (typeof arrOrString === "number"){
    let sstr = String(arrOrString);
    let asstr = Array.from(sstr);
    return randomSk(asstr)
  }
};module.exports = randomSk;
