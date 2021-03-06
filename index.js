#!/usr/bin/env node

var fs = require("fs");
var program = require('commander');
var getCollection = require('./src/getCollection');
var getDefaults = require('./src/getDefaults');
var getPublications = require('./src/getPublications');
var getPermissions = require('./src/getPermissions');
var getFixitures = require('./src/getFixitures');
var getMethods = require('./src/getMethods');
var getSchemas = require('./src/getSchemas');
var getIndex = require('./src/getIndex');
var getDataService = require('./src/getDataService');
var getOneDataService = require('./src/getOneDataService');
var getListDataService = require('./src/getListDataService');
var getCrudService = require('./src/getCrudService');

createCollection = function(name){
    
    console.log('Creating directories...');
    fs.mkdirSync(process.cwd()+`/${name}`);
    fs.mkdirSync(process.cwd()+`/${name}/client`);
    fs.mkdirSync(process.cwd()+`/${name}/server`);
    console.log('Creating server files...');
    fs.writeFileSync(process.cwd()+`/${name}/${name}.js`, getCollection(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.defaults.js`, getDefaults(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.publications.js`, getPublications(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.permissions.js`, getPermissions(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.fixitures.js`, getFixitures(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.methods.js`, getMethods(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/${name}.schemas.js`, getSchemas(name));
    fs.writeFileSync(process.cwd()+`/${name}/server/index.js`, getIndex(name));
	console.log('Creating client files...');
	fs.writeFileSync(process.cwd()+`/${name}/client/${name}.data.service.jsx`, getDataService(singular(name), maj(singular(name))));
    fs.writeFileSync(process.cwd()+`/${name}/client/${name}.one-data.service.jsx`, getOneDataService(singular(name), maj(singular(name))));
    fs.writeFileSync(process.cwd()+`/${name}/client/${name}.list-data.service.jsx`, getListDataService(singular(name), maj(singular(name))));
	fs.writeFileSync(process.cwd()+`/${name}/client/${name}.crud.service.jsx`, getCrudService(name, maj(singular(name))));
}

program
    .arguments('<collectionName>')
    .action (function(collectionName){
    name = collectionName
});

program.parse(process.argv)


if(typeof(name)==='undefined'){
    var err = new Error
    err.message='The collection must have a name'
    throw err
    process.exit(1)
}

function singular(name){
	return name.slice(0, -1);
}

function maj(name){
	return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log('the collection will be named', name)

createCollection(name)