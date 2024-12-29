import chalk from 'chalk'
const log = console.log
;(function () {
  log(chalk.rgb(4, 201, 53)('success::Tools module loaded...'))
})()

export function play(func) {
  log(chalk.rgb(4, 201, 53)('Playing... type is => ', typeof func))
  if (typeof func === 'function') {
    log(chalk.rgb(4, 201, 53)('success::play running result => ', func()))
    return
  }

  if (typeof func === 'object') {
    log(chalk.rgb(4, 201, 53)('success::play running result => ', func))
    return
  }

  log(chalk.rgb(4, 201, 53)('success::play running result => ', func))
}

export function show(func) {
  log(chalk.rgb(4, 201, 53)('Showing...'))
  log(chalk.rgb(4, 201, 53)('success::show => \n'))
  if (typeof func === 'object') {
    const formattedData = Object.keys(func).map((key) => ({
      Method: key,
      Description: func[key]
        .toString()
        .replace(/\s+/g, ' ')
        .replace('{', '{ ...'),
      Example: `${key}()`,
    }))
    console.table(formattedData)
    return
  }

  log(chalk.rgb(4, 201, 53)('success::show =>', func))
  return
}
