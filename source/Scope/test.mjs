import { play } from '../../playground/tools.mjs'
// ES 模块自动启用严格模式，无需显式声明 'use strict'。

if (Math.random() > 0.5) {
  var x = 10
} else {
  var x = 20
}

console.log(x) // 10 或者 20 因为var定义的变量会被提升到全局作用域(函数中就是函数作用域)，但是赋值不会

if (Math.random() > 0.5) {
  let y = 10
} else {
  let y = 20
}

// console.log(y) // ReferenceError: y is not defined

function getName() {
  if (Math.random() > 0.5) var x = 10
  else var x = 12
  console.log('x:', x, 'this:', this)

  // this.toString = function () {
  //   return `getName() => x:${x}`
  // }
}
play(getName)
