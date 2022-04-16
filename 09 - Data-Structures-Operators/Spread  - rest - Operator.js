//adicionar um array inteira dento de outra array

const arr = [7, 8, 9];
const newarr = [1, 2, 3, ...arr];
console.log('newarr: ', newarr);

const newarr2 = [3, 4, 5];
newarr2.push(...arr);
console.log('newarr2: ', newarr2);

//copiar a array pra outra variavel
const newarr3 = arr;
const newarr4 = [...arr];
newarr3[2] = 1;
console.log(newarr3, arr);
console.log('newarr4: ', newarr4);

//iterables, strings, arrays, map, set, NOt Object
const str = 'Rahman';
const letter = [...str, ' ', 'B.'];
console.log('letter: ', letter);
console.log(...str);

//rest operators destructure
[a, b, ...others] = letter;
console.log(others, a, b);

//rest operators funcion
function add(...numbers) {
  console.log(numbers);
}
add(1, 2, 3, 4, 5);
add(3, 4);
