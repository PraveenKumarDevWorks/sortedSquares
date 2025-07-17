## 🧩 Pattern: Two Pointers (Sorted Squares)

**Problem:**  
Given a sorted array of integers, return an array of the **squares of each number**, also sorted in **non-decreasing** order.

---

### ✅ Pattern Details

- **Name:** Sorted Squares of a Sorted Array  
- **Difficulty:** Easy  
- **Tags:** `Array`, `Two Pointers`  
- **Language:** JavaScript  

---

### 🧠 Approach

- Use a **two-pointer technique**:
  - One pointer starts from the beginning (`left`) and one from the end (`right`).
  - Compare the squares of the values at both pointers.
  - Place the **larger square** at the end of the result array and move the corresponding pointer inward.

---

### 📎 Code Snippet (JavaScript)

```js
const sortedSquares = function (nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
};
