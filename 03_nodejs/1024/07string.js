var str = 'my name is itcast';

// 是否以my开头   返回boolean
console.log(str.startsWith('my'));
// 是否以st结尾   返回boolean
console.log(str.endsWith('st'));
// 是否包含is   返回boolean
console.log(str.includes('is'));

var ha = '哈';
console.log(ha.repeat(5));


// 使用反引号定义字符串   可以解析变量
let is = '是';
let str1 = `my name ${is} iiiiiii`;
console.log(str1);