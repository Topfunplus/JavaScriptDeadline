'use strict'

let cat = {
  getThis() {
    console.log(this)
  },
}

// cat.getThis()

function Cat() {
  // 虽然函数本身是对象，但 this 关键字在函数内部指的是函数执行时的上下文，而不是函数对象本身。
  // this 的值取决于函数是如何被调用的，而不是函数的类型。
  console.log(this)
}

// Cat()

let Dog = new Function(`Dog`, `console.log(this)`)
console.log(Dog()) // Global
