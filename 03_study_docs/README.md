## 笔记
## 使用VuePress搭建github在线blog
- 创建一个远程仓库 xxx_ts_study
- 修改docs/.vuepress/config.js: base: '/xxx_ts_study/'
- 打包文档: npm run doc:build
- 将项目推送到github
  - git init
  - git add .
  - git commit -m "init"
  - git push origin master
- 发布文档: npm run doc:deploy
- 访问在线文档: https://24kcs.github.io/xxx_ts_study/ (可能要等待一定的时间)