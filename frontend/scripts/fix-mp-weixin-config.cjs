const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist', 'build', 'mp-weixin')
const privateConfigPath = path.join(distDir, 'project.private.config.json')

if (!fs.existsSync(privateConfigPath)) {
  console.warn('[fix-mp-weixin-config] project.private.config.json not found, skipped')
  process.exit(0)
}

const privateConfig = JSON.parse(fs.readFileSync(privateConfigPath, 'utf8'))
privateConfig.projectname = privateConfig.projectname || 'travel-uniapp'
privateConfig.condition = privateConfig.condition || {}
privateConfig.condition.miniprogram = {
  current: 0,
  list: [
    {
      id: 0,
      name: '首页',
      pathName: 'pages/home/index',
      query: '',
      scene: null
    }
  ]
}
privateConfig.setting = {
  ...privateConfig.setting,
  ignoreDevUnusedFiles: false
}

fs.writeFileSync(privateConfigPath, `${JSON.stringify(privateConfig, null, 2)}\n`)
console.log('[fix-mp-weixin-config] disabled ignoreDevUnusedFiles and set home as launch page')
