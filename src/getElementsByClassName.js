var getChildrenByClassName = function(elements, targetClassName, returnResult) {
  _.forEach(elements, function(elem) {
    if (elem.classList !== undefined) {
      if (elem.classList.contains(targetClassName)) {
        returnResult.push(elem);
      }
    }
    if (elem.hasChildNodes()) {
      getChildrenByClassName(elem.childNodes, targetClassName, returnResult);
    }


    // if (elem.children.length !== undefined) {
    //   if (elem.children.length > 0) {
    //     getChildrenByClassName(elem.childNodes, targetClassName, returnResult);
    //   }
    // }
  });
};

var getElementsByClassName = function(className
) {
  var result = [];

  if (document.body.classList.contains(className)) {
    result.push(document.body);
  }
  getChildrenByClassName(document.body.childNodes, className, result);
  return result;
};