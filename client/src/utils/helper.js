exports.round = function(value, decimals) {
  return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
};

exports.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
