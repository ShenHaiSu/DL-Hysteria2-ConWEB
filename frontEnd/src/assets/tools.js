export const assignObj = (targetObj, inputObj) => {
  // Object.keys(targetObj).forEach(key => delete targetObj[key]);
  clearObj(targetObj);
  Object.keys(inputObj).forEach(key => targetObj[key] = inputObj[key]);
}

export const clearObj = (targetObj) => {
  Object.keys(targetObj).forEach(key => delete targetObj[key]);
}

export const randomString = (length, pool = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM") => {
  let result = '';
  for (let i = 0; i < length; i++) result += pool[Math.floor(Math.random() * pool.length)];
  return result;
}