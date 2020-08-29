// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  var charIndex = -1;
  var nextChar = function (string, isWhiteSpace ) {
    charIndex++;
    var inValid = /\s/;
    if (isWhiteSpace) {
      if (string.charAt(charIndex) === inValid) {
        charIndex++;
      }
    }
    return string.charAt(charIndex);
  }
  //Value Function()
  var parseValue = function() {
    var startChar = nextChar(json);
    var startIndex = charIndex;
    var endIndex;
    //input is string
    if (startChar === '"') {
      endIndex = json.indexOf('"', charIndex + 1);
      return json.slice(startIndex, endIndex + 1);
    }
    //input is array
    //[1080.0009,2,3,4,"a","b","c","d"]
    if (startChar === "[") {
      var result = []
      if (nextChar(json, true) === "]") {
       return result;
      } else {
        return result.push(element());
      }
    }
    //input is Number
    if (startChar === /^-?\d*\.?\d*$/) {
      while (json.charAt[charIndex] === /^-?\d*\.?\d*$/) {
        nextChar(json);
      }
      return json.slice(startIndex, charIndex).toNumber();
    }
    //input is Object

    if (startChar === "{") {
      var result = {};
      if (nextChar(json, true) === "}") {
       return result;
      } else {
        return result = '{' + member() + '}';

      }
    }
    //output is value in correct format
  }
    //Identify type of next Character
      //if '"' then its a string
        //process the chararcters until we hit anotehr '"'
      //if digits
        //return digits
      //if {

        //call ojbect()
      //if [
        //call array
      //if  text === 'true'
        //return boolean true
      //if tesxt === 'false
        //return boolean false
      //if text === 'null'
        //return null




  //Object Function
    //have result variable = {}
    //if next char is something besides }
      // result varibale = {member}

    //return result
  //Member Function
    //var resultMember = pair()
    // if there is a , resultmember += ,+ call member
    //return  resultMemmber

  //Pair Function
    // return value() + : + value()

  // array function
    // var resultArray = []
    //if there is soemthing beside [, then
      //resultArray =  [elements()]
    // return resultArray

    // elements function
      //var resultElements = value()
      // if there is ','
        // resultElements += ',' + elements()
      //return resultElements;

// var charIndex = 0
// nextCharacter function

  };
// return json.charAt(charIndex);
// charaIndex ++;



  //Return value(json)


};
