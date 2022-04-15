/**
 * 剑指 Offer II 037. 小行星碰撞
 * 中等
 * 给定一个整数数组 asteroids，表示在同一行的小行星。

对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

示例 1：

输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
示例 2：

输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。
示例 3：

输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
示例 4：

输入：asteroids = [-2,-1,1,2]
输出：[-2,-1,1,2]
解释：-2 和 -1 向左移动，而 1 和 2 向右移动。 由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。 
 
提示：

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
 * @param {number[]} asteroids
 * @return {number[]}
 * 栈一把梭。
 * 判断方向。
 * 只有左边小行星往右，右边小行星往左 这种情况下才会碰撞
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    for (let ast of asteroids) {
        let top = stack[stack.length - 1]
        if (ast / top > 0 || (ast > 0 && top < 0)) { //同向、说着左边的往左，右边的往右，都不会发生碰撞
            stack.push(ast)
        } else {
            top = stack.pop()
            while (1) {
                if (ast / top > 0 || (ast > 0 && top < 0)) { //如果同向了
                    stack.push(top)
                    stack.push(ast)
                    break
                }
                if (Math.abs(top) == Math.abs(ast)) { //两者同时消失
                    break
                } else if (Math.abs(top) > Math.abs(ast)) { //top比ast大，ast无了
                    stack.push(top)
                    break
                } else { //top比ast小，top无了，需要看下一个top
                    if (stack.length > 0)
                        top = stack.pop()
                    else {
                        stack.push(ast) //这里说明ast已经干掉了前面所有的行星
                        break 
                    }
                }
            }
        }
    }
    return stack
};

let asteroids = [10,2,-5]
console.log(asteroidCollision(asteroids));