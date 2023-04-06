console.log(1);
let promise = new Promise(((resolve, reject) => {
    resolve("4");
    console.log(2);
}))
promise.then((res)=>{
    console.log(res);
});
console.log(3);