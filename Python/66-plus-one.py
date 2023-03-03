#66 Plus One

'''
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.


題目分析：
1. 傳入一個純正整數的陣列
2. 該陣列是一個大的正整數，依照每個位數拆開
3. 計算出該正整數 +1 的結果
4. 把結果依照輸入的方式也輸出成陣列


Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].


Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].


解題思路:
1. 把陣列中的數字串成一個整數
2. 然後把該數字 +1
3. 每個位元拆開再放入陣列中
'''

digits = [4,3,2,1]

def plusOne(self, digits):
    length = len(digits) - 1
    while digits[length] == 9:
        digits[length] = 0
        length -= 1
    if(length < 0):
        digits = [1] + digits
    else:
        digits[length] += 1
    return digits