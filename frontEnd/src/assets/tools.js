export const assignObj = (targetObj, inputObj) => {
  // Object.keys(targetObj).forEach(key => delete targetObj[key]);
  clearObj(targetObj);
  Object.keys(inputObj).forEach(key => targetObj[key] = inputObj[key]);
}

export const clearObj = (targetObj) => {
  Object.keys(targetObj).forEach(key => delete targetObj[key]);
}