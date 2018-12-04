exports.prepareValuesForDatabase = function(obj) {
  let ret = {};
  for (let key in obj) {
    if (obj[key])
      ret[key] = obj[key]
  }
  return ret;
};
