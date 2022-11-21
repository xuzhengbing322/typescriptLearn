/* 
    typescript的思想：给每一个数据都定义类型，同类型的数据才能相互赋值，从而提高数据的可维护性和安全性。
数据大致有：变量、函数参数、对象、数组、函数返回值。
    数据类型有八种：string、number、boolean、undefined、null、object、bigint、symbol。
按照数据结构来区分：1、线性结构（一对一）：string、number、boolean、undefined、null、bigint、symbol。
2、树形结构（一对多）：object。object包括对象和数组。

*/

let numberType: number = 19;
let stringType: string = "hello"
let booleanType: boolean = false

/*默认情况下，null和undefined是所有类型的子类型。也就是说，null和undefined可以赋值给其他任何类型。
但如果在tsconfig.json中指定了""strictNullChecks": true"，null和undefined只能复制给void和它们各自的类型。*/ 
let undefinedType: undefined = undefined
numberType = undefinedType
let nullType: null = null
stringType = nullType

// bigint数据类型是用来表示那些已经超出了number类型最大值(2^53-1)的整数值。语法就是在数字后面加n。bigint不能用于math对象中的方法。bigint不能和任何number实例混合运算，两个必须转换成同一种类型。
let bigintType: bigint = 100n;
let symbolType: symbol = Symbol("me")

/* 
    object是树形结构，其中包含多个属性。因此通过interface创建一个自定义数据类型，其中包含各个属性的数据类型。
interface具有extends，扩展性好。因此object的数据类型定义一般都用interface，而不是type。interface的自定义数据类型名由大写I开头。
    object数据类型赋值时，属性名和属性数据类型必须一一对应。如果属性可选，则后面加?，赋值时该属性可有可无。
    [propName:string]:any表示任意类型的属性。&和|也可以用来连接对象。
*/

// interface
interface IObjectType {
    name: string;
    age: number;
    job?: string;
    [propName: string]: any
}

let objectTypeThree: IObjectType = {
    name:'jake',
    age: 12,
    sex: 'man'
}

/*数组的基本数据类型也是object，它也是树形结构。数组的数据类型决定了数组元素的数据类型。
数组一般由同种类型的值组成。元组是由不同类型的值组成，且长度固定。
*/
let stringArray: string[] = ['a', "b", "c"]
let numberArray: Array<number> = [1, 2, 4]
let mintureTypeArrayOther: (number | string)[] = [1, 'b', 2, 'a']


interface objectEle {
    name: string,
    age: number
}
let arr3: objectEle[] = [{ name: 'jimmy', age: 22 }, { name: 'tom', age: 12 }]

// 元组
let tuple: [string, number, boolean?] = ['rues', 89, false]
tuple = ['tom', 12]
let otherTuple: [number, ...string[]] = [666, 'apple', "banana"]
let readonlyTuple: readonly [number, ...number[]] = [666, 888, 999]
// readonlyTuple[0] = 1 //无法分配到"0"，因为它是只读属性




//其他
// typeof：从类型上下文中获取变量或者属性的类型。
type Arr3 = typeof arr3
const newArr3: Arr3 = [{ name: 'rose', age: 5 }]

// keyof:该操作符可以用于获取某种类型的所有键，其返回类型是联合类型
type KeyofOne = keyof objectEle  //"name" | "age"
type KeyofTwo = keyof objectEle[]  // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type KeyThree = keyof {[x:string]:objectEle} // string | number




/*  any违背了typescipt的思想，除了特殊情况以外不使用。
    unknown是类型安全的any。任何类型的数据都可以赋值给unknown类型的数据，但unknown类型的数据只能赋给unknown。
如果unkonwn类型的数据被赋其他类型的值后，就必须缩小类型范围才能对它进行复制。缩小类型的方式：typeof、类型断言
*/
let unknownType: unknown = "tom"
let temporaryData: string
//temporaryData = unknownType  //unknow分配给类型string
if (typeof unknownType === "string") { //将unknow缩小到string
    temporaryData = unknownType
}

temporaryData = (unknownType as string)

// & 表示与，｜表示或。｜ 可以定义联合数据类型，该数据可以被复制多种数据类型的值。
let mixtureTypeVariate: boolean | string = "hello"
mixtureTypeVariate = true

let objectTypeOne: { name: string } & { age: number } = {
    name: 'monkey', age: 18
}
let objectTypeTwo: { name: string } | { age: number } = {
    name: 'snake'
}


