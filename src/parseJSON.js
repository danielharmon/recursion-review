// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  //Value Function()
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

var charIndex = 0;
var nextChar = function (string , isWhiteSpace ) {
  charIndex++;
  var inValid = /\s/;
  if( isWhiteSpace) {

    if(string.charAt(charIndex) === inValid) {
      charIndex++;

    }
     return string.charAt(charIndex) ;
  }

}
  // charaIndex ++;
  // return json.charAt(charIndex);



  //Return value(json)


};
