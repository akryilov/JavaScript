
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum': return "Sum: " + (a + b);
        case 'sub': return "Sub: " + (a - b);
        case 'div': return "Div: " + (a / b);
        case 'mult': return "Mult: " + (a * b);
    }
}

var a = prompt("Введите первое число");
var b = prompt("Введите второе число");

alert(mathOperation(a, b, 'sum'));
alert(mathOperation(a, b, 'sub'));
alert(mathOperation(a, b, 'div'));
alert(mathOperation(a, b, 'mult'));