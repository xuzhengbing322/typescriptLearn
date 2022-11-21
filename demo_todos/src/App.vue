<template>
<div class="wrapper">
  <todo-input />
  <todo-list :todoList = todoList />
</div>
</template>

<script lang="ts" setup>
import TodoInput from './components/TodoInput/TodoInput.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { useTodo } from './hooks'
import {computed, onMounted} from 'vue'
import { Store, useStore } from 'vuex'
import { ITodo } from './typings'

const {setTodoList} = useTodo()

const store: Store<any> = useStore()
// 将todoList通过computed变为响应式数据，才能props传递
let todoList = computed(() => store.state.list)

// 在整个页面挂载之后就立即调用本地存储中的todoList，并赋给store.state.list。
onMounted( () => {
  setTodoList()
})
</script>

<style>

</style>


