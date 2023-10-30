/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for nums1 (starting from the end of nums1)
      let p2 = n - 1; // Pointer for nums2
      let p = m + n - 1; // Pointer for the merged array (starting from the end)
    
      // While there are elements left in both arrays
      while (p1 >= 0 && p2 >= 0) {
        // Compare the elements at nums1[p1] and nums2[p2]
        if (nums1[p1] > nums2[p2]) {
          // Choose the larger element and place it at the end of the merged array
          nums1[p] = nums1[p1];
          p1--; // Move the nums1 pointer one step back
        } else {
          nums1[p] = nums2[p2];
          p2--; // Move the nums2 pointer one step back
        }
        p--; // Move the merged array pointer one step back
      }
    
      // If there are remaining elements in nums2, copy them to nums1
      while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--; // Move the nums2 pointer one step back
        p--; // Move the merged array pointer one step back
      }
    };