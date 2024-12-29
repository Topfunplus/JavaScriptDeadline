import chalk from 'chalk'
const log = console.log
;(function () {
  log(chalk.rgb(4, 201, 53)('sucess::Tools module loaded...'))
})()

export function play(func) {
  if (typeof func !== 'function') {
    log(chalk.rgb(255, 0, 0)('error::play() expects a function as an argument'))
    throw new Error('play() expects a function as an argument')
  }
  log(chalk.rgb(4, 201, 53)('Playing...'))
  log(chalk.rgb(4, 201, 53)('success::play running result => ', func()))
}
