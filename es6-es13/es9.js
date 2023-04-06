// async+for
async function process1(array) {
    for (let i of array) {
        await doSomething(i);
    }
}

async function process2(array) {
    array.forEach(async i => {
        await doSomething(i);
    });
}

async function process3(array){
    for await(let i of array){
        doSomething(i);
    }
}

function doSomething(val){
    console.log(val);
}

// process1([1, 2, 3]);
// process2([4, 5, 6]);
// process3([7, 8, 9]);

// Rest/Spread 属性
const values = [99, 100, -1, 48, 16];
console.log(Math.max(values));
console.log(Math.max(...values));
console.log(Math.max(99, 100, -1, 48, 16));

// 正则
const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
match  = reDate.exec('2018-04-30'),
year   = match[1], // 2018
month  = match[2], // 04
day    = match[3]; // 30
console.log(year, month, day, match);
// 正则表达式dotAll模式
console.log(/hello.world/.test('hello\nworld'));  // false
console.log(/hello.world/s.test('hello\nworld')); // true

// 正则表达式 Unicode 转义
const reGreekSymbol = /\p{Script=Greek}/u;
console.log(reGreekSymbol.test('π')); // true
