'use strict'

// 下面两个代码块 之所以不一样，是因为var定义的变量只会提升定义 不会提升赋值

// x = 10
// console.log(x) // 10
// var x

console.log(x) // undefined
var x = 10
