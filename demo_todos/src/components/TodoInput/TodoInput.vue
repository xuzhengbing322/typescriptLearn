<template>
  <div>
    <input 
      type="text"
      v-model="todoValue"
      @keydown="setTodoValue"
    />
  </div>
</template>

<script lang='ts' setup >
import { ref } from "@vue/reactivity";
import {IUseTodo, useTodo} from '../../hooks/index'

const {setTodo}: IUseTodo = useTodo()

// 用户输入的值
const todoValue = ref<string>('')

// 敲下回车键，获取输入值，并清空todoValue的值
const setTodoValue = (event:KeyboardEvent):void => {
  if (event.keyCode === 13 && todoValue.value.trim().length ) {
    setTodo(todoValue.value)
    todoValue.value = ''
  }
}

</script>

<style lang='less' scoped>
</style>