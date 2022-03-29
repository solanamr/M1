'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var suma = 0;
var numBin = num.split('').reverse().join('') //se realiza el reverse porque se tien que empezar a contar de derecha a izquierda

for(var i = 0; i < numBin.length; i++){
  suma = suma + (numBin[i] *2 ** i)
 }
 return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = []
  if(num <= 0) return '00000000'

  while(num > 0){
    array.unshift(num % 2)
    Math.floor(num / 2 ) //redondea al entero mas chico hacia abajo porque si es impar queda con decimal y el floor redondea hacia abajo
  }
  return array.join('') 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}