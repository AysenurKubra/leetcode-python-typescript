# 001 - Contains Duplicate

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

## Examples

- Input: nums = [1, 2, 3, 3]  
  Output: true

- Input: nums = [1, 2, 3, 4]  
  Output: false

## Recommended Complexity

- Time: O(n)  
- Space: O(n)

## Hints

1. Brute force: Check each element with every other element (O(n²)).  
2. Use a data structure for efficient lookup (hash set).  
3. Store elements in a hash set to detect duplicates in O(1) time per element.

---

## Approach

We'll iterate over the array, insert elements into a set, and if we find an element already in the set, return true. Otherwise, return false at the end.
