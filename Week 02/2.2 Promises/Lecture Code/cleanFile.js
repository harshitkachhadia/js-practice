// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

const fs = require('fs');

function cleanFile(filename){
    return new Promise((resolve, reject) => {
        // here resolve and reject are the callback functions , its called back
        // when the promise is resolved or rejected.
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                let trimmedData = data.trim();
                fs.writeFile(filename, trimmedData, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(trimmedData);
                    }
                })
            }
        })
    })
}

cleanFile('a.txt').then((data) => console.log('Success : ' + data));