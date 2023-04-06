async function fun1(){
    console.log(1);
    let res = await fun2();
    console.log(res);
    return 5;
}
fun1().then(res=>{
    console.log(res);
})
console.log(3);
async function fun2(){
    console.log(2);
    return 4;
}