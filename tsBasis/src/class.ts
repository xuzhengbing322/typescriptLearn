//ts的编程思想的核心就是面向对象，将所有的代码都写在对象中。
 
/*
class关键字定义类。类中有属性和方法两部分。
属性和方法分为实例属性和方法和静态属性和方法，实例属性和方法通过类的实例对象调用，静态属性和方法通过类调用。
readonly 开头的属性表示一个只读的属性无法修改
*/ 

class Person{
    // 声明类的属性，初始值可赋可不赋
    // 实例属性
    name:string = "tom"
    // 静态属性
    static nickName:string = "pige"
    readonly age:number = 18
    /*new实例化类时，自动执行constructor函数，因此类必须给有constructor形参所对应的参数。
    this指向类，因此this.name就是类的name属性。通常在constructor中给类的属性赋值。
    constructor的形参
    */ 
    constructor(name:string,age:number){
        this.name = name
        this.age = age
        
    }


    // 类的实例属性需要通过this调用，静态属性通过类名调用
    information():void{
        console.log("I am ",this.name , "my nickName is ",Person.nickName,"my age is",this.age)
    }

    static sayHello():void{
        console.log("Hello everyone！")
    }
}
// 静态方法和属性通过类调用，因此不用写在实例对象语句之后。
Person.sayHello()

const people = new Person("jack",28);


console.log("he name is ",people.name)
people.name = 'rng'
console.log("his new name is ",people.name)

console.log("his nickName is ",Person.nickName)
people.information()


