'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  /* 10/2 = 5
     5/2= 2
    2/2 = 1

  */
  let arr = [1]   //se inicia en 1 porque no forma parte del factoreo per se
  let factor = 2
    while(factor <= num){
      if(num % factor === 0){
        arr.push(factor)
        num = num / factor
      }else{
        factor++
      }
    }
    return arr
  }

function bubbleSort(array) {  //swapea los valores hasta encontrar el mas grande y con ese recorre la "lista" una vez que terminó de recorrer pone el mas grande al final
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 
  for (let i = 0; i < array.length ; i++) {
    for(let j = 0 ; j < array.length - i - 1; j++){ 
    if (array[j] > array[j + 1]) {
      // swap
      let aux = array[j];
      array[j] = array[j+1];
      array[j + 1] = aux;
    }
   }
  }
  return array;
}



 //[5,7,2,1,8,3,9]
//  i
//    j

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i <array.length; i++){
    let j = i - 1  //variable con la posicion anterior de i
    let aux = array[i] //se guarda el valor

    while(j >= 0 && array[j] > aux){  //mientras j sea mayor o igual a 0 y j en esa posicion es mayor a aux
      array[j + 1] = array[j]  //se gurda en la siguiente posicion el valor de j
      j--; //se reduce el valor porque el que cambia itera de der a izq
    }
    array[j + 1] = aux  //se le asigna el valor de aux a j+1
  } 
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i< array.length;i++){
    let min = i  //i es el valor del bucle, no la posicion
    for(let j = i+1; j < array.length;j++){
      if(array[min] > array[j]){
        min = j  //valor de i toma valor de j
      }
    }
    let aux = array[i]; 
    array[i] = array[min]; //array de i toma la posicion de array de min
    array[min] = aux; // array de min (valor de i) toma la posicion de la posicion de i 
  }
  
 //[1,2,3,5,7,8,9]
//  i
//    j   
return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
