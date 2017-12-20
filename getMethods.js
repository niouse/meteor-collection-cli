function getMethods(name){
    
    var Methods = `
import {${name}Mongo} from "./../${name}.js";

Meteor.methods({
	get${name}Keys : function(){
		var ${name}Keys = [];
		for (var key in ${name}Mongo.findOne({})){
			${name}Keys.push(key)
		};
		return ${name}Keys;
	}
})
    `  
    return Methods
}

module.exports = getMethods