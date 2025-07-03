// Problem: Remove Duplicates from Sorted Array
// Link: https://leetcode.com/problems/remove-element/
// Approach: Two Pointers
// Time: O(n), Space: O(1)


var removeElement = function(nums, val) {
    // pointer
    let k = nums[0];
    
    for(let i=0; i<nums.length; i++){
        // if current numbers is not Equal to val
        if(nums[i] !== val){
           nums[k] = nums[i];

           k++
        };
    }

    return k
};

console.log("hallo")