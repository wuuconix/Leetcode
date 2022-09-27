/* 剑指 Offer 33. 二叉搜索树的后序遍历序列
中等

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 
参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 
提示：

数组长度 <= 1000
----
一开始没有思路，参考题解后写的代码。
首先我们需要知道二叉搜索树，它的特征是，左子树的所有节点都比根节点的值小 ，右子树的所有节点都比根节点的值大。
然后后续遍历的特点是什么，最后一个值就是根节点。
然后我们可以结合二叉搜索树，在前面搜索出第一个比根节点的值大的点，以此为分界线，它左边就是左子树的值们，
它的右边，包括它自己就是右子树的值们。
区分出来后，只需要判断右子树的值是不是都大于根节点即可。
因为我们一开始确定mid，即分界线的时候，已经保证了左子树的点都小于根节点 ，所有没有必要再次判断。
判断好后，我们还需要再把左子树和右子树作为一棵树进行递归调用。
68 ms 66.25%
42 MB 46.25%
*/
function verifyPostorder(postorder: number[]): boolean {
    const recur = (left: number, right: number): boolean => {
        if (right <= left)
            return true
        let root: number = postorder[right]
        let mid: number = right //若没有右子树，则分界线是在right上，即root处
        for (let i: number = 0; i < right; i++) { //得到第一个大于root的，即区分左子树和右子树的边界
            if (postorder[i] > root) {
                mid = i
                break
            }
        }
        for (let i: number = mid; i < right; i++) {
            if (postorder[i] < root) //右子树小于root了，直接false
                return false
        }
        return recur(left, mid - 1) && recur(mid, right - 1)
    }
    return recur(0, postorder.length - 1)
};

let postorder: number[] = [1,6,3,2,5]
console.log(verifyPostorder(postorder));
