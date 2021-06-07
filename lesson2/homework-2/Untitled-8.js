// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

var val = prompt("Введите число");
var pow = prompt("Введите степень");

function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
}

alert(power(val, pow));