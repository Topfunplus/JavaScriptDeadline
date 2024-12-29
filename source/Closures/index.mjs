let playModule = await import('../../playground/tools.mjs')
let play = playModule.play

play(() => 1)
play(init()) // No Problem here because init() is top
play(add)

function init() {
  var name = 'Mozilla' // name is a local variable created by init
  return function displayName() {
    // displayName() is the inner function, that forms a closure
    // console.log(name) // use variable declared in the parent function
    return name
  }
}

function add() {
  var counter = 0
  function plus() {
    counter += 1
  }
  plus()
  return counter
}

function addNumber(originalNumber) {
  var count = originalNumber
  return function (number) {
    return count + number
  }
}

const add2 = addNumber(10)
const add10 = addNumber(10)

play(() => add2(2))
play(() => add10(10))

play(2)
