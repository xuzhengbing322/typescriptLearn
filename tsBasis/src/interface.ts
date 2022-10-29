// 类型别名：描述一个对象的类型
type dogType = {
    name: string,
    age: number
};

const Huskie: dogType = {
    name: "Huskie",
    age: 1
}

// 接口是对行为的抽象，具体如何行动需要由类去实现。接口除了可用于对类的一部分行为进行抽象意外，也常用于对对象的形状进行描述。
interface PersonObjInterface {
    name: string;
    age: number;
}

interface PersonObjInterface {
    gender: string;
    habit?: string
    readonly nationlity: string
    // 索引签名：允许其他的任意属性。一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
    [propName: string]: any;
}
// 变量tom的类型是PersonInterface。因此，tom的形状必须和接口PersonInterface一致，多和少都不行。
const tom: PersonObjInterface = {
    name: 'toni',
    age: 12,
    gender: 'man',
    nationlity: 'China'
};


interface PersonFunInterface {
    name: string;
    sayHello(): void;
}
// 通过类实现接口抽象的函数
class someone implements PersonFunInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log("hello everyone");
    }

}

// 绕开额外属性检测的方式：鸭式辨别法、类型断言、索引签名
// 鸭式辨别法
interface FoodInterface {
    name: string
    [key: string]: any
}

function apple(paramsE: FoodInterface) {
    console.log("fruits name is:", paramsE.name)
}

//apple({name:'safeness',size:'big'}) // 报错:size是额外属性
let fruits = { name: 'safeness', size: 'big' }
apple(fruits) //fruits对象最为一个整体赋给paramesE，就避免了额外属性的检查。同时friuts具有name属性，符合FoodInterface的要求

// 类型断言：相当于告诉程序，我很清楚自己在做什么，不需要再进行额外的属性检查
apple({ name: 'safeness', size: 'big' } as FoodInterface)

// 索引签名
apple({ name: 'safeness', size: 'big' })


/*接口和类型别名的区别
大多数的情况下，使用接口类型和类型别名的效果等价。但是在某些特定的场景下这两者还是存在很大区别。
TypeScript的核心原则之一是对值所具有的结构进行类型检查。而接口的作用就是为这些类型命名和为你的代码或第三方代码定义数据模型。


type会给一个类型起个新名字。type有时和interface很像，但是可以作用于基本类型，联合类型，元组以及其它任何你需要手写的类型。

*/
/*区别一：objects/functions
type不会新建一个类型，而是会给一个类型起一个新名字。然后用这个名字来引用类型。interface是创建一个新类型。
*/
interface VegetableInterfaceObj {
    name: string
    price: string
    tuple: [number, string]
}

interface VegetableInterfaceFun {
    (name: string, price: string): void
}



type VegetableTypeObj = {
    name: string
    price: string
}

type VegetableTypeFun = (name: string, price: string) => void

// 区别二：与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
// let div = document.createElement('div');
// type B = typeof div;

// 区别三：接口可以定义多次，类型别名不可以。接口定义多次，会被自动合并为单个接口
interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };

/*扩展方式不同。接口的扩展就是继承，通过 extends 来实现。类型别名的扩展就是交叉类型，通过 & 来实现。
接口可以扩展类型别名，同理，类型别名也可以扩展接口。
*/
interface ExtendInterface {
    x: number
}

interface NewInterface extends ExtendInterface {
    y: number
}

type ExtendType = {
    x: number
}

type NewType = ExtendType & {
    y: number
}

// 接口扩展类型别名
interface MixtureExtend extends ExtendType{
    y:number
}
// 类型别名扩展接口
type MixtureExtendOther = ExtendInterface & {
    y:number
}



