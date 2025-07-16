
var isPalindrome = function(x) {
    // Edge Case 1: Negative numbers are not palindromes.
    // A palindrome reads the same forwards and backwards. For example, -121
    // forwards is -121, but backwards would be 121-. They don't match.
    if (x < 0) {
        return false;
    }

    // Edge Case 2: Numbers ending in 0 (but not 0 itself) are not palindromes.
    // If a number ends in 0 (e.g., 10, 100), for it to be a palindrome,
    // it would also have to start with 0, which is not possible for a positive integer
    // (unless the number itself is 0).
    // Example: 10 reads 01 backwards, which is not 10.
    if (x % 10 === 0 && x !== 0) {
        return false;
    }

    let revertedNumber = 0;
    let originalX = x; // Store the original value of x to compare later

    // We build the reverted number by taking digits from the end of x
    // and appending them to revertedNumber.
    // We stop when revertedNumber is greater than or equal to x.
    // This handles both odd and even digit counts.
    while (x > revertedNumber) {
        const digit = x % 10; // Get the last digit
        revertedNumber = revertedNumber * 10 + digit; // Append the digit to revertedNumber
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // For numbers with an even number of digits, x and revertedNumber will be equal
    // when the loop finishes.
    // Example: x = 1221
    // 1st iteration: x = 122, revertedNumber = 1
    // 2nd iteration: x = 12, revertedNumber = 12
    // Loop ends because x (12) is not greater than revertedNumber (12).
    // x === revertedNumber (12 === 12) => true

    // For numbers with an odd number of digits, when the loop finishes,
    // x will be the middle digit, and revertedNumber will have the digits
    // up to the middle digit. We need to remove the middle digit from
    // revertedNumber by dividing it by 10 to compare.
    // Example: x = 121
    // 1st iteration: x = 12, revertedNumber = 1
    // 2nd iteration: x = 1, revertedNumber = 12
    // Loop ends because x (1) is not greater than revertedNumber (12).
    // We need to compare x (1) with revertedNumber / 10 (12 / 10 = 1.2 => 1).
    // x === Math.floor(revertedNumber / 10) (1 === 1) => true

    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};