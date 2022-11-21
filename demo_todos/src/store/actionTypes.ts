/*
    actionTypes：中保存字符串，它被用作函数名。
    编程思想：用变量来管理字符串。这样既能避免维护字符串，也能在调用action方法时，直接用变量去调用所定义的函数就行。
    actionTypes：定义变量来管理字符串，这个变量就是函数名。
*/

 

export const SET_TODO: string = 'SET_TODO';
export const SET_TODO_LIST: string = 'SET_TODO_LIST';
export const REMOVE_TODO: string = 'REMOVE_TODO'
export const SET_TODO_STATUS: string = 'SET_TODO_STATUS'
export const SET_TODO_DOING: string = 'SET_TODO_DOING'