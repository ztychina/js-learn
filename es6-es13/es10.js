// Array.flat()和Array.flatMap()
let arr1 = [1, 2, 3, [4, 5]];
let arr2 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr1.flat());
console.log(arr2.flat());
console.log(arr2.flat(2));

// String.trimStart()和String.trimEnd()：去掉开头结尾空格文本
let str1 = ' Hello ES2019! ';
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

// String.prototype.matchAll

// Symbol.prototype.description
let symbol1 = Symbol('zty')
console.log(symbol1.description);

// Object.fromEntries()：返回一个给定对象自身可枚举属性的键值对数组
let arr3 = [[1, 2], [3, 4], [5, 6]];
console.log(Object.fromEntries(arr3));

// JSON Superset 超集

// JSON.stringify() 加强格式转化

// Array.prototype.sort() 更加稳定

// Function.prototype.toString() 重新修订
function foo(){
    console.log('foo');
}
console.log(foo.toString());