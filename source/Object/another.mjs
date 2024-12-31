let admin = {
  id: 1,
  deptName: 'IT',

  get ThisFunc() {
    console.log('admin this =>', this)

    return 'hello world'
  },
  toString() {
    return this.id + ' ' + this.deptName
  },
}
admin.ThisFunc
