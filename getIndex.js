function getIndex(name){

    var index = `
import "./${name}.publications.js";
import "./${name}.methods.js";
import "./${name}.publications.js";
import "./${name}.permissions.js";
import "./../${name}.js";
    `  
    return index
}

module.exports = getIndex