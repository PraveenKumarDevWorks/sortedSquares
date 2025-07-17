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