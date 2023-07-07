//there are two types of moldules 1. core modules(built in ) ,2. non core modules(imported modules)
// in core module also there are two types 1 global , 2. local

console.log("hey , I am Kunal");
//console is a global module
let fs = require('fs');
fs.writeFileSync("doc.txt","fs is the example of local module")
// here we have created a new file 
let df = require('fs').writeFileSync;
df("newExample.txt","the is the example of how we can only call a singal functioon insted of the whole file system")
console.log(__dirname);
//this helps up to know directory of our file in our system
console.log(__filename);
// this returns the file name
