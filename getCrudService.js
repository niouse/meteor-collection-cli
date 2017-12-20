function getCrudService(name, majSingName){

    var crudService = `
import React, { Component } from 'react';
import {${name}Schema} from "./../${name}.schema.js";
import {${name}Mongo} from "./../${name}.js";

export const ${majSingName}sCrudService = (WrappedComponent)=>{
	
	var ${name}CrudContext = ${name}Schema.namedContext("${name}CrudOp")

	return class _${majSingName}sCrudService extends Component {

		constructor(props){
			super(props);
		}

		create${majSingName}(options , callback){
			${name}Schema.clean(options);
			if(${name}CrudContext.validate(options)){
				${name}Mongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+${name}CrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		read${majSingName}(options , callback){

		}
		
		update${majSingName}(id, options , callback){
			console.log(options)
			${name}Schema.clean(options);
			if(${name}CrudContext.validate(options)){
				${name}Mongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+${name}CrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		delete${majSingName}(id , callback){
			${name}Mongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					create${majSingName} = {this.create${majSingName}}
					read${majSingName} = {this.read${majSingName}}
					update${majSingName} = {this.update${majSingName}}
					delete${majSingName} = {this.delete${majSingName}}
				/>
			)
		}
	}
}
`  
    return crudService
}

module.exports = getCrudService