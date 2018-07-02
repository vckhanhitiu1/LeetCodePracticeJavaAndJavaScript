//Brute Force Approach way
function reversePairsBruteForce(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[j] > 2 * nums[i]) {
                count++;
            }
        }
    }
    return count
};

//Binary Search
function reversePairsBinarySearch(nums) {

}