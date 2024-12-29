// function import returns a promise that resolves to the module namespace object of the module.
const module = () => import('../Scope/example.mjs')

console.log(module, typeof module)
module().then((res) => {
  console.log(res.default.fontWeight)
})
