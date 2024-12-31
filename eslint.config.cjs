// eslint.config.js
module.exports = [
  {
    languageOptions: {
      globals: {
        // 这里定义全局变量，类似原来的 env 配置
        node: true, // 表示你使用 Node.js 环境
        // 明确告诉 ESLint 'console' 是一个全局变量
        console: 'readonly', // 设置为 'readonly' 表示它是只读的，不可以修改
        require: 'readonly', // 设置为 'readonly' 表示它是只读的，不可以修改
        module: 'readonly', // 设置为 'readonly' 表示它是只读的，不可以修改
      },
      parserOptions: {
        ecmaVersion: 2020, // 根据项目需求调整 ECMAScript 版本
        sourceType: 'module', // 使用模块系统
      },
    },
    rules: {
      'no-undef': 'error', // 禁止使用未定义的变量
      'no-unused-vars': 'warn', // 警告未使用的变量
    },
  },
  {
    // files: ['source/**/*.js', 'source/**/*.cjs', 'source/**/*.mjs'], // 指定 src 目录下的 JS 文件
    files: ['source/**/*.{js,cjs,mjs}'],
    rules: {
      'no-console': 'warn', // 对 src 目录下的 JS 文件警告使用 console
    },
  },
  {
    files: ['test/**/*.js'], // 对 test 目录下的 JS 文件使用不同规则
    env: {
      jest: true, // 启用 jest 环境（只适用于测试目录）
    },
    rules: {
      'no-unused-vars': 'off', // 禁用 no-unused-vars 规则
    },
  },
]
