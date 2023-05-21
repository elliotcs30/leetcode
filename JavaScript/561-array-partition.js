/**
 * #561 Array Partition
 */

/**
 * Given an integer array nums of 2n integers, 
 * group these integers into n pairs (a1, b1), (a2, b2), ..., 
 * (an, bn) such that the sum of min(ai, bi) for all i is maximized. 
 * Return the maximized sum.
 */

/**
 * Example 1:
 * 
 * Input: nums = [1,4,3,2]
 * Output: 4
 * 
 * Explanation: 
 * All possible pairings(ignoring the ordering of elements) are:
 * 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 * 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
 * 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * So the maximum possible sum is 4.
 * 
 * 
 * Example 2:
 * 
 * Input: nums = [6,2,6,5,1,2]
 * Output: 9
 * 
 * Explanation:
 * The optimal pairing is (2, 1), (2, 5), (6, 6).
 * min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9
 */

/** 想法 1:
 * step.1 將一陣列先做排序(sort)
 * step.2 再將陣列中的數值兩兩一組
 * step.3 在取得兩兩數組中最小的值
 * step.4 最後再將最小的值取出做加總
 * 
 * pseudocode:
 *  nums.sort()
 *  newArr.push[nums[i], nums[i+1]]
 *  total += newArr[j][0]
 * /

/**
 * @param {number[]} nums
 * @return {number}
 */

  function compareNumbers(a, b) {
    return a - b;
  }
  
  // var arrayPairSum = function(nums) {
  //   nums.sort(compareNumbers)
    
  //   const newNums = []
  //   let total = 0
    
  //   for (let i = 0; i < nums.length; i += 2) {
  //     newNums.push(nums.slice(i, i+2)) 
  //   }
  //   for (let j = 0; j < newNums.length; j++) {
  //     total += newNums[j][0]
  //   }
  //   return total
  // };


  /** 想法 2:
   * 思考優化解:
   * 試想是否可以用一次的 for 迴圈來達成，由題目可以觀察出將一陣列分為兩兩一組，再將最小的值相加。
   * 因此可以推斷出就是把陣列中第 1、3、5、7... (i + 2) 相加後就是要返回的數字。
   * 
   * pseudocode:
   * nums.sort()
   * total = nums[0] + nums[2] + nums[4]...
   */

  var arrayPairSum = function(nums) {
    nums.sort(compareNumbers)
    let total = 0
  
    for (let i = 0; i < nums.length; i += 2) {
      total += nums[i]
    }
    return total
  };