/*hooks的编程思想：todo有增删改查的操作，则创建一个管理函数来管理这些操作函数。通过把这些方法抽离出来，当需要使用这些操作函数
的时候再调用管理函数，来解析出操作函数。这样可以是程序更利于维护，编程逻辑也更清晰。
需要写将hooks的情况：1、某个变量具有多个操作函数。
*/ 

import {watch} from 'vue'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_TODO_DOING } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings";
import { Store, useStore } from "vuex";

// useTodo的返回值是对象，因此用interface根据返回值创建类型。
export interface IUseTodo {
    setTodo: (value:string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void; 
    setDoing: (id: number) => void
}

interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList:ITodo[]) => void;
}

// useTodo函数管理todo的增删改查操作。
export function useTodo (): IUseTodo {

    const store: Store<any> = useStore();
    const {setLocalList, getLocalList}: IUseLocalStorage = useLocalStorage()
    const todoList: ITodo[] = getLocalList()

    // watch第一个参数是函数监听的改变的数据。第二个回调函数的参数就是发生改变的数据
    watch([store.state.list], (todoList) => {
        setLocalList(todoList)
    })

    // 根据用户输入的内容生成todo对象
    const setTodo = (value:string):void => {
        const todo: ITodo = {
            id: new Date().getTime(),
            context: value,
            status: TODO_STATUS.WILLDO
        }
        // 派发SET_TODO，将todo传给action中的SET_TODO
        store.dispatch(SET_TODO, todo)
        // 将store中的state的list存入本地存储中
        // setLocalList(store.state.list)
    }

    // 刷新网页后，list会置空。此时，将本地存储的数据取出来，放到store.state.list
    const setTodoList = () => {
        store.dispatch(SET_TODO_LIST, todoList)
    }
    // 删除todo
    const removeTodo = (id: number): void => {
        store.dispatch(REMOVE_TODO, id)
    }
    const setStatus = (id: number): void => {
        store.dispatch(SET_TODO_STATUS, id)
    }
    const setDoing = (id: number): void => {
        store.dispatch(SET_TODO_DOING, id)
    }


    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}


// 将list数组存放到本地存储中，以便网页刷新时从本地存储中获取数组
function useLocalStorage (): IUseLocalStorage {
    const getLocalList = ():ITodo[] => {
        // localStorage.getItem获取todoList对应的字符串值，如果没有就用空数组。JSON.parse将json字符串解析为json对象。
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    const setLocalList = (todoList:ITodo[]):void => {
        // JSON.stringify将对象解析为json字符串。
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return {
        getLocalList,
        setLocalList

    }
}