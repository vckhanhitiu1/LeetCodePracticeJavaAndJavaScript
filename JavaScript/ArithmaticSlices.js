function numberOfArithmeticSlices(A) {
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        var limitSize = 3;
        var tempCount = 0
        while (limitSize <= A.length) {
            var arrayResult = new Array(limitSize);
            for (var j = i; j < limitSize; j++) {
                if (A[j] === A[j + 1]) {
                    tempCount = 0;
                } else {
                    arrayResult.push(A[j]);
                    arrayResult.push(A[j + 1]);
                    tempCount++
                }
            }
            if (tempCount !== 0) {
                count++;
            }
        }
    }
    console.log(count);
    return count;

};