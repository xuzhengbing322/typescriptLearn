/* function genericityFunction(paramsOne: number):number {
    return paramsOne;
} */


/*在定义函数或是类时,如果遇到类型不明确就可以使用泛型。
T是一个抽象类型，只有在调用的时候才确定它的值。
如此，这个函数就能接受任意类型的参数并返回相同类型的返回值。
*/ 
function genericityFunction<T>(paramsOne:T):T {
    return paramsOne;
}
// 不指定泛型,TS把参数的数据类型当作T的值。
let result = genericityFunction(10);
//手动指定泛型
let result2 = genericityFunction<string>('hello');

// 泛型可以同时指定多个
function genericityFunction2<T, K>(paramsOne:T, paramsTwo:K):T {
    console.log(paramsTwo);
    return paramsOne; 
}
console.log(genericityFunction2<Number,string>(68,'apple'))

/*T理论上可以是任何类型，因此使用它的任何属性和方法都会报错，除非这个属性和方法是所有集合共有的。
那么就需要确定传给genericituFunction3函数的参数类型应该有size属性。也就是说，需要进行类型约束。通过extends就能实现。
*/ 

interface Sizeable{
    size: number;
}
// T extends Sizeable 表示泛型T必须是Sizeable的子类
function genericityFunction3<T extends Sizeable>(paramsOne:T): T {
    console.log(paramsOne.size)
    return paramsOne
}


class genericityClass<T>{
    name: T;
    constructor(name:T){
        this.name = name;
    }
}

const people_gener = new genericityClass<string>('zhangsan');

// genericityFunction3('124');
// genericityFunction3({length: 10});
console.log("people_gener:",people_gener)