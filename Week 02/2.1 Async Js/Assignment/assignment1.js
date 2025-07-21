// create promisified version of setTimeout

function wait(duration){
    return new Promise((resolve) => {
        // Promises are generic. They don’t “do” anything on their own. 
        // When we create a new Promise instance with new Promise(), 
        // we also supply a function with the specific asynchronous work we want to do.
        // This can be anything: performing a network request, setting a timeout, whatever.
        setTimeout( () => resolve(),duration)
    })
}

const timeoutPromise = wait(5000);

timeoutPromise.then(() => {
    console.log('5 second later');  
});

// Normal setTimeout function is not promisified.

// setTimeout(() => console.log('5 second later'), 5000);
 
// Reference Article : https://www.joshwcomeau.com/javascript/promises/