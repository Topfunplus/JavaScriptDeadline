// 全局作用域
const e = 10
function sum(a) {
  return function (b) {
    return function (c) {
      // 外部函数作用域
      return function (d) {
        // 局部作用域
        return a + b + c + d + e
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)) // 20

// 全局作用域
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // 外部函数作用域
//       return function sum4(d) {
//         // 局部作用域
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); // 20

function outer() {
  let getY
  {
    const y = 6
    getY = () => y
  }
  console.log(typeof y) // undefined
  console.log(getY()) // 6
}

outer()
