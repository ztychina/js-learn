const p1 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve([1]);
    })
};
const p2 = function(){
    return new Promise((resolve, reject)=>{
        // resolve([1, 2]);
        reject([1, 2]);
    })
};
Promise.all([p1(), p2()])
    .then(res => {
        console.log(res);
    })
    .catch(res => {
        console.log(res);
    })
Promise.allSettled([p1(), p2()])
    .then(res => {
        console.log(res);
    })
    .then(res => {
        console.log('allSettled:', res);
    })
Promise.any([p1(), p2()])
    .then(res => {
        console.log(res);
    })
    .catch(res => {
        console.log(res);
    })
Promise.race([p1(), p2()])
    .then(res => {
        console.log("race:", res);
    })
    .catch(res => {
        console.log(res);
    })