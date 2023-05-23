#1 Two Sum

'''
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


解釋：
由題目可得知有一陣列為 nums，而期許的結果就是要把 nums 陣列中的數組兩兩相加相等於 target 的值，但相加的數組中不能使用相同的數字加總兩次，並且要回傳加總為 target 數字的位置。
'''


# 想法 1:
# 把陣列中的數字兩兩相加，只要是等於 target 的值，那就回傳當前數字的位置。
# 此方法會使用兩個 for 迴圈，因此時間複雜度為 BigO(n^2)。

# pseudocode:
# if nums[i] + nums[j] == target:
#   return [i, j]

nums = [3, 3]
target = 6

class Solution(object):
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

# 想法 2:
# 思考優化解:
# 試想是否可以用一次的 for 迴圈來達成。

# pseudocode:
# result = []
# if target - nums[i] == nums[i + 1]
#   result.append([i, i + 1])

class Solution(object):
    def twoSum(self, nums, target):
        result = {}
        for i in range(len(nums)):
            num1 = nums[i]
            num2 = target - num1
            if num2 in result:
                return [result[num2], i]
            result[num1] = i
            
# 想法 3:
# 參考優化解:
# 利用半個迴圈 + 雙指針(測試會過，submit不會過，但是可以參考思維)

# pseudocode:
# i = 0
# j = len(nums) - 1
# while ...:
#     if ...:
#         i = i + 1
#     else:
#         j = j - 1

# 利用雙指針的方式
# while (nums[i] + nums[j] != target):
#     if (nums[i] + nums[j] > target):
#         j = j - 1
#     else:
#         i = i + 1

class Solution(object):
    def twoSum(self, nums, target):
        i = 0
        j = len(nums) - 1
        
        while (nums[i] + nums[j] != target):
            if (nums[i] + nums[j] > target):
                j = j - 1
            else:
                i = i + 1
        return [i, j]

# 參考解法:
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        if len(numbers) == 2: return [0,1]
        for i in range(len(numbers)-1, -1, -1):
            for j in range(i-1, -1, -1):
                if numbers[i] + numbers[j] == target:
                    return [j, i]