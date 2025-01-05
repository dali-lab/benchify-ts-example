def twoSum(nums: list[int], target: int) -> list[int]:
    """
    Given an array of integers nums and an integer target, 
    return indices of the two numbers that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum
    
    Returns:
        List containing indices of two numbers that sum to target
        
    Example:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
    """
    # Create hash map to store complement values
    seen = {}
    
    # Iterate through array once, O(n) time complexity
    for i, num in enumerate(nums):
        complement = target - num
        
        # If we've seen the complement before, we found our pair
        if complement in seen:
            return [seen[complement], i]
            
        # Store current number and its index
        seen[num] = i
    
    # No solution found
    return []
