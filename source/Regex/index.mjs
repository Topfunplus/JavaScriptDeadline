/**
 * 在 index.mjs 文件中定义了一个正则表达式 re。让我们逐步解释这个正则表达式的含义：

  正则表达式的定义：正则表达式是用来匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式是由两条斜杠 / 包围的字符序列。

  模式解释：

  a：匹配字符 'a'。
  b+：匹配一个或多个字符 'b'。+ 是一个量词，表示前面的字符（在这里是 'b'）至少出现一次。
  c：匹配字符 'c'。
  整体模式：因此，整个正则表达式 /ab+c/ 将匹配以 'a' 开头，后跟一个或多个 'b'，最后是一个 'c' 的字符串。

  例如，以下字符串将被匹配：

  "abc"
  "abbc"
  "abbbc"
  但以下字符串将不会被匹配：

  "ac"（缺少 'b'）
  "abb"（缺少 'c'）
  "aabbc"（'a' 后面有两个 'a'）
 */

var re = /ab+c/

console.log(re.test('abbbbc'))

// 这个正则表达式匹配多个abc字符串
var re2 = /(abc){3}/

console.log(re2.test('abcabcabcabc'))
console.log(re2.test('abc'))

// let _regex = /(.){3}/
// let __regex = /(.{3})\1{2}/
let ___regex = /^(.+)\1+$/
console.log('test:', ___regex.test('12312'))
