
function getCollection(name){
    
    var collection = `
import { Mongo } from 'meteor/mongo';

export  const ${name}Mongo = new Mongo.Collection('${name}');
    `  
    return collection
}

module.exports = getCollection


