var data_input = [10, 9, 2, 5, 3, 7, 101, 18];


function count_the_max_increasing_sub_sequence(nums_list, prev, current_pos) {
    if (current_pos == nums_list.length) {
        return 0;
    }
    let count = 0;
    if (nums_list[current_pos] > prev) {
        count = 1 + count_the_max_increasing_sub_sequence(nums_list, nums_list[current_pos], current_pos + 1);
    }

    var not_count = count_the_max_increasing_sub_sequence(nums_list, prev, current_pos + 1);

    return Math.max(count, not_count);


}

var lengthOfLIS = function(nums_list) {
    count_the_max_increasing_sub_sequence(nums_list, Number.MIN_VALUE, 0);
    console.log(nums_list);
}