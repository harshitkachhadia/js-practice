function random(resolve){ // resolve is also a function
    // resolve();
    setTimeout(resolve,5000)
}


let p = new Promise(random); // return promise


// using the eventual value returned by the promise 
function callback(){
    console.log("Promise Succeded");   
}
p.then(callback);

// Promise Class Example :

// class PromiseEx {
//     constructor(fn){
//         function afterCompletion(){
//             this.resolve();
//         }
//         fn(afterCompletion)
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }
