#108. Convert Sorted Array to Binary Search Tree

# Given an integer array nums where the elements are sorted in ascending order, convert it to a 
# height-balanced
#  binary search tree.

'''
Example 1:

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums)==0: #當沒東西時回傳None,不開新節點
            return None
            
        if len(nums)==1: #當值只有一個時,就開此值的節點就好
            return TreeNode(nums[0])
            
        mid=len(nums)//2
        root=TreeNode(nums[mid])
        root.right=self.sortedArrayToBST(nums[mid+1:len(nums)])
        root.left=self.sortedArrayToBST(nums[0:mid])
        return root