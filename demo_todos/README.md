项目开发；

项目知识点
# vuex
  - Vuex的工作流
    前言：在actionType中变量来管理字符串，并将变量作为action、mutation的函数名。
    首先，vue Components dispatch(派发) actions。
    然后，actions中对应的函数接收到派发内容，就 commit调用 mutation。
    然后，mutation中对应的函数接受到提交的内容，就 修改state中的内容。
    最后，vuex自动通过render方案，将state渲染到vue components视图。

  - 文件集合
    1、actionTypes action类型；  
    2、actions 调用mutation的方法； 
    3、mutations 更改state的方法；          
    4、state 中央数据管理池。 
    5、index  store的出口。 把actions、mutations、state统一到仓库里进行管理。
    编程思想，从vue components到actions到mutations，vuex都是通过事件调用来传递数据。因此，在actionType中用变量来管理字符串，然后把变量名当作函数名来使用，可以极大的优化代码。


# 组件划分
  编程思想，将项目组件化，可以极大的提高逻辑性和可维护性。组件一般按照功能划分。每个组件中可以包含若干个子组件。组件内包含属性和方法
  - components
    1、TodoInput -> 输入的组件
    2、TodoList -> 列表的组件
      - TodoItem -> 列表项
        1、完成或未完成的选择 checkbox
        2、删除该项     button
        3、正在做的确认按钮  button

# 项目流程
  1、完成TodoInput组件。完成根据用户输入的值生成todo，然后将todo放入vuex的store.state.list
  2、完成将list放入本地存储中。
  3、完成刷新页面后，读取本地存储中的list。app组件中
  4、渲染list中的todo
  5、完成item组件

# 项目思考
  1、报错 file xxx is not a module。使用defineComponent就不能使用setup。问题没有解决。
  2、组件的文件名就是组件在vue开发插件的名字。
  3、hooks的编程思想：todo有增删改查的操作，则创建一个管理函数来管理这些操作函数。通过把这些方法抽离出来，当需要使用这些操作函数的时候再调用管理函数，来解析出操作函数。这样可以是程序更利于维护，编程逻辑也更清晰。需要写进hooks的情况：1、某个变量具有多个操作函数。
  4、设计数据的思路：todo是树形结构，且属性各不相同，因此用对象来存储todo。多个todo又构成了树形结构，且todo结构都相同，因此用数组来存储这些todo。todo的属性设计：1、id：每个todo都有自己特有的id，以便增删改查时，准确找到想要的todo。如果数据生成时间不确定，则id由时间戳生成。如果数据预先设计好了，则id可由自定义符号生成。2、context：每个数据都有自己的内容。3、status/active：设置数据的状态值或者布尔值。
  5、typescript数据类型的编程思想：由于所有的数据都需要定义数据类型，所以多处都要用到的数据就需要重复声明数据类型。对于object基本数据类型的数据，重复声明就很麻烦，因此将数据类型抽离到独立文件中，并暴露出去。用到数据时，就引用文件。
  6、对象的类型一般用type或interface定义。interface具有extends功能，扩展性好，因此对象的定义一般都使用interface。
  7、枚举的思想是通过变量来管理字符串。这样在使用时，直接通过点方法调用枚举的属性，即可获得相应的字符串。避免维护字符串。
    枚举的书法：枚举的名称和属性全都大写。
    枚举的使用情况：当变量仅有几个固定的值时，就使用枚举来定义变量。例如，状态变量，布尔变量。
  8、state.list.unshift(todo);  state.list = [todo, ...state.list] 两种书写方式都是向state.list中添加todo。第一种方式是给原list添加todo，但是watch不能检测到list的变化。第二种方式是将一个数组赋给list，watch可以检测到list的变化。
  9、vue不能自动将store中的数据设置为响应式数据，因此需要用computed计算，将其变为响应式数据。响应式数据才能够通过props传递。vue视图中用到的属性，必须是响应式的。即通过ref() reactive() computed() 将数据变为响应式。
  10、 todoList: Array<ITodo[]>, 在props中，需要用泛型明确todoList的类型
  11、枚举的名称好像就是数据类型。
  12、接口可以给里面所有的属性赋接口数据类型
  13、枚举是静态的数据，不需要用响应式。