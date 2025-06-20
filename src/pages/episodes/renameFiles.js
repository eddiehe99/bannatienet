const fs = require('fs')
const path = require('path')

// 获取当前脚本所在的目录，也就是 episodes 文件夹
const episodesFolder = __dirname

// 读取 episodes 文件夹中的所有文件
fs.readdir(episodesFolder, (err, files) => {
  if (err) {
    console.error('读取文件夹时出错:', err)
    return
  }

  // 过滤出 .mdx 文件
  const mdxFiles = files.filter(file => path.extname(file) === '.mdx')

  // 遍历每个 .mdx 文件进行重命名
  mdxFiles.forEach(file => {
    // 提取文件名中的数字部分
    const match = file.match(/^(\d+)\.mdx$/)
    if (match) {
      const number = match[1]
      const newFileName = `number-${number}.mdx`

      // 构建旧文件和新文件的完整路径
      const oldFilePath = path.join(episodesFolder, file)
      const newFilePath = path.join(episodesFolder, newFileName)

      // 重命名文件
      fs.rename(oldFilePath, newFilePath, err => {
        if (err) {
          console.error(`重命名 ${file} 时出错:`, err)
        } else {
          console.log(`已将 ${file} 重命名为 ${newFileName}`)
        }
      })
    }
  })
})
