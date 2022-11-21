<template>
  <div>
    <input 
      type="checkbox"
      :checked='item.status === statusState.FINISHED' 
      @click='setStatus(item.id)'
    />
    <span
      :class="item.status === statusState.FINISHED ? 'line-through' : '' "
    >
      {{item.context}}
    </span>
    <button
      @click="removeTodo(item.id)"
    >
      删除
    </button>
    <button
      v-if="item.status !== statusState.FINISHED"
      @click='setDoing(item.id)'
      :class="item.status === statusState.DOING ? 'doing' : 'willdo'"
    >
      {{item.status === statusState.DOING ? '正在做...' : '马上做'}}
    </button>
  </div>
</template>

<script lang='ts' setup >
import { PropType, toRefs } from '@vue/runtime-core'
import {ITodo, TODO_STATUS} from '../../typings'

// 枚举的名称好像就是数据类型
interface IStatusState {
  DOING : TODO_STATUS;
  FINISHED : TODO_STATUS;
  WILLDO : TODO_STATUS;
}

// 接受TodoList.vue传递过来的item
const props = defineProps<{
  item: object
}>()

// 枚举是静态的数据，不需要用响应式。如何不借助return实现对象属性的解构，toRefs期待响应式数据
const statusState = <IStatusState> {
  DOING : TODO_STATUS.DOING,
  FINISHED : TODO_STATUS.FINISHED,
  WILLDO : TODO_STATUS.WILLDO
}



// 获取自定义事件
const emit = defineEmits<{
  (e: 'removeTodo', id:number),
  (e: 'setStatus', id:number),
  (e: 'setDoing', id:number)
}>()

const removeTodo =  (id: number): void => {
  emit('removeTodo', id)
}

const setStatus = (id:number): void => {
  emit('setStatus', id)
}

const setDoing = (id:number): void => {
  emit('setDoing', id)
}



</script>

<style lang='less' scoped>
.line-through {
  text-decoration: line-through;
}

.doing {
  background-color: #ededed;
  color: #999;
}

.willdo {
  background-color: orange;
  color: #fff;
}

</style>