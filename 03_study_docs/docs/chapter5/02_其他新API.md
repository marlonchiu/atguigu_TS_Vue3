# 2. 其他新的API
## 全新的全局API
- createApp()
- defineProperty()
- defineAsyncComponent()
- nextTick()

## 将原来的全局API转移到应用对象
- app.component()
- app.config()
- app.directive()
- app.mount()
- app.unmount()
- app.use()

## 模板语法变化
- v-model的本质变化
  - prop：value -> modelValue；
  - event：input -> update:modelValue；
- .sync修改符已移除, 由v-model代替
  - <ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />
- v-if优先v-for解析