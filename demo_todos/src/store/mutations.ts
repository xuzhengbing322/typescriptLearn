import ItemVue from "@/components/TodoList/Item.vue";
import { IState, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_TODO_DOING} from "./actionTypes";

export default {
    // 定义函数SET_TODO，以便action commit调用。
    [SET_TODO](state: IState, todo: ITodo):void {
        // 向state的list添加todo数据。unshift只是给数组添加元素, watch监听不到store.state.list的改变。通过赋值的方式才能监听到改变。
        // state.list.unshift(todo);
        state.list = [todo, ...state.list]
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]):void {
        state.list = todoList
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id)
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.FINISHED : 
                        item.status = TODO_STATUS.WILLDO
                    break;
                    case TODO_STATUS.WILLDO : 
                    case TODO_STATUS.DOING :
                        item.status = TODO_STATUS.FINISHED
                    break;
                    default:
                        break;
                }
            }
            return item
        })
    },
    [SET_TODO_DOING](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id !== id) {
                if (item.status === TODO_STATUS.DOING) {
                    item.status = TODO_STATUS.WILLDO;
                }
            }else {
                item.status = item.status === TODO_STATUS.WILLDO
                    ? TODO_STATUS.DOING
                    : TODO_STATUS.WILLDO
            }
            return item
        })
    }


}