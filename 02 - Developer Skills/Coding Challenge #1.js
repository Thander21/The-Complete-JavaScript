'use strict';

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

//print "... 17ºC in 1days ... 21ºC in 2 days ... 23ºC in 3 days ...

function prevision(temps) {
  let text = '... ';
  for (let i = 0; i < temps.length; i++) {
    text += `${temps[i]}ºC in ${i + 1} days ... `;
  }
  return text;
}

console.log(prevision(temp2));
