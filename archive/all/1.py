""" 题目描述
    给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target的那两个整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
"""

""" 暴力破解
    执行用时:8204 ms, 在所有 Python3 提交中击败了5.01%的用户
    内存消耗:15.6 MB, 在所有 Python3 提交中击败了56.95%的用户
"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue
                else:
                    if nums[i] + nums[j] == target:
                        return [i, j]

""" 哈希表
    36 ms 79%
    16.1 MB 9%
    以微量的内存增加换取了巨大的时间进步,值得
"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for i, num in enumerate(nums): #enumerate将同时获得下标和值。
            if target - num in dict:
                return [i, dict[target - num]] #将值的下标都记录下来，从而将获得 target - i 的时间复杂度降为O(1)
            dict[num] = i #为什么这条语句在最后。是为什么方式在[3, 3], taget= 6这种情况下给出[0, 0]这种答案，而应该是[0, 1]
            #如果先dict[num]在if target - num in dict的时候就可能会取到自己，从而给出重复的下标。
