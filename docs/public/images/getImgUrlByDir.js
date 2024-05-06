const fs = require('fs')
const path = require('path')
const filePath = path.resolve('./licongpeng')
const list = []

fileDisplay(filePath)

function fileDisplay(filePath) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn('readdir', err)
    } else {
      files.forEach(function (filename) {
        const filedir = path.join(filePath, filename)
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            const isFile = stats.isFile() // 是文件
            // const isDir = stats.isDirectory() // 是文件夹
            if (isFile) {
              list.push({
                link: `\${location.origin}/blog/images/licongpeng/${filename}`,
              })
            }
          }
        })
      })
    }
  })
}

setTimeout(() => {
  fs.writeFileSync('srcList.json', JSON.stringify(list), 'utf8', function (err) {
    if (err) {
      console.log('写文件操作失败')
    } else {
      console.log('写文件操作成功')
    }
  })
}, 1000)
