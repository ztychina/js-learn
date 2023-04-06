Promise.resolve("foo").then(res=>{
    console.log(res);
    return res;
}).then((res)=>{
    console.log(res);
}).then((res)=>{
    console.log(res);
}).then((res)=>{
    console.log(res);
}).then((res)=>{
    console.log(res);
})

function * fun1(){
    yield "hello";
    yield "world";
}
let f = fun1()
console.log(f.next().value);
console.log(f.next().value);

/* async
   函数返回值是promise对象
   1.如果返回值是非promise类型的数据
   2.如果返回值是promise类型的数据
*/
async function fun2(){
    return 123;
}
console.log("fun2():", fun2());
async function fun3(){
    return new Promise((resolve, reject) => {
        resolve("OK");
        // reject("Error");
    });
}
console.log('fun3():', fun3());

async function fun4(){
    let p = new Promise((resolve, reject) => {
        resolve("OK");
        // reject("Error");
    })
    let res = await p;
    console.log("await", res);
    let res2 = await 12;
    console.log("await2", res2);
}
fun4()

/*
    async 和 await 结合
*/
async function fun5(){
    try {
        let a1 = await 1;
        let a2 = await 2;
        let a3 = await 3;
        console.log("async 和 await 结合: ", a1+a2+a3);
    }catch (e){
        console.log(e.code);
    }
}
fun5();

// dice 骰子案例
function dice(){
    return new Promise((resolve, reject)=>{

        let dice_n = parseInt(Math.random()*10)+1;
        setTimeout(() => {
            resolve(dice_n);
        }, 3000);
    })
}
async function dice_run(){
    let cur_dice_num = await dice();
    console.log("骰子数是: ", cur_dice_num);
}
dice_run();

function fun6(){
    return 100;
}
(async function(){
    let res = await fun6();
    console.log("fun6():", res);
})();

(async function(){
    let null_promise = new Promise(()=>{});
    let res = await null_promise;
    console.log("null_promise:", res);
    console.log("success");
})();

(async function(){
    let num = new Promise((resolve, reject) => {
        reject(100);
    });
    try{
        let res = await num;
        console.log("reject", res);
    }catch (e) {
        console.log("error:", e);
    }
})();

