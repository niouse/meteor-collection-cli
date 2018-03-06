function getPublications(name){
    
    var publications = `
import {${name}Mongo} from "./../${name}.js";


Meteor.publish("${name}", function() {
	return  ${name}Mongo.find({});
});

Meteor.publish("${name}List", function() {
	return  ${name}Mongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("one${name}", function(${name}Id) { 
	return  ${name}Mongo.find({_id : ${name}Id});
});
    `  
    return publications
}

module.exports = getPublications