<template>
  <div class="todo-footer">
    <label>
      <input v-model="isCheckedAll" type="checkbox" />
    </label>
    <span>
      <span>已完成{{ count }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAllCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // todo ??? 直接解构出来 清除已完成 count total 不变化, 不是响应式了？？？
    const { todos, checkAll } = props

    const count = computed(() => {
      return todos.reduce((prev, todo) => {
        return prev + (todo.isCompleted ? 1 : 0)
      }, 0)
    })

    const total = computed(() => {
      return props.todos.length
    })

    // 全选/全不选的计算属性操作
    const isCheckedAll = computed({
      get() {
        return count.value > 0 && total.value === count.value
      },
      set(val) {
        props.checkAll(val)
      }
    })
    return {
      count,
      total,
      isCheckedAll
    }
  }
})
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
