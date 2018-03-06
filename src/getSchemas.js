function getSchemas(name){
    
    var schemas = `
export const ${name}Schema = new SimpleSchema({
  name: {
    type: String,
    label: "Task name",
    max: 20,
	min : 3
  },
  content: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
});
    `  
    return schemas
}

module.exports = getSchemas