'use strict'

// 严格模式下 this 指向的是undefined
// 非严格模式下 this 指向的是 global 对象或者 window对象
function Person() {
  console.log(`-this`, this)
}

function Human() {
  console.log(`--this`, this)
}

console.log(Person())
