class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 表示蛇身体的元。HTMLCollection是实时刷新并接受新元素
    bodies: HTMLCollection
    // 表示蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        // querySelector获取snake容器中的第一个div。#snake>div表示snake容器中的div容器
        this.head = document.querySelector('#snake>div')!
        // 获取snake容器中的所有div标签，即蛇
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇头的坐标
    get Xcoordinate() {
        return this.head.offsetLeft
    }
    get Ycoordinate() {
        return this.head.offsetTop
    }
    // 设置蛇头的坐标，当Xcoordinate发生改变时，执行函数。
    set Xcoordinate(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Xcoordinate === value) {
            return
        }
        // Xcoordinate的值的合法范围0～290之间
        if (value < 0 || value > 290) {
            throw new Error('The snake ran into the wall! Game over!')
        }

        //防止蛇掉头，让蛇继续按原方向移动。
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //此时蛇掉头了
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.Xcoordinate) {
                // 如果新值value大于旧值Xcoordinate，则说明蛇往右掉头。为了让蛇继续往左走，就重新赋值value。 
                value = this.Xcoordinate - 10;
            } else {
                //反之亦然
                value = this.Xcoordinate + 10;
            }
        }

        // 吃到食物后，身体增加，执行身体移动函数
        this.moveBody()

        this.head.style.left = value + 'px'

        // 检查头是否撞到身体
        this.checkHeadStrikeBody()
    }
    set Ycoordinate(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Ycoordinate === value) {
            return
        }
        // Ycoordinate的值的合法范围0～290之间
        if (value < 0 || value > 290) {
            throw new Error('The snake ran into the wall! Game over!')
        }

        //防止蛇掉头，让蛇继续按原方向移动。
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //此时蛇掉头了
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.Ycoordinate) {
                // 如果新值value大于旧值Xcoordinate，则说明蛇往上掉头。为了让蛇继续往下走，就重新赋值value。 
                value = this.Ycoordinate - 10;
            } else {
                //反之亦然
                value = this.Ycoordinate + 10;
            }
        }



        // 吃到食物后，身体增加，执行身体移动函数
        this.moveBody()

        this.head.style.top = value + 'px'
        // 检查头是否撞到身体
        this.checkHeadStrikeBody()
    }

    // 增加蛇身体的长度
    addBody() {
        // 向element中添加div模块。
        //insertAdjacentHTML()向element中添加html代码。参数1是添加的位置，
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 蛇身体移动
    moveBody() {
        // 将后面的身体设置为前面身体的位置。i=0是蛇头的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前面身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查蛇头是否撞到身体的方法
    checkHeadStrikeBody() {
        // 获取所有的身体，检查是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.Xcoordinate === bd.offsetLeft && this.Ycoordinate === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error("The snake strike itself~~ Game over!!");

            }

        }
    }

}

export default Snake