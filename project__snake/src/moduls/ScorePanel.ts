
// 定义积分牌的类
class ScorePanel{
    // score和level用来记录分数和等级
     score:number = 0;
     level:number = 0;
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    // 设置一个变量限制等级，避免代码中直接写数字，增加代码的可扩展性
    maxLevel:number;
    // 设置一个变量表示多少分升级
    upScore:number;


    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分的方法
    addScore(){
        this.score++;
        this.scoreEle.innerHTML = this.score + ''
        // 依据分数情况升级
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 设置升级的方法
    levelUp(){
        // 设置等级上限，避免速度过快。
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }

}

export default ScorePanel
