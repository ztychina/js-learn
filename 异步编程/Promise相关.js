function fn1(){
    return new Promise((resolve, reject)=>{
        console.log(123);
        // resolve("resolve");
        // resolve("resolve");
        reject("reject");
        reject("reject");
    })
}
fn1()
.then(function(data){
    console.log("then1");
    return data+1;
})
.then(
    function(data){
        console.log(data);
    },
    function(error){
        console.log(error);
        return data+2;
    }
)
.catch(function(error){
    console.log(data+'-1');
    return error
})
.catch(function(error){
    console.log(error+'-1');
    return error
})

setTimeout(()=>{console.log(213)}, 0);
async function fun3(){
    let res = await 3;
    console.log("内部res", res);
    return res;
}
console.log(fun3());