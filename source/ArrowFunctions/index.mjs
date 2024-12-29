const getNumber = () => Math.floor(Math.random() * 10 + 1) // dynamic value
const number = 1 // static value

// play(getNumber)
// play(number)

const getFromPre = (pre) => pre + 10 // dynamic value
function setState(state) {
  let stateValue = {
    number: 0,
  }
  return () => {
    stateValue.number +=
      typeof state === `function` ? getFromPre(stateValue.number) : state
    return stateValue
  }
}

/**
 * const [numeber,setNumber] = React.useState(0)
    const number = 10
    setNumber((pre)=>{
      return pre + number
    })
 */

const staticNumber = setState(number)
const value1 = staticNumber()
console.log('value1 from static:', value1)
const value2 = staticNumber()
console.log('value2 from static:', value2)

const dynamicNumber = setState(getNumber())
const value3 = dynamicNumber()
console.log('values3 from dynamic:', value3)
const value4 = dynamicNumber()
console.log('values4 from dynamic:', value4)

const dynamicFromPreNumber = setState(getFromPre(12))
const value5 = dynamicFromPreNumber()
console.log('values5 from dynamic:', value5)
const value6 = dynamicFromPreNumber()
console.log('values6 from dynamic:', value6)
const value7 = dynamicFromPreNumber()
console.log('values6 from dynamic:', value7)
