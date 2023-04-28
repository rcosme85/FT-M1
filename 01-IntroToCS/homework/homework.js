'use strict';

function BinarioADecimal(num) {
  let resultado = 0
  let ind = 0
  for (let i = num.length - 1; i >= 0; i--){
    resultado = resultado + (2 ** i * num[ind])
    ind++
  }
  console.log(resultado)
  return(resultado)
}

function DecimalABinario(num) {
  let resto = 0;
  let arr = [];
  let div = 0;
  let rpta = "";
  
  while (num > 0) {
    resto = num % 2;
    div = Math.floor(num / 2);
    arr.push(resto);
    num = div;
  }
  arr.reverse();
  rpta = arr.join('');
//console.log(rpta);
  return rpta;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
