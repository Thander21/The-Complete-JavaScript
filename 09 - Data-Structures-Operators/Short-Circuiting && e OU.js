//short-circuiting operador OR ||  - o primeiro valor verdadeiro o ultimo valor mesmo não sendo verdadeiro

console.log(3 || 'Rahman');
console.log('' || 'Rahman');
console.log(true || 0);
console.log(undefined || null);

//usando condçao if
const restaurant = { teste: 10 };
const guest1 = restaurant.guest ? restaurante.guest : 10;
console.log('guest1: ', guest1);

//usando short-circuiting
const guest2 = restaurant.guest || 10;
console.log('guest2: ', guest2);

//short-circuiting operador AND &&  -  tras o primeiro valor falso ou o se todos forem verdadeiros tras o ultimo valor

console.log(0 && 'Rahman');
console.log(7 && 'Rahman');
console.log(true && 0);
console.log(undefined && null);

//usando o if
if (restaurant.teste) {
  console.log(restaurant.teste);
}

//usando short-circuiting
restaurant.teste && console.log(restaurant.teste);
