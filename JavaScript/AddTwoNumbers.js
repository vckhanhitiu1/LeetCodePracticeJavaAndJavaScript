/*
Topic: https://leetcode.com/problems/add-two-numbers/description/
*/

function splitNumber(numberNeedTosplit) {
    numberNeedTosplit = numberNeedTosplit.join("").split(',');
    return numberNeedTosplit;
}
var addTwoNumbers = function(l1, l2) {
    var sum;
    sum = parseInt(splitNumber([2, 4, 3])) + parseInt(splitNumber([5, 6, 4]));
    var splitSum = sum.toString().split('').reverse();
    var arrayResult = [];
    for (i = 0; i < splitSum.length; i++) {
        arrayResult.push(parseInt(splitSum[i]))
    }
    return arrayResult;
};