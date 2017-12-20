function getPermissions(name){
    
    var Permissions = `
import {${name}Mongo} from "./../${name}.js";

${name}Mongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    `  
    return Permissions
}

module.exports = getPermissions


