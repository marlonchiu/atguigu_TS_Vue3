<template>
  <div class="todo-header">
    <input v-model="title" type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const title = ref('')

    const add = () => {
      const text = title.value
      if (!text.trim()) return
      const todo: Todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      }
      props.addTodo(todo)
      title.value = ''
    }
    return {
      title,
      add
    }
  }
})
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
