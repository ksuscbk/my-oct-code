const abc = 5;
console.log(abc);


if (abc === 5) {
    let jq = 'const声明的也是块级元素';
    console.log(jq);
}

// console.log(jq); // jq is not defind
let [a, b, ...c] = [2, 3, 4 , 5, 6, 7, 8];
console.log(a, b, c);