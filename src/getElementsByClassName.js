// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Must use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className){
  htmlArray = [];
  var dBody = document;
  var classSearcher = function(element){
  	var nodes = element.childNodes
  	var length = nodes.length
  	for(var i=0; i<length; i++){
  		var classist = nodes[i].classList;
  		if(classist!==undefined && classist.contains(className)){
  			htmlArray.push(nodes[i]);
  			}
  		if(nodes[i].hasChildNodes()){
  			classSearcher(nodes[i]);}
  	}
  }
  classSearcher(dBody);
  return htmlArray;
};
