/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a,b) => a - b);
    for(let item of nums){
        if(item === original){
            original = original * 2;
        }
    }
    return original;
};