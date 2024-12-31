console.log(`---process---`)

// console.log(process)
console.log(`电脑架构`, process.arch)
console.log(`平台信息`, process.platform)
console.log(`当前工作目录`, process.cwd())
console.log(`Node.js 版本`, process.version)
console.log(`Node.js 版本信息`, process.versions)
console.log(`Node.js 进程 ID`, process.pid)
console.log(`Node.js 进程标题`, process.title)
console.log(`Node.js 进程执行文件的绝对路径`, process.execPath)
console.log(`Node.js 进程的命令行参数`, process.argv)
console.log(`Node.js 进程的环境变量`, process.env)
console.log(`Node.js 进程的内存使用情况`, process.memoryUsage())
console.log(`Node.js 进程的高分辨率时间`, process.hrtime())
console.log(`Node.js 进程的配置信息`, process.config)
console.log(`Node.js 进程的退出码`, process.exitCode)
console.log(`Node.js 进程的信号事件`, process.emitWarning)

console.log(`---process.env---`)
// console.log(process.env) // 浏览器中报错 VM391:1 Uncaught ReferenceError: process is not defined

// console.log(process.env.ENV_NODE)
// console.log(process.env.PUBLIC_URL)
