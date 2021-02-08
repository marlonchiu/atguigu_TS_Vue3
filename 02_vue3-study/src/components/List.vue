<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="`${index}__${todo.id}`" :todo="todo" :index="index" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  name: 'List',
  components: {
    Item
  },
  props: ['todos', 'deleteTodo', 'updateTodo']
})
</script>

<style scoped>
/*todo-main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
