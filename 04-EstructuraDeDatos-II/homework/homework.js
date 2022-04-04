'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null
  
}

function Node(value){
  this.value = value;
  this.next = null;
}


LinkedList.prototype.add = function(value){
  let nuevoNodo = new Node(value)  // creo el nuevo nodo
  let current = this.head      // creo la variable current que apunta a la cabeza
  if(!current){                // Primero evaluo si la lista esta vacia. Pregunto si existe head
    this.head = nuevoNodo        // Si no existe lo creo
    return nuevoNodo    
  }      
 while(current.next){         // mientras exista un valor siguiente
  current = current.next     // quiero que current se mueva. Recorro la cadena
 }
    current.next = nuevoNodo       // Cuando ya no exista un siguiente significa que llegue al final de la lista
                                  // quiero que el nuevo nodo se ubique ahi.
    return nuevoNodo;
                            //si esta en null se le agrega el nuevo nodo creado
}

LinkedList.prototype.remove = function(){
  let current = this.head
  let removed  //puede haber variables sin informacion. en el transcurso del codigo se le asigna un valor

  if(!current) return null   //tambien puede ser if(this.size === 0) si la lista esta vacia y retorna null
  else if(!current.next){  //si la lista tiene un solo nodo ademas de head
    removed = current.value  //se guarda el valor del nodo que se va a eliminar porque es lo que pide retornar
    this.head = null  //hace que la cabeza se vuelva null para eliminar el unico nodo que tenia la lista
    return removed  //devuelve el VALOR no el nodo entero
  }
  while(current.next.next){  //si hay algo en el nodo que le sigue al nodo donde estamos parados
    current = current.next //se le asigna el nodo anterior a current
  }

  removed = current.next.value //se guarda el valor del nodo anterior al que se va a eliminar
  current.next = null //se corta la union entre current.next con current.next.next y se desvincula el nodo que los une
  return removed  
}



LinkedList.prototype.search = function(elemento){
  let current = this.head

  if(!current) return null

  while(current){  //si en current hay algo
    if(current.value === elemento) return current.value   
    else if(typeof elemento === 'function'){ //el nodo puede tener una funcion como valor
      if(elemento(current.value)) return current.value  //se toma el valor del nodo del parametro en el que estoy parado. y si devuelve true se retorna el valor
    }
    current = current.next  //se recorre la lista
  }
  return null

  }



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

//-------------------------------------------------------------------------
//el key nos dice donde guardar la informacion y donde ir a buscarla
//value es el valor asociado a ese key

//contactos de telefono
//key: nombre  value: nro telefono
//key es al que le aplico el hash y el value es lo que se reserva y guarda

//---------------------------------------------------------------------

function HashTable() {
  this.numBuckets = 35
  this.buckets = []
}

HashTable.prototype.hash = function(valor){  //agregar valores
  let suma = 0; 
  for(let i = 0; i < valor.length; i++){
    suma += valor.charCodeAt(i)
    
  }
  return suma % this.numBuckets
}
HashTable.prototype.set = function(key, value){ // guarda el key y value dentro de la tabla o indica donde lo tegno que ir a buscar
  if(typeof key !== 'string') throw TypeError('Keys must be strings')
  let indice = this.hash(key)  //donde se guarda
  
  if(this.buckets[indice] === undefined){  //si el bucket esta vacio
    this.buckets[indice] = {}  // se genera un objeto para prevenir futuras colisiones
  }
  this.buckets[indice][key] = value // se le asigna un value a ese key que se pasó por parámetro. el valor de i es la posicion donde se colocará el objeto y donde se pondrá key:value
 }
HashTable.prototype.get = function(key){ // busca el key para devolver el valor 
  let indice = this.hash(key)  //busca la posicion que se quiere encontrar
  return this.buckets[indice][key] //devuelve el valor de la key que se buscó   
}
HashTable.prototype.hasKey = function(key){ //esta ese valor dentro de la tabla???
  let indice = this.hash(key)
  return this.buckets[indice].hasOwnProperty(key)  //pregunta si existe alguna propiedad dentro del objeto definido que se llamen como la key
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
