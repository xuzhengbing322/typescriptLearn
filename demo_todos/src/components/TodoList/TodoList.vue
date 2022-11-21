<template>
  <div>
      <todo-item 
      v-for="item of todoList"
      :key="item.id"
      :item='item'
      @removeTodo='removeTodo'
      @setStatus='setStatus'
      @setDoing='setDoing'
      />
  </div>
</template>

<script lang='ts' setup >
import TodoItem from './Item.vue'
import { ITodo } from "../../typings";
import { computed } from '@vue/runtime-core';
import { IUseTodo, useTodo } from '../../hooks';

// 接受app传过来的todoList
const props = defineProps<{
  // 需要通过泛型详细定义todoList的数组类型
  todoList: Array<ITodo[]>,
}>()

// 导入处理todo的方法
const {        
      removeTodo,
      setStatus,
      setDoing
    }:IUseTodo  = useTodo()





</script>

<style lang='less' scoped>
</style>