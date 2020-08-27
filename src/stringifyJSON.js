// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var quotes = '"';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null || obj === NaN || obj === Infinity) {
    return 'null';
  } else if (typeof(obj) === 'string') {
    return quotes + obj + quotes;
  } else if (Array.isArray(obj)) {
    var result = '[';
    _.forEach(obj, function(item) {
      result += stringifyJSON(item) + ',';
    });
    if (result.length > 2) {
      return result.slice(0, -1) + ']';
    } else { return result + ']'; }
  } else if (typeof(obj) === 'object') {
    var result = '{';
    var objectLength = Object.keys(obj).length - 1;
    var count = 0;
    for (let keys in obj) {
      if (typeof(obj[keys]) !== 'function' && obj[keys] !== undefined) {
        if (count < objectLength) {
          result += quotes + keys + quotes + ':' + stringifyJSON(obj[keys]) + ',';
        } else {
          result += quotes + keys + quotes + ':' + stringifyJSON(obj[keys]);
        }
        count++;
      }
    }
    return result + '}';
  } else if (typeof(obj) === 'function') {
    return '{}';
  }
};
