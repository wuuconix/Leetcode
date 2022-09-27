/* 剑指 Offer II 043. 往完全二叉树添加节点
中等
完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 n 层有 2n-1 个节点）的，并且所有的节点都尽可能地集中在左侧。

设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：

CBTInserter(TreeNode root) 使用根节点为 root 的给定树初始化该数据结构；
CBTInserter.insert(int v)  向树中插入一个新节点，节点类型为 TreeNode，值为 v 。使树保持完全二叉树的状态，并返回插入的新节点的父节点的值；
CBTInserter.get_root() 将返回树的根节点。
 

示例 1：

输入：inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
输出：[null,1,[1,2]]
示例 2：

输入：inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
输出：[null,3,4,[1,2,3,4,5,6,7,8]]
 

提示：

最初给定的树是完全二叉树，且包含 1 到 1000 个节点。
每个测试用例最多调用 CBTInserter.insert  操作 10000 次。
给定节点或插入节点的每个值都在 0 到 5000 之间。

---
一把过了十分开心。
这道题就是让我们往一个完全二叉树里添加新节点。
什么是完全二叉树呢？它就是严格按照层次遍历得顺序添加节点，从上到下，从左到右，除了最后一行，
全部都是有节点的。
这道题的难点在于实现insert插入函数。
我这里根据数学关系，首先在类里设置一个变量size用来记录数的节点个数。
这样我们就知道了下一个即将插入的节点的下标了。
然后我们就可以根据完全二叉树之间父节点和子节点之间下标的关系，知道如何从根节点到达这个即将插入的节点。
96 ms 53.76%
47.1 MB 15.06%*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

class CBTInserter {
    constructor(root) {
        this.root = root
        this.size = this.count(root)
    }
    count(root) {
        if (root == null) {
            return 0
        } else {
            return 1 + this.count(root.left) + this.count(root.right)
        }
    }
    insert(v) {
        let stack = [] //记录从根节点到待插入节点怎么走，0代表往左，1代表往右
        let index = this.size + 1
        while (index != 1) {
            stack.unshift(index % 2)
            index = Math.floor(index / 2)
        }
        let p = this.root
        for (let i = 0; i < stack.length - 1; i++) { //走到待插入节点得父节点
            if (stack[i] == 0)
                p = p.left
            else
                p = p.right
        }
        if (stack[stack.length - 1] == 0)
            p.left = new TreeNode(v)
        else
            p.right = new TreeNode(v)
        this.size++
        return p.val
    }
    get_root() {
        return this.root
    }
}