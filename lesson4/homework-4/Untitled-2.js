// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

var basket = {
    productName: ['Apple', 'Pear', 'Banana', 'Pineapple'],
    productNumber: [3, 5, 2, 8],
    productPrice: [5, 10, 12, 15],
    calcCost: function (productNumber, productPrice) {
        let sum = 0;
        let i = 0;
        for (let i = 1; i < productNumber.length; i++) {
            sum = sum + (productNumber[i] * productPrice[i]);
        }
        return sum;
    }

};

console.log(basket.calcCost(basket.productNumber, basket.productPrice));
