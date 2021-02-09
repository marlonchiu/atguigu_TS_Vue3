# 2. 其他新的 API

## 全新的全局 API

- createApp()
- defineProperty()
- defineAsyncComponent()
- nextTick()

## 将原来的全局 API 转移到应用对象

- app.component()
- app.config()
- app.directive()
- app.mount()
- app.unmount()
- app.use()

## 模板语法变化

- v-model 的本质变化
  - prop：value -> modelValue；
  - event：input -> update:modelValue；
- .sync 修改符已移除, 由 v-model 代替
  - `<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />`
- v-if 优先 v-for 解析
