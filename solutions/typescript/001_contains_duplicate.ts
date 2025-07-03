/**
 * Checks if the given array contains any duplicate values.
 *
 * @param nums - An array of integers to check for duplicates.
 * @returns True if any value appears more than once; otherwise, false.
 */
class Solution001 {
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

// Example usage:
const solution = new Solution001();
console.log(solution.hasDuplicate([1, 2, 3, 3])); // true
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false
