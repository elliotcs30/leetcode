#35 Search Insert Position

'''
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

翻譯：
給定一個由不同整數組成的排序數組和一個目標值，如果找到目標，則返回索引。 如果不是，則返回按順序插入時的索引。

您必須編寫具有 O(log n) 運行時復雜度的算法。
'''

'''
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2


Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1


Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
'''

# class Solution:
#     def searchInsert(self, nums: List[int], target: int) -> int:

class Solution:
  def searchInsert(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    lens = len(nums)
    if(lens == 0): return 0

    for i,n in enumerate(nums):
      if(n >= target):
        return i

    return lens