// Q: Write code that

// 1. logs hi after 1 second
// 2. logs hello 3 seconds after step 1
// 3. logs hello there 5 seconds after step 2

// 1. Callback Approach
// It has Callback Hell problem, which is a situation where a function has a lot of nested callbacks,
//  making the code hard
// setTimeout(() => {
//     console.log('hi');
//     setTimeout(() => {
//     console.log('hello');
//     setTimeout(() => {
//     console.log('hello there');
//     },5000)
//     },3000)
// },1000)

// 2. Promise Approach

// function setTimeoutPromisified(time){
//     return new Promise(resolve => {
//         setTimeout(resolve,time)
//     })
// }

// setTimeoutPromisified(1000)
// .then(() => {
//     console.log('hi')
//     return setTimeoutPromisified(3000); // return another Promise. 
//     // so we are chaining multiple Promises
// }).then(() => {
//     console.log('hello');
//     return setTimeoutPromisified(5000); 
// }).then(() => console.log('hello there'));

// 3. Async/Await Approach
// The async and await syntax in JavaScript provides a way to write asynchronous code 
// that looks and behaves like synchronous code, making it easier to read and maintain. 
function setTimeoutPromisified(time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}
// It builds on top of Promises and allows you to avoid chaining 
// .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises. 
async function main(){
    await setTimeoutPromisified(1000);
    console.log('hi');
    await setTimeoutPromisified(3000);
    console.log('hello');
    await setTimeoutPromisified(5000);
    console.log('hello there'); 
}
main();
console.log('after main');
