// promisified version of setTimeout

function waitForSomeTime(resolve){
        setTimeout(resolve,5000)
}
function setTimeOutPromisified(){
    return new Promise(waitForSomeTime);
    // it returns the Promise object
}
function callback(){
    console.log("5 seconds have passed");  
}
setTimeOutPromisified().then(callback); // syntactically Cleaner - Promisified version of setTimeout

setTimeout(callback,5000) // callback based version