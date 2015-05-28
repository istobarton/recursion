// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringy = "";
  var inputType = typeof(obj);
  if(inputType==="object"){
  	if(Array.isArray(obj)){
  		stringy = stringy + "[";
  		var length = obj.length;
  		if(length>0){
	  		for(var i=0; i<length; i++){
	  			if(typeof(obj[i])==="undefined" || typeof(obj[i])==="function"){
            stringy = stringy
	  			}else if(i===length-1){
					  stringy = stringy + stringifyJSON(obj[i]) + "]";
				  }else{
					  stringy = stringy + stringifyJSON(obj[i]) + ",";
				  }
  			}
  		}
  		else{stringy = stringy + "]"}
  	}
   	else if(obj===null){
   		stringy = stringy + "null";
 	  }
   	else{
   		stringy = stringy + "{";
   		keyLength = Object.keys(obj).length
   		for(var key in obj){
   			if(typeof(key)==="undefined" || typeof(obj[key])==="undefined"){stringy = stringy}
   			else if(typeof(key)==="function" || typeof(obj[key])==="function"){stringy = stringy}
   			else if(keyLength>1){
   				stringy = stringy + stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
   				keyLength--
        }else{
   				stringy = stringy + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
   			}
   		}
   		stringy = stringy + "}"
   	}
  }
  else if(inputType==="string"){
  	stringy = stringy + '"' + obj + '"';
  }
  else if(inputType==="number" || inputType==="boolean"){
  	stringMe = (obj).toString();
  	stringy = stringy + stringMe.toString();
  }
  return stringy;
};
