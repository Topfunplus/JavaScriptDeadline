// 1. Global Scope
var globalVar = 'I am a global variable'

function globalScopeExample() {
  console.log(globalVar) // Accessible here
}

globalScopeExample()

// 2. Function Scope
function functionScopeExample() {
  var functionVar = 'I am a function variable'
  console.log(functionVar) // Accessible here
}

functionScopeExample()
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// 3. Block Scope (with let and const)
if (true) {
  let blockVar = 'I am a block variable'
  const blockConst = 'I am a block constant'
  console.log(blockVar) // Accessible here
  console.log(blockConst) // Accessible here
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

// 4. Lexical Scope (Closures)
function outerFunction() {
  var outerVar = 'I am an outer variable'

  function innerFunction() {
    console.log(outerVar) // Accessible here due to closure
  }

  return innerFunction
}

const closureExample = outerFunction()
closureExample() // Logs: I am an outer variable

// 5. Module Scope (ES6 Modules)
// In a module file (e.g., module.js):
export const moduleVar = 'I am a module variable'

// In another file (e.g., main.js):
// import { moduleVar } from './module.js';
// console.log(moduleVar); // Accessible here

// eval scope
// The scope of the eval function is the calling scope.
// The eval function can modify the variables in the calling scope.
var x = 10
eval('var x = 20;console.log(x)')
console.log(x) // 10
