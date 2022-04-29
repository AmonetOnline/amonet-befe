
export function removeEmpty(obj) {
    Object.keys(obj).forEach(function(key) {
      (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
      (obj[key] === '' || obj[key] === null) && delete obj[key]
    });
    return obj;
};