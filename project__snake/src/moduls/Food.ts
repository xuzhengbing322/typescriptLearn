// 定义食物类Food
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素，并将其赋值给element属性。!表示模块一定存在，不可能为空
        this.element = document.getElementById('food')!
    }

    // 当蛇头的坐标和食物的坐标相同时，则表示食物被蛇吃了
    // 定义一个获取食物X轴坐标的方法
    get Xcoordinate() {
        return this.element.offsetLeft
    }

    // 定义一个获取食物Y轴坐标的方法
    get Ycoordinate() {
        return this.element.offsetTop
    }

    // 食物被吃后，修改位置
    changeLocation() {
        // 生成一个随机的位置
        // 食物的位置最小是0，最大是290.由于蛇每次移动10px，所以食物的坐标必须是整十的数才能被吃。
        // Math.round()四舍五入取整，获得[0,29]的随机数
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        // 更改食物的坐标
        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }

}

export default Food