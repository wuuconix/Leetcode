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
 * 剑指 Offer 32 - I. 从上到下打印二叉树
 * 中等
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]
 

提示：

节点总数 <= 1000
 * @param {TreeNode} root
 * @return {number[]}
 * 这种题我还是习惯于建一个二维数组，用来存储每个level下的节点。
 * 最后再用Array.flat() 打平就能得到结果。
 * 这样的写的好处是只需要类似 dfs 的方式即可，代码实际上会不断的 深度遍历到最左端的节点。
 * 但是由于 存储了深度信息，这样也能得到答案。
 * 64 ms 77.65%
 * 43.1 MB 48.41%
 */
var levelOrder = function(root) {
    let levels = []
    let recur = (root, level) => {
        if (!root)
            return
        if (levels[level] == undefined)
            levels[level] = [root.val]
        else
            levels[level].push(root.val)
        recur(root.left, level + 1)
        recur(root.right, level + 1)
    }
    recur(root, 0)
    return levels.flat()
};

/* 看了k神的题解，发现这种层次遍历实际上不应该用dfs，而应该使用bfs。
我们可以用一个队列 添加根节点下所有的子节点。 
添加完毕后进行出队，出队也是正式把他的值放到res答案数组中的过程。
然后再把它的孩子节点入队，这样如此循环就能实现层次遍历。
68 ms 59.70%
43.5mb 5.29% */
var levelOrder = function(root) {
    if (!root)
        return []
    let res = [], queue = []
    queue.push(root) //入队
    while (queue.length != 0) {
        let temp = queue.shift() //出队
        res.push(temp.val)
        if (temp.left)
            queue.push(temp.left)
        if (temp.right)
            queue.push(temp.right)
    }
    return res
};

let root = new TreeNode(1)
console.log(levelOrder(root));