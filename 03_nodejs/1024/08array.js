// 当传入的参数只有一个n时，不会产生一个长度为n的数组   没有了歧义
var arr1 = Array.of(2, 3, 4, 5);
console.log(arr1);

var arr = ['a', 'b', 'c'];

arr.forEach(function (val, key) {
    console.log(key,val);
});

// 内部遍历了数组arr, 找到一个符合条件的即返回其值
var res = arr.find(function (val, key) {
    console.log(val,key);
    return val > 'a';
});
console.log(res);

// 内部遍历了数组arr,找到一个符合条件的即返回其索引
var res1 = arr.findIndex(function (val, key) {
    return val > 'a';
});
console.log(res1);