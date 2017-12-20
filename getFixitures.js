function getFixitures(name){
    
    var fixitures = `
import {${name}Mongo} from "./../${name}.js";
import ${name}Defaults from "./${name}.defaults.js";


load${name} = function(){
	 if (${name}Mongo.find({}).fetch().length === 0) {
		 ${name}Defaults.forEach((item, index)=>{
	     	${name}Mongo.insert(${name}Defaults[index]); 
		 })
   }
}
    `  
    return fixitures
}

module.exports = getFixitures