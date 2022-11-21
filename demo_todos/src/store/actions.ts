// actions的目的是调用mutations。

import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_TODO_DOING} from "./actionTypes";

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    // [SET_TODO](){}定义action函数SET_TODO。[SET_TODO]将变量SET_TODO转化为它对应的字符串SET_TODO。
    //action(ctx, value)：action方法有两个参数，ctx包含commit和state，value是视图派发action时传递过来的值。
    [SET_TODO]({commit}: ICtx,todo:ITodo): void {
        // 调用名为SET_TODO的mutation方法，并且把todo传给对应的mutation
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({commit}:ICtx, todoList: ITodo[]):void {
        commit(SET_TODO_LIST, todoList)
    },
    [REMOVE_TODO]({commit}:ICtx, id: number): void {
        commit(REMOVE_TODO, id)
    },
    [SET_TODO_STATUS]({commit}:ICtx, id: number): void {
        commit(SET_TODO_STATUS, id)
    },
    [SET_TODO_DOING]({commit}:ICtx, id: number): void {
        commit(SET_TODO_DOING, id)
    }

}
