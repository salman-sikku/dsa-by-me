// Problem: Remove Duplicates from Sorted Array
// Link: https://leetcode.com/problems/merge-sorted-array/
// Approach: Two Pointers
// Time: O(m + n), O(1) (in-place)


var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  //Agar nums2 me elements bache hain (nums1 ke nahi to already waha hi hain)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
