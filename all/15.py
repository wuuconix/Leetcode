""" 15. 三数之和
给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
"""

""" 双指针使得时间复杂度从O(N^3)降到O(N^2)
    利用排序来保证第一个数a <= b <= c从而保证数据的不重复
    684 ms 52.77%
    17.8 MB 33.91%
"""

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        if n < 3:
            return []
        nums.sort()
        result = list()
        for i in range(n - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            target = -nums[i]
            k = n - 1
            for j in range(i + 1, n - 1):
                if j > i + 1 and nums[j] == nums[j - 1]: #和之前的元素重复
                    continue
                while k > j and nums[j] + nums[k] > target: #说明太大了
                    k -= 1 #双指针中的右边减小，使和变小
                if k == j:
                    break
                if nums[j] + nums[k] == target:
                    result.append([nums[i], nums[j], nums[k]])
        return result