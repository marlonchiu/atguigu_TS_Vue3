<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{ backgroundColor: bgColor, color: myColor }">
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.title }}</span>
    </label>
    <button v-show="isShow" class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const { todo, index, deleteTodo, updateTodo } = props
    // 背景色
    const bgColor = ref('white')
    // 前景色
    const myColor = ref('black')
    // 设置按钮默认不显示
    const isShow = ref(false)

    const mouseHandler = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true
      } else {
        // 鼠标离开
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }

    const delTodo = () => {
      if (window.confirm('确定要删除吗?')) {
        deleteTodo(index)
      }
    }

    // 计算属性的方式---来让当前的复选框选中/不选中
    const isComplete = computed({
      get() {
        return todo.isCompleted
      },
      set(val) {
        updateTodo(todo, val)
      }
    })

    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      delTodo,
      isComplete
    }
  }
})
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
