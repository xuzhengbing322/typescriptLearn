import { IState, ITodo, TODO_STATUS } from "@/typings"

export default <IState>{
    /*用todoLIst.value生成ITodo类型的todo。然后通过actionType派发一个action，再去调用mutations更改state中的list.
    */ 
    list: []
}