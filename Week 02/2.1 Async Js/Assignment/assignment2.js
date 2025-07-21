// create promisified version of fs.readFile
const { log } = require('console');
const fs = require('fs');
function promisifiedFsReadFile(filePath,encoding) {
    // return a promise which resolves after the file is read
    return new Promise((resolve, reject) => {
        // read the file from given file path and with given encoding
       fs.readFile(filePath,encoding,(err,data) => {
        // if file is read successfully , resolve the promise with data
        if(!err){
            resolve(data); // call back resolve function if there is no error
        } else {
            // if there is an error while reading the file, reject the promise with error
            reject(err);
        }
       }); 
    })
}

promisifiedFsReadFile('a.txt','utf-8')
.then((data) => console.log(data))
.catch((err) => console.log(err));


