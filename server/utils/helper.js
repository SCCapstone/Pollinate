exports.prepareValuesForDatabase = function(obj) {
  let ret = {};
  for (let key in obj) {
    if (obj[key])
      ret[key] = obj[key]
  }
  return ret;
};

exports.round = function(value, decimals) {
  return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
};
