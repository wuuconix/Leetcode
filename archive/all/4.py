""" 题目描述
    给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
    算法的时间复杂度应该为 O(log (m+n)) 。
    输入：nums1 = [1,3], nums2 = [2]
    输出：2.00000
    解释：合并数组 = [1,2,3] ，中位数 2
"""

""" 暴力合并
    64 ms 8.67%
    15.1 MB 81.55%
    时间复杂度 O(m + n)
"""
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums3 = []
        i, j = 0, 0
        while i <= len(nums1) and j <= len(nums2):
            if i == len(nums1) and j == len(nums2):
                break
            if i == len(nums1):
                nums3.append(nums2[j])
                j += 1
            elif j == len(nums2):
                nums3.append(nums1[i])
                i += 1
            elif nums1[i] < nums2[j]:
                nums3.append(nums1[i])
                i += 1
            else:
                nums3.append(nums2[j])
                j += 1
        if len(nums3) % 2 == 1:
            return nums3[len(nums3) // 2]
        else:
            return (nums3[len(nums3) // 2 - 1] + nums3[len(nums3) // 2]) / 2 

""" 二分查找
    每次排除掉 k / 2
"""