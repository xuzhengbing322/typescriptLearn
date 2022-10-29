// 引入其他类
import Food from "./Food";
import Snake from "./snake";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
    // 定义三个属性，代表三个类
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 存储蛇的移动方向（也就是按键的方向）
    direction: string | undefined;
    // 记录蛇是否结束
    isLive: boolean = true

    constructor() {
        // 属性的值为类的实例
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件。this本身指向document，通过bind()使this指向keydownHandler，如此便能获取按键
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run方法，使蛇移动
        this.run()
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key

    }

    // 蛇移动的方法。
    run() {
        /*根据方向（this.direction）来使蛇的位置改变
        向上 top减少， 向下 top增加， 向左 left减少， 向右 left增加
        */
        //获取蛇现在的坐标
        let X = this.snake.Xcoordinate
        let Y = this.snake.Ycoordinate

        // 根据按键方向来修改X和Y的值
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break
            case "ArrowDown":
                Y += 10;
                break
            case "ArrowLeft":
                X -= 10;
                break
            case "ArrowRight":
                X += 10;
                break
        }

        // 检测蛇是否吃到食物
        this.changeEat(X, Y)

        // 修改蛇的X值和Y值
        try {
            this.snake.Xcoordinate = X;
            this.snake.Ycoordinate = Y;
        } catch (e: any) {
            alert(e.message)
            this.isLive = false
        }

        // 开启一个定时调用，每隔300ms运行一次run。 使蛇沿一个方向持续走。
        // bind(this)保证this指向gamecontrol对象
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 检查蛇是否吃到食物
    changeEat(X: number, Y: number) {
        if (X === this.food.Xcoordinate && Y === this.food.Ycoordinate) {
            // 食物的位置发生改变
            this.food.changeLocation()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇要增加一节
            this.snake.addBody()
        }
    }

}

export default GameControl
