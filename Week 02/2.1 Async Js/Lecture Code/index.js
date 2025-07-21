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

// Callback hell Example :

// readFile("file.txt", "utf-8", function(err, data) {
//   if (!err) {
//     getUser(data, function(err, user) {
//       if (!err) {
//         getOrders(user.id, function(err, orders) {
//           if (!err) {
//             console.log("User Orders: ", orders);
//           }
//         });
//       }
//     });
//   }
// });
// This is hard to read, hard to debug, and gets worse if you keep adding more steps.


// With Promises, you can flatten the structure using .then().

// readFilePromise("file.txt", "utf-8")
//   .then(data => getUser(data))
//   .then(user => getOrders(user.id))
//   .then(orders => console.log("User Orders:", orders))
//   .catch(err => console.error("Error:", err));
