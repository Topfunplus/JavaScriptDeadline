let user = {
  name: 'John',
  surname: 'Smith',
  set fullName(value) {
    console.log('1 :' + value)
    console.log('3 :' + this) //this :[Jhon Smith]
    ;[this.name, this.surname] = value.split(' ')
    console.log('5 :' + this) //this :[Alice Cooper]
  },
  toString() {
    console.log('2 ' + this.name + ' ' + this.surname)
    return this.name + ' ' + this.surname
  },
}

// user.fullName = `Fucking Alice Cooper`

let admin = {
  __proto__: user,
}

admin.fullName = 'Alice Cooper'

// console.log(user)
// console.log('user.__proto__ = ', user.__proto__)
