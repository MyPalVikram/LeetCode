/**
 * @param {number[]} prices
 * @return {number}
 
 Input: An Array of numbers
 Output: Number
 Constraints: Given arrays length needs to be greater than 1
 Edge Case: If the days after the first are not smaller
            return 0. The min value index has to be smaller than               max value index.
 */
// var maxProfit = function(prices) {
//     // Define a result variable to 0

//     // Create a min value variable to the first index
//     // Create a max value variable
    
//     // Iterate over prices array
//       // Compare each value against our min variable and set it
//       // Compare the difference of the min varaible on the current          index to the result variable
// };

var maxProfit = function(prices) {
    // Create a result variable
    let result = 0;
    // Set a min value to the first index
    let min = prices[0]
    
    // Iterate over the prices array
    for (let i = 1; i < prices.length; i++) {
        // Compare what the smallest number is
        min = Math.min(prices[i], min);
        // Set my result variable to max - min
        result = Math.max(result, prices[i] - min);  
    } 
    // Return my result
    return result; 
};