/* 
    super在constructor作函数时，代表父类的构造函数。
    在子类中写constructor，相当于重写父类的constructor。因此子类的constructor必须先调用super方法，因为子类没有自己的this对象。
而是继承父类的this对象，然后对其进行加工。虽然super代表了父类的构造函数，但是返回的是子类的实例，即super内部的this指的是子类。
在此之后，子类才可以添加自己的属性。
    super在方法中作对象使用时，super就表示当前类的父类 
*/


class Humam_super{
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

     describe(){
        console.log(`human have extremely creative`)
    }


}

class Asia_super extends Humam_super{
    profession:string
    
    constructor(name:string,age:number,nationality:string,profession:string){
        super(name,age,nationality)
        this.profession = profession
    }

    selfInformation():void{
        console.log(`Hello everyone! My name is ${this.name}. I am ${this.age} years old. I come from ${this.nationality}. China has a history of five thousand years`)
    }

    hubit():void{
        console.log(`I like to listen to Beijing Opera. My profession is ${this.profession}`)
    }

    describe(){
        //在类的方法中 super就表示当前类的父类 
        super.describe()
    }
}


// chinese_super是实例对象
const chinese_super = new Asia_super("张三",18,"China","computer")
console.log("chinese_super:",chinese_super)
chinese_super.selfInformation()
chinese_super.hubit()
chinese_super.describe() 
