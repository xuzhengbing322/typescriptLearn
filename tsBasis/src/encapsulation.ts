/*属性的修饰符可以设定属性访问的权限。
    public 修饰的属性可以在任意位置访问（修改） 默认值
    private 私有属性, 私有属性只能在类内部进行访问（修改）
            - 通过再类中添加方法使得私有属性可以被外部访问
    protected 受保护的属性,只能在当前类和当前类的子类中访问(修改)
*/ 


class Person_enca {
    public _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    //普通的getter/setter方法来读取和设置属性。

    /*  
     getName(){
         return this._name;
     }
     setName(value: string){
         this._name = value;
     }

     getAge(){
         return this._age;
     }
     setAge(value: number){
         if(value >= 0){
             this._age = value;
         }
     } */
    // TS中设置getter/setter方法的方式，由此来读写属性
    get name() {
        console.log('get name()执行了!!');
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    set age(value: number) {
        if (value >= 0) {
            this._age = value
        }

    }
}
const averagePerson = new Person_enca('zhangsan', 18);

// 修改name和age，由于set的作用，相当于是在修改_name和_age
averagePerson.name = 'lisi';
averagePerson.age = -13
console.log("averagePerson:",averagePerson);


class Fruits {
    protected num: number;

    constructor(num: number) {
        this.num = num;
    }
}

class Apple extends Fruits {
    test() {
        console.log(this.num);
    }
}

const appleNum = new Apple(125);
// appleNum.num = 33  属性“num”受保护，只能在类“Fruits”及其子类中访问。


// class C{
//     name: string;
//     age: number;
//     // 可以直接将属性定义在构造函数中
//     constructor(name: string, age:number){
//         this.name = name;
//         this,age = age;
//     }
// }

// 可以直接在类的构造函数中定义属性的修饰符
class Food {
    constructor(public name: string, public price: number) {
    }
}

const ordinaryFood = new Food('hamburger', 25);
console.log("ordinaryFood:",ordinaryFood);