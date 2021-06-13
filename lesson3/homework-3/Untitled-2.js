// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


let arr = [];

productCount = parseInt(prompt("Введите Кол-во позиций товаров: "))
for (let i = 0; i < productCount; i++) {
    arr[i] = []; // создаем подмассив
    for (let j = 0; j < 3; j++) {
        if (j == 0) {
            arr[i][j] = prompt("Введите название товара: "); // заполняем подмассив
        }
        if (j == 1) {
            arr[i][j] = parseInt(prompt("Введите Кол-во товаров: ")); 
        }
        if (j == 2) {
            arr[i][j] = parseInt(prompt("Введите стоимость товара: ")); 
        }
    }
}
console.log(arr);

function countBasketPrice(basketArr, productCount) {
    let sum = 0;
    let i = 0;
    let j = 1;
    for (let i = 0; i < productCount; i++) {
        sum = sum + (basketArr[i][j] * basketArr[i][j + 1]);
    }
    return console.log(sum);

}

countBasketPrice(arr, productCount);
