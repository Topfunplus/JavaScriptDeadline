// the toString is called when we try to concatenate the object with a string

let user = {
  get Address() {
    // this point to the object itself

    // but when we try to concatenate the object with a string
    // the toString() will be called
    console.log(`toString() will be called :` + this)

    return `Bei Jing`
  },

  toString() {
    console.log(`toString() method has called`)
    return `--user string gen by toString()--`
  },
}

// console.log('Haha' + user)

console.log(user.Address)
