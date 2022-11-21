/* 抽象类以abstract开头。它和其他类区别不大，只是不能用来创建对象。因为抽象类是专门用来被继承的类。
抽象类中可以添加抽象方法。抽象方法使用abstract开头，它只能定义在抽象类中。抽象方法没有方法体，因此子类必须对抽象方法进行重写。
*/

abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract sayHello(): void;
}

class Panda extends Animal {
    sayHello() {
        console.log('yi yi yi~~')
    }
}

const panda = new Panda("bab")
panda.sayHello()
