'use strict'
const http = require('http')

console.log(http.STATUS_CODES[`200`])

if (process.arch !== 'x64' && process.platform !== 'linux') {
  throw new Error('环境变量不匹配')
}
let __params = process.version.split(`.`)[0]
let __version = __params.charAt(1) + __params.charAt(2)
console.log(`Your nodejs version is + ` + __version)

if (__version < 14) {
  throw new Error('Node.js 版本不匹配')
}