//类型断言：告诉解析器变量的实际类型。语法；1、变量 as 类型。2、<类型>变量
unknownType = 32
let resOne: string = unknownType as string
let resTwo: string = <string>unknownType

// 非空断言。！可以用于断言操作对象是非null和非undefined类型。
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok
mayNullOrUndefinedOrString.toString(); // ts(2531)

// 确定赋值断言。允许在实例属性和变量声明后面放置一个！号，从而告诉ts该属性会被明确地赋值。
let variate!: number
let variateResult: number = 2 * variate





// 函数
/*  函数的参数和返回值都需要声明数据类型。返回值的数据类型通常是void、基本数据类型、自定义数据类型。
    可选参数后面不允许再出现必需参数。参数可以设置默认值默认参数。
*/
function sumTest(numOne: number, numTwo: number, numThree: number = 10, numFour?: number): number {
    return numOne + numTwo + numThree + numFour
}

// rest参数必须是数组类型。
function push(array: any[], ...items: any[]) {
    items.forEach((item) => {
        array.push(item);
    });
}
let a: string[] = [];
push(a, 1, 2, 3);



/*never类型表示永不存在的值。never类型可以相互赋值
如果一个函数执行时抛出了错误，那么这个函数永远不存在返回值。
函数中执行无限循环的代码，使得程序永远无法运行到函数返回值那一步，永不存在返回值。
*/
function neverTypeFun(): never {
    throw new Error("报错了！");
}

function otherNeverTypeFun(): never {
    while (true) { }
}


/*函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
给同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。
*/
type Combinable = string | number
function addFun(paramsA: Combinable, paramsB: Combinable) {
    if (typeof paramsA === "string" || typeof paramsB === "string") {
        return paramsA.toString() + paramsB.toString()
    }
    return paramsA + paramsB
}

const addFunResult = addFun("apple", "banana")
// addFunResult.split('') //类型"string|number"上不存在属性"split"。类型"number"上不存在属性"split"。

function addFunLoad(paramsA: number, paramsB: number): number
function addFunLoad(paramsA: string, paramsB: number): string
function addFunLoad(paramsA: string, paramsB: string): string
function addFunLoad(paramsA: number, paramsB: number): string
function addFunLoad(paramsA: Combinable, paramsB: Combinable) {
    if (typeof paramsA === "string" || typeof paramsB === "string") {
        return paramsA.toString() + paramsB.toString()
    }
    return paramsA + paramsB
}
// 根据参数类型确定函数返回值的类型为string
const addFunLoadResult = addFunLoad('apple', "banana")
addFunLoadResult.split('')







// enum 枚举：类似于公用对象的意思，使用枚举可以便捷的获取公用对象的属性值
enum Gender {
    Male = 0,
    Female = 1,
}
let human: { name: string, gender: Gender } = {
    name: 'toni',
    gender: Gender.Male//'male'
}



/*Number、String、Boolean、Symbol类型。number是基元，但Number是包装器对象。
Object代表所有拥有toString、hasOwnProperty方法的类型。所以所有原始类型、非原始类型都可以赋给Object。
{}和Object类型效果一样
*/
let NumberTypeVariate: Number
//numberTypeVariate = NumberTypeVariate //报错：不能将类型Number分配给类型number

let ObjectTypeVariate: Object
ObjectTypeVariate = 1
ObjectTypeVariate = 'a'
ObjectTypeVariate = false
ObjectTypeVariate = null
ObjectTypeVariate = undefined
ObjectTypeVariate = {}

// in:用来遍历枚举类型
type Keys = 'a'|'b'|'c'
type obj = {
    [p in Keys]:any
}       //{a:any,b:any,c:any}

// infer:在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
type ReturnTypeTwo<T> = T extends (
    ...args: any[]
  ) => infer R ? R : any;

// 索引类型：在对象中获取一些属性的值，然后建立对应的集合。
let person = {
    name: 'tom',
    age: 18
}

function getValues(person: any, keys: string[]) {
    return keys.map(key => person[key])
}

console.log(getValues(person, ['name', 'age'])) // ['tom', 18]
console.log(getValues(person, ['gender'])) // [undefined]



// vue3中的typescript
/*
const todoValue = ref<string>('')
*/ 

// vuex中的typescript
/*
const store: Store<any> = useStore();
*/ 