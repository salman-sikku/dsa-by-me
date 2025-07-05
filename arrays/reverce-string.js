// Problem: Reverce String
// Link: https://leetcode.com/problems/reverse-string/
// Approach: Two Pointers
// Time: O(n), Space: O(1)

function reverce(str) {
    // Convert string to array of characters
    let chars = str.split('');
    let left = 0;
    let right = chars.length - 1;
    
    while (left < right) {
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    // Convert back to string
    return chars.join('');
}

console.log(reverce("salman")); // Output: namlas
