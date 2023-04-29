// Найти вес всех вещей, цена которых более 80 и количество менее 7

const food = [
    {name: 'Паста болоньеза', weight: 350, price: 68, quantily: 10},
    {name: 'Спагетти с овощами', weight: 350, price: 56, quantily: 8},
    {name: 'Пене с куриным филе', weight: 400, price: 68, quantily: 16},
    {name: 'Пицца «Куриная с ананасами»', weight: 675, price: 139, quantily: 30},
    {name: 'Пицца «Четыре сезона метровая»', weight: 1600, price: 339, quantily: 8},
    {name: 'Пицца «Итальяни»', weight: 740, price: 159, quantily: 2},
    {name: 'Салат «Джонатан с семгой»', weight: 230, price: 87, quantily: 4},
    {name: 'Салат «Цезарь с креветой»', weight: 230, price: 69, quantily: 5},
]

const result = food.filter(({ price, quantily }) => price > 80 && quantily < 7).reduce((acc, { weight, quantily }) => acc += weight * quantily, 0);
console.log(result);