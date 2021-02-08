# 使用VuePress搭建在线文档网站
## 0. 在线文档

  [VuePress官方在线文档](https://vuepress.vuejs.org/zh/)

## 1. 搭建基本环境

```bash
# 将 VuePress 作为一个本地依赖安装
npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个文件: docs/README.md
echo '# Hello VuePress!' > docs/README.md

# 启动文档项目
npx vuepress dev docs

# 构建静态文件
npx vuepress build docs
  |-- docs
    |-- .vuepress
      |-- config.js
    |-- README.md
```

## 2. 配置ts教程文档

1. 整体结构
  
```
|-- dist
|-- dics
  |-- .vuepress
    |-- public
      |-- ts-logo.png
    |-- config.js
  |-- chapter1
    |-- 01_初识TS.md
    |-- 02_安装TS.md
    |-- 03_HelloWorld.md
  |-- chapter2
    |-- 1_type.md
    |-- 2_interface.md
    |-- 3_class.md
    |-- 4_function.md
    |-- 5_generic.md
    |-- 6_other.md
  |-- chapter3
    |-- 01_react.md
    |-- 02_vue.md
  |-- chapter4
    |-- README.md
  |-- README.md
|-- package.json
```

1. docs/.vuepress/config.js  

```javacript
// 注意: base的值为github仓库的名称
module.exports = {
  base: '/ts-study/', /* 基础虚拟路径: */
  dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'TypeScript 入门', // 标题
  description: '学习使用 TypeScript', // 标题下的描述
  themeConfig: { // 主题配置
    sidebar: [ // 左侧导航
      {
        title: '初识 TypeScript', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/01_初识TS',
          'chapter1/02_安装TS',
          'chapter1/03_HelloWorld'
        ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          'chapter2/1_type',
          'chapter2/2_interface',
          'chapter2/3_class',
          'chapter2/4_function',
          'chapter2/5_generic',
        ]
      },
    ]
  }
}
```

3. docs/README.md

```bash
---
#首页
home: true  
# 图标
heroImage: /ts-logo.png
# 按钮文本
actionText: 开始学习 →
# 按钮点击跳转路径
actionLink: /chapter1/01_初识TS
---
```

4. package.json  

```json
"scripts": {
  "doc:dev": "vuepress dev docs",
  "doc:build": "vuepress build docs",
  "doc:deploy": "gh-pages -d docs/dist"
}
```

## 3. 发布到gitpage

1. 使用git管理当前项目  

2. 将打包的项目推送到gitpage
```bash
# 下载工具包
yarn add -D gh-pages
# 执行打包命令
yarn doc:build
# 执行部署命令
yarn doc:deploy
```