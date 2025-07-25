from typing import List

class Solution001:

    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True  
            seen.add(num)
        return False  


if __name__ == "__main__":
    solution = Solution001()
    print(solution.hasDuplicate([1, 2, 3, 3]))  # Expected output: True
    print(solution.hasDuplicate([1, 2, 3, 4]))  # Expected output: False
