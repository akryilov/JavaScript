// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. 
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// Не до конца понял задание. Наверное правильно реализовывать данное задание через классы и их наследование product -> catalog; product -> basket...

var product = {
    productId: [0, 1, 2, 3, 4],
    productName: ['Apple', 'Pear', 'Banana', 'Pineapple'],
};

var catalog = {
    productName: ['Apple', 'Pear', 'Banana', 'Pineapple'],  // по идее этот параметр нужно брать из объекта "Продукт"
    productPrice: [5, 10, 12, 15],
    productNumber: [3, 5, 2, 8],
    catalogCategory: ['Bred', 'Frut', 'Fish', 'Cosmetics'], // категория товара
};

var basket = {
    productName: ['Apple', 'Pear', 'Banana', 'Pineapple'], // по идее этот параметр нужно брать из объекта "Продукт"
    productNumber: [3, 5, 2, 8], // по идее этот параметр нужно брать из объекта "Продукт"
    productPrice: [5, 10, 12, 15], // по идее этот параметр нужно брать из объекта "Продукт"
    calcCost: function (productNumber, productPrice) {
        let sum = 0;
        let i = 0;
        for (let i = 1; i < productNumber.length; i++) {
            sum = sum + (productNumber[i] * productPrice[i]);
        }
        return sum;
    }
};
