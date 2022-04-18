function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 剑指 Offer II 048. 序列化与反序列化二叉树
 * 困难
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例 1：

输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：

输入：root = [1,2]
输出：[1,2]
 
提示：

输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 这种题目还是做的不够熟。
 * 序列化非常简单，只要层次遍历即可，然后还得把null也得加进去，但是只加一个，null的子节点什么的就不用加了。
 * 不太清楚反序列化应该怎么实现，一开始用 二叉树节点之间的规律来弄，即子节点的下标是 2 * n -1 和 2 * n - 2 
 * 实际上因为树不是完全二叉树，它是不满足这个规律了。
 * 所以实际上还是可以类似层次化遍历的思路，也利用一个栈。
 * 在所有节点的数组里维护一个指针
 * 当前栈弹出的元素的左子树就是当前指针，指针移动1就是 它的右子树。
 * 然后看它的左子树和右子树是否是null，如果不是，则继续添加到栈里面。
 * 120 ms 60.76%
 * 52.6 MB 20.89%
 */
var serialize = function(root) {
    if (!root)
        return ""
    let stack = [root]
    let ans = ""
    while (stack.length) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let temp = stack.shift()
            if (temp == null) { //如果是空，则不继续往下了
                ans += "null,"
                continue
            }
            ans += `${temp.val},`
            stack.push(temp.left)
            stack.push(temp.right)
        }
    }
    console.log(ans)
    return ans //字符串最后会多一个逗号
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == "")
        return null
    data = data.split(",")
    data.pop() //删除最后一个空
    let root = new TreeNode(data[0])
    let stack = [root] //同样利用队列来实现反序列化
    let index = 1
    while (stack.length) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let temp = stack.shift()
            if (data[index] != "null") {
                let leftNode = new TreeNode(data[index])
                temp.left = leftNode
                stack.push(leftNode)
            }
            index++
            if (data[index] != "null") {
                let rightNode = new TreeNode(data[index])
                temp.right = rightNode
                stack.push(rightNode)
            }
            index++
        }
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)
console.log(deserialize(serialize(root)));