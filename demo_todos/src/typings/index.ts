/*编程思想：由于所有的数据都需要定义数据类型，所以多处都要用到的数据就需要重复声明数据类型。对于object基本数据类型的数据，
重复声明就很麻烦，因此讲数据类型抽离到独立文件中，并暴露出去。用到数据时，就引用文件。
*/ 

// 设置todo数据的类型
interface ITodo {
    id: number;
    context: string;
    status: TODO_STATUS
}

/*设置status变量的类型
    枚举的思想是通过变量来管理字符串。这样在使用时，直接通过点方法调用枚举的属性，即可获得相应的字符串。避免维护字符串。
    枚举的书法：枚举的名称和属性全都大写。
    枚举的使用情况：当变量仅有几个固定的值时，就使用枚举来定义变量。例如，状态变量，布尔变量。
*/ 
enum TODO_STATUS {
    DOING = 'doing',
    WILLDO = 'willdo',
    FINISHED = 'finished'
}

// 设置state对象的类型
interface IState {
    list: ITodo[]
}

export {
    ITodo,
    TODO_STATUS,
    IState
}