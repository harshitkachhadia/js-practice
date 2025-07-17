const { log } = require("console");
const fs = require("fs");

function cb(err,data){
   if(err) console.log("Error" + err);
   console.log("File Data: " + data); 
}

var a = fs.readFile("a.txt", "utf8",cb);// asynchronously
var b = fs.readFileSync("b.txt", "utf8");// synchronously
console.log(a); // It will print undefined because it is asynchronous (at this point of time it has not finishedN)
console.log(b); 

// how readFile function should look likes : 
// function readFile (filename, encoding, callback) {
//     read the file 
//     cb("Error Message","File Content");
// }