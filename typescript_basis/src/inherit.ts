/* 
extends实现子类继承父类。继承后子类将拥有父类所有的方法和属性。父类写有多个子类的共有代码，实现代码的复用。
如果子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法，即重写。
*/


class Human{
    name:string;
    age:number;
    nationality:string
    constructor(name:string,age:number,nationality:string){
        this.name = name
        this.age = age
        this.nationality = nationality
    }

    selfInformation():void{
        console.log(`Hello everyone! My name is ${this.name}. I am ${this.age} years old. I come from ${this.nationality}`)
    }

}

class Asia extends Human{
    selfInformation():void{
        console.log(`Hello everyone! My name is ${this.name}. I am ${this.age} years old. I come from ${this.nationality}. China has a history of five thousand years`)
    }

    hubit():void{
        console.log(`I like to listen to Beijing Opera`)
    }
}

class America extends Human{
    selfInformation():void{
        console.log(`Hello everyone! My name is ${this.name}. I am ${this.age} years old. I come from ${this.nationality}. The United states has better laws`)
    }

    dream():void{
        console.log(`I wish no war in the world`)
    }
}

// chinese是实例对象
const chinese = new Asia("张三",18,"China")
const Yunqui = new America("Tom",19,"US")
console.log("chinese:",chinese)
console.log("Yunqui:",Yunqui)
chinese.selfInformation()
chinese.hubit()
Yunqui.selfInformation()
Yunqui.dream()

