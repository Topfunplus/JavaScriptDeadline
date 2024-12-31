'use strict'

var __webpack_module_cache__ = {}
var __webpack_modules__ = {
  1: function (__module__, exports, __webpack_require__) {
    console.log('module 1', __module__, exports, __webpack_require__)

    // 模拟一个模块的加载函数
    __module__.exports = 'Hello from module 1'
  },
}
function __webpack_require__(moduleId) {
  // 从缓存中获取模块
  var cachedModule = __webpack_module_cache__[moduleId]
  // 如果缓存中的模块存在，直接返回
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }

  // 否则 先放入缓存
  var __module__ = (__webpack_module_cache__[moduleId] = {
    exports: {},
  })

  // 执行这个函数
  __webpack_modules__[moduleId](
    __module__,
    __module__.exports,
    __webpack_require__
  )
  return __module__.exports
}

console.log(__webpack_require__(1))
