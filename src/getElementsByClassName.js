// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];
  var bodyOfDoc = document.body;

  var innerFunction = function(node) {

    // console.log(node.classList.contains(className));

    if (node.classList.contains(className)) {
      results.push(node);
    }
    // console.log(node);

    _.each(node.children, function (element) {
      if (element.nodeType === 1) {
        innerFunction(element);
      }
    });
  };


  innerFunction(bodyOfDoc);
  return results;

};
