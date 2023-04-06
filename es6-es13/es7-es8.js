// Array.prototype.includes()
let arr1 = ['react', 'angular', 'vue'];
if(arr1.includes('react')){
    console.log('arr1存在react');
}

// 指数操作符
console.log(Math.pow(3, 4));
console.log(3 ** 4);

// Object.__
const obj1 = {a: 1, b: 2, c: 3};
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(Object.keys(obj1));

// String padding：String.prototype.padStart、String.prototype.padEnd
console.log('0.0'.padStart(4,'10')) //10.0
console.log('0.0'.padStart(20, '0'))// 000000000000000000.0
console.log('0.0'.padStart(20, '01'))// 0010101010101010100.0
console.log('0.0'.padEnd(4,'0')) //0.00
console.log('0.0'.padEnd(4,'10')) //0.01
console.log('0.0'.padEnd(10,'0'))//0.00000000

// Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(obj1));

// SharedArrayBuffer 对象
console.log(new SharedArrayBuffer(10));


// 对象属性的性质 ==========================================================================================
let person = {}
Object.defineProperty(person,'name',{
    configurable:false,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
    enumerable:false,//对象属性是否可通过for-in循环，false为不可循环，默认值为true
    writable:false,//对象属性是否可修改,false为不可修改，默认值为true
    value:'xiaoming' //对象属性的默认值，默认值为undefined
});

//value
console.log(person); // xiaoming，默认value

//writable
// person.name="qiang"; // error

//enumerable
for(let index in person){
    console.log(person[index]) //无结果，不可循环
}

//configurable
// delete person.name; // error

Object.defineProperty(person,'name',{
    configurable:true //不可修改，将抛出错误
});
