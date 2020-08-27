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
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj) && obj.length > 0) {
    var result = '[';
    for (let i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        result += stringifyJSON(obj[i]);
      } else {
        result += stringifyJSON(obj[i]) + ',';
      }
    }
    return result + ']';
  } if (typeof(obj) === 'object') {
    var result = '{';
    var objectLength = Object.keys(obj).length - 1;
    var count = 0;
    for (let keys in obj) {
      if (count < objectLength) {
        result += quotes + keys + quotes + ':' + stringifyJSON(obj[keys]) + ',';
      } else {
        result += quotes + keys + quotes + ':' + stringifyJSON(obj[keys]);
      }
      count++;
    }
    return result + '}';
  }
};
