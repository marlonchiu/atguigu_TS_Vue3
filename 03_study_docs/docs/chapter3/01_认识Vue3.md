# 1. 认识Vue3

## 1) 了解相关信息

- Vue.js 3.0 "One Piece" 正式版在今年9月份发布
- 2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
- <font color='red'>**Vue3支持vue2的大多数特性**</font>
- <font color='red'>**更好的支持Typescript**</font>



## 2) 性能提升:

- 打包大小减少41%
- 初次渲染快55%, 更新渲染快133%
- 内存减少54%
- <font color='red'>**使用Proxy代替defineProperty实现数据响应式**</font>
- <font color='red'>**重写虚拟DOM的实现和Tree-Shaking**</font>



## 3) 新增特性 

- <font color='red'>**Composition (组合) API**</font>
- setup
  - ref 和 reactive
  - computed 和 watch
  - 新的生命周期函数
  - provide与inject
  - ...

- 新组件

  - Fragment - 文档碎片
  - Teleport - 瞬移组件的位置
  - Suspense - 异步加载组件的loading界面

- 其它API更新

  - 全局API的修改
  - 将原来的全局API转移到应用对象
  - 模板语法变化
