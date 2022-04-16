const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ mainIndex, startIndex, time, address }) {
    console.log(`Pedido recebido as ${time}, para entrega na ${address}
      item ${this.starterMenu[startIndex]} e ${this.mainMenu[mainIndex]}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Rua valdemiar 756, apt 56',
  mainIndex: 2,
  startIndex: 2,
});

//desestruturação de um array
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);
console.log(typeof a, typeof b, typeof c, typeof arr);

//Desestruturação de algusn itens da array
let [first, second] = restaurant.categories;
const [, , third, last] = restaurant.categories;
console.log(first, second);
console.log(third, last);
console.log(second, last);

//torcando de vlaores na array
[second, first] = [first, second];
console.log(first, second);

const [start, mainCourse] = restaurant.order(2, 0);
console.log('start, mainCourse: ', start, mainCourse);

//desestruturando arrays dentro de arrays = para definir valor padrão caso não exista
const array = [1, 2, 4, [5, 7, 8], 9];
const [, , j, [, k], , l = 1, m] = array;
console.log('m: ', m);
console.log('l: ', l);
console.log('j: ', j);
console.log('k: ', k);

//desestruturando Objetos = para definir valaores padrão caso não exista e : para renomear
const {
  name: nomeDorestaurante,
  openingHours,
  categories,
  menu = [],
  starterMenu: starter = [],
} = restaurant;
console.log('starter: ', starter);
console.log('menu: ', menu);
console.log('categories: ', categories);
console.log('openingHours: ', openingHours);
console.log('name: ', nomeDorestaurante);

//desestruturando Objetos = pcom uma variavel mutavel
let x = 999;
let y = 888;
const obj = { x: 23, y: 17, z: 45 };
console.log('x, y: ', x, y);

({ x, y } = obj);
console.log('x, y: ', x, y);

//desestruturando objeto aninhado
({
  fri: { open, close },
} = openingHours);
console.log(open, close);
