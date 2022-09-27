/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 剑指 Offer 37. 序列化二叉树
 * 困难
 * 请实现两个函数，分别用来序列化和反序列化二叉树。

    你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

    提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

    输入：root = [1,2,3,null,null,4,5]
    输出：[1,2,3,null,null,4,5]

 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 这道题是困难题，做了大概两个小时？还好最终做出来了，而且是在没有看题解的情况下，可喜可贺可喜可贺。
 * 这道题让我们实现把一棵树进行序列化，然后还要反序列化。它的验证条件就是 deserialize(serialize(root));
 * 看你经过这两层函数后，树是否是一样的。
 * 思路是有的，因为在Leetcode上，题目里出现树作为输入或者输出的时候，它都是这样的情况，类似
 * 输入：root = [1,2,3,null,null,4,5]
 * 它这个是怎么看的呢?实际上就是层次遍历。1作为根节点，2是它的left，3是它的right。然后后面两个null则是2的后代，以此类推。
 * 所以 我的序列化思路就是把树变成leetcode这种用层次遍历来表示的形式。
 * 然后如何把序列化的字符串反序列化呢？我一开始想直接用左子树和右子树分别是根的 2 * i + 1和2 * i + 2这种规律来弄，但是发现 因为有些节点 没有后代的原因
 * 序列化后的字符串不再符合这个规律，因为少了一些null。
 * 最后我研究了我们人类是如何根据这个 [1,2,3,null,null,4,5] 写出树的过程。
 * 利用队列，成功实现了反序列化。
 * 我们在设置 1.left = 2.   1.right = 3. 之后怎么办呢?
 * 我们需要把2 和 3入队列。
 * 之后遇到 后面的节点后，我们就得出队，把2作为root，设置lef他和right。
 * 
 * 104 ms 91.33%
 * 52.8 MB 13.43%

 */
var serialize = function(root) {
    if (!root)
        return ""
    let table = [] //二维数组，存储每层里的节点的val
    const recur = (root, layer) => {
        if (!table[layer])
            table[layer] = []
        if (!root) {
            table[layer].push(null)
            return
        } else {
            table[layer].push(root.val)
            layer++
            recur(root.left, layer)
            recur(root.right, layer)
        }
    }
    recur(root, 0) //层次遍历 把节点的val值全部加入table
    let index = 0
    for (let i = table[table.length - 2].length - 1; i >= 0; i--) {
        if (table[table.length - 2][i]) { //最后第二层第一个不是null的节点
            index = i
            break
        }
    }
    table[table.length - 2] = table[table.length - 2].slice(0, index + 1) //最后第二层删除多余null
    table[table.length - 1] = [] //最后一层肯定全是null，直接删除
    table = table.flat() //二维变一维，同时保证是按照层次遍历的顺序
    return table.toString()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == '') //空字符串说明是空树
        return null
    let table = data.split(",") //重新得到记录着层次遍历节点val的数组table
    let tableNode = [] //直接根据table的值先创建好节点，之后在进行指向。
    for (let val of table) {
        if (val == '')
            tableNode.push(null)
        else
            tableNode.push(new TreeNode(val))
    }
    let queue = [] //用来存储还没确定left和right的节点。先进先出
    queue.push(tableNode[0])
    for (let i = 1; i < tableNode.length; i += 2) {
        let root = queue.shift()
        root.left = tableNode[i] === undefined ? null : tableNode[i]
        root.right = tableNode[i + 1] === undefined ? null : tableNode[i + 1]
        if (tableNode[i])
            queue.push(tableNode[i])
        if (tableNode[i + 1])
            queue.push(tableNode[i + 1])
    }
    return tableNode[0]
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let root = new TreeNode(1)
root.left = new TreeNode(2)
console.log(deserialize(serialize(root)))