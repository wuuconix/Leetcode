/** 20. 有效的括号
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    
    示例 1：
    输入：s = "()"
    输出：true

    示例 2：
    输入：s = "()[]{}"
    输出：true
。*/

/**
 * @param {string} s
 * @return {boolean}
 * 利用栈来解决匹配问题
 */
 var isValid = function(s) {
    let dict = {")": "(", "]": "[", "}": "{"}
    let leftBrackets = ['(', "[", "{"]
    let stack = []
    for (let i of s) {
        if (leftBrackets.includes(i)) {
            stack.push(i)
        }
        else {
            if (stack[stack.length - 1] == dict[i]) {
                stack.pop()
            }
            else {
                return false
            }
        }
    }
    if (stack.length == 0)
        return true
    else
        return false
};

console.log(isValid("]"))