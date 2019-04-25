exports.round = function(value, decimals) {
  return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
};

exports.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.enforceMaxLength = (cm, change) => {
    const maxLength = cm.getOption("maxLength");
    if (maxLength && change.update) {
        let str = change.text.join("\n");
        let delta = str.length-(cm.indexFromPos(change.to) - cm.indexFromPos(change.from));
        if (delta <= 0) { return true; }
        delta = cm.getValue().length+delta-maxLength;
        if (delta > 0) {
            str = str.substr(0, str.length-delta);
            change.update(change.from, change.to, str.split("\n"));
        }
    }
    return true;
};
