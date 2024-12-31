'use strict'

function Person() {
  // 严格模式下，this指向的是undefined 只有在new的时候才会指向实例对象
  console.log(`this的值为:`, this)

  // new.target 用来检测函数是否被new调用
  // console.log(new.target)

  if (new.target) {
    // 非严格模式下，this指向的是global对象 这个操作就是给全局对象加了一个属性了 很危险
    this.toString = function () {
      console.log('this:', this)
      console.log(`toString() is called`)
      return `Join Smith`
    }
    this.handleGetName = function () {
      this.name = `zhang ming`
      this.age = `21`
      return `${this.name} is ${this.age} years old`
    }
  } else {
    return `Join Smith`
  }
}

// 作为构造函数使用
console.log('---------作为构造函数使用----------')

let person = new Person()
console.log(person.toString())
console.log(person + ' is a good')
console.log(person.handleGetName())

console.log('-------直接作为函数进行调用------------')

// 直接作为函数进行调用
console.log(Person())
