// Dog 是一个构造函数，同时也是一个普通的函数对象。你可以给这个函数对象添加静态方法或属性，或者使用它创建实例。
function Dog() {}

// 通过 Dog.a 来调用的 a() 方法是定义在 Dog 函数对象上的，也叫静态方法

// Dog.a 和 Dog.age 是静态属性和静态方法，它们直接附加在 Dog 上，并不参与实例的原型链。
// 每个构造函数都有一个与之相关联的 prototype 对象，它存储了实例可以访问的方法和属性。
Dog.a = function () {
  console.log('a')
}

Dog.a()

Dog.prototype.getName = function () {
  console.log('getName')
}
Dog.prototype.callName = function () {
  console.log('callName')
}

Dog.age = 18

console.log('Dog.prototype:', Dog.prototype) //  { getName: [Function (anonymous)] }

console.log(Dog.age)

// 通过 new Dog() 创建的实例对象会有一个 原型对象，它是从 Dog.prototype 继承的
let smallDog = new Dog()

// 通过 new Dog() 创建的实例对象会有一个 原型对象，它是从 Dog.prototype 继承的
console.log(smallDog.prototype) // 这个没有 只有构造函数才有prototype对象
console.log('new Dog().__proto__', smallDog.__proto__) // 这个有

// 不可以 因为a和age是绑定在函数构造函数对象上，不参与实例的原型链
console.log(smallDog.a)
console.log(smallDog.age)

// 可以
smallDog.getName()
smallDog.callName()
