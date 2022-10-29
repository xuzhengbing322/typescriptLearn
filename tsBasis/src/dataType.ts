//基本数据类型
/*
    数据有八种基本类型：string、number、boolean、undefined、null、object、bigint、symbol。同种数据类型的数据才能相互赋值。
    bigint数据类型是用来表示那些已经超出了number类型最大值(2^53-1)的整数值。语法就是在数字后面加n。
bigint不能用于math对象中的方法。bigint不能和任何number实例混合运算，两个必须转换成同一种类型。
*/
let numberTypeVariate: number = 19;
let stringTypeVariate: string = "hello"
let booleanTypeVariate: boolean = false
let undefinedTypeVariate: undefined = undefined
let nullTypeVariate: null = null
let bigintTypeVariate: bigint = 100n;
let symbolTypeVariate: symbol = Symbol("me")

/* 
    object数据类型赋值时，属性名和属性数据类型必须一一对应。在属性名后面加上?，表示属性是可选的，赋值时该属性可有可无。
[propName:string]:any表示任意类型的属性。&和|也可以用来连接对象。
*/
let objectTypeVariate: {
    name: string,
    age: number,
    job?: string,
    [propName: string]: any
}
objectTypeVariate = { name: "tom", age: 18, shcool: "university", sex: "man" }

let objectTypeOne: { name: string } & { age: number } = {
    name: 'monkey', age: 18
}
let objectTypeTwo: { name: string } | { age: number } = {
    name: 'snake'
}

/*默认情况下，null和undefined是所有类型的子类型。也就是说，null和undefined可以赋值给其他任何类型。
但如果在tsconfig.json中指定了""strictNullChecks": true"，null和undefined只能复制给void和它们各自的类型。
*/
numberTypeVariate = null
stringTypeVariate = undefined

// 其他数据类型：（数组、）
//数组的类型声明：类型[]，Array<类型>。可以借助接口定义指定对象成员的数组。
let stringArray: string[] = ['a', "b", "c"]
let numberArray: Array<number> = [1, 2, 4]
let mintureTypeArrayOther: (number | string)[] = [1, 'b', 2, 'a']

interface Arrobj {
    name: string,
    age: number
}
let arr3: Arrobj[] = [{ name: 'jimmy', age: 22 }, { name: 'tom', age: 12 }]



//数组一般由同种类型的值组成。元组是由不同类型的值组成。元组（固定长度的数组）:[类型，类型，类型]。
let tuple: [string, number, boolean?] = ['rues', 89, false]
tuple = ['tom', 12]
let otherTuple: [number, ...string[]] = [666, 'apple', "banana"]
let readonlyTuple: readonly [number, ...number[]] = [666, 888, 999]
// readonlyTuple[0] = 1 //无法分配到"0"，因为它是只读属性

// typeof：从类型上下文中获取变量或者属性的类型。
type Arr3 = typeof arr3
const newArr3: Arr3 = [{ name: 'rose', age: 5 }]

// keyof:该操作符可以用于获取某种类型的所有键，其返回类型是联合类型
type KeyofOne = keyof Arrobj  //"name" | "age"
type KeyofTwo = keyof Arrobj[]  //// "length" | "toString" | "pop" | "push" | "concat" | "join" 
type KeyThree = keyof {[x:string]:Arrobj} //// string | number




/*any表示任何数据类型。变量设置为any类型后，相当于该变量关闭了ts类型检测。因此，不要使用any类型。
unknown是类型安全的any。区别是：unknown任何类型的值都可以赋给它，但它只能赋给unknown和any。而any可以和任何类型的数据相互赋值
如果不缩小类型，就无法对unknow类型执行任何操作。缩小类型的方式：typeof、类型断言
*/
let unknownTypeVariate: unknown = "tom"
let temporaryData: string
//temporaryData = unknownTypeVariate  //unknow分配给类型string
if (typeof unknownTypeVariate === "string") { //将unknow缩小到string
    temporaryData = unknownTypeVariate
}

temporaryData = (unknownTypeVariate as string)


//｜ 可以定义联合数据类型，该数据可以被复制多种数据类型的值。
let mixtureTypeVariate: boolean | string = "hello"
mixtureTypeVariate = true

/*类型断言：告诉解析器变量的实际类型
语法：
    变量 as 类型
    <类型>变量
*/
unknownTypeVariate = 32
let resOne: string = unknownTypeVariate as string
let resTwo: string = <string>unknownTypeVariate

// 非空断言。！可以用于断言操作对象是非null和非undefined类型。
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok
mayNullOrUndefinedOrString.toString(); // ts(2531)

// 确定赋值断言。允许在实例属性和变量声明后面放置一个！号，从而告诉ts该属性会被明确地赋值。
let variate!: number
let variateResult = 2 * variate



// 函数
/*函数的参数和返回值都需要声明数据类型。
可选参数后面不允许再出现必需参数。参数可以设置默认值默认参数。
*/
function sumTest(numOne: number, numTwo: number, numThree: number = 10, numFour?: number): number {
    return numOne + numTwo + numThree + numFour
}

// rest参数必须是数组类型。
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a: string[] = [];
push(a, 1, 2, 3);

// void类型表示函数没有返回值。
function voidTypeFun(): void { }

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

// 使用never类型的特性实现全面性检查
type combinableType = string | number
// type combinableType = string | number | boolean //不能将boolean类型赋给never
function controlFlowAnalysisWithNever(paramsC: combinableType) {
    if (typeof paramsC === "string") {
        // 这里 paramsC 被收窄为 string 类型
    } else if (typeof paramsC === "number") {
        // 这里 paramsC 被收窄为 number 类型
    } else {
        // paramsC 在这里是 never
        const check: never = paramsC;
    }
}

// 箭头函数的赋值
let summation: (paramsOne: number, paramsTwo: number) => number
summation = function (numOne: number, numTwo: number): number {
    return numOne + numTwo
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