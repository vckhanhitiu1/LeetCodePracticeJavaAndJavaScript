var data_input = [1, 2, 3, 4, 5];

function swap_two_number(number1, number2) {
    var temp = number1;
    number1 = number2;
    number2 = temp;
}

function rotate_left(data, number_rotate) {
    for (var i = 0; i < number_rotate; i++) {
        console.log(number_rotate);
        for (var j = 0; j < data.length; j++) {
            if (data[j] < data[j + 1]) {
                swap_two_number(data[j], data[j + 1]);
            }
            break;
            console.log(data);
        }
    }
    return data;
}