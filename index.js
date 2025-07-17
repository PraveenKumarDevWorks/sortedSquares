const sortedSquares = function (nums) {
    // This function takes an array of integers and returns a new array containing the squares of each number,
    let returns = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    // sorted in non-decreasing order.
    // It uses a two-pointer approach to efficiently compute the squares.
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        // Compare the squares of the leftmost and rightmost elements
        if (leftSquare > rightSquare) {
            returns[index] = leftSquare;
            left++;
        } else {
            returns[index] = rightSquare;
            right--;
        }
        index--;
    }
    return returns;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// Example usage
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Output: [4, 9, 49, 121, 144]

// Explanation
// This function computes the squares of each number in the input array and returns a new array with the squares sorted in non-decreasing order.
// It uses a two-pointer technique to efficiently compare the squares of the leftmost and rightmost elements, placing the larger square at the end of the result array.
// Time Complexity: O(n), where n is the length of the input array nums.
// Space Complexity: O(n), as we create a new array to store the squared values.