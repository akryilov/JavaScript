// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let a = 0;
var isPrime = true;
var i = 2;

while (a <= 100) {
    if (a == 2) console.log(a);
    while (i < a) {
        isPrime = true;
        i++;
        coun = 2;
        while (coun < i) {
            if (a % coun == 0) isPrime = false;
            coun++;
        }
        if (isPrime == true) console.log(a);
    }
    a++;
}


