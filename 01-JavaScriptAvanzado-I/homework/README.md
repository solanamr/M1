
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
   //var a = 8  toman estos valores porque todavía no se ejecuta la function de var c. solo se creó, por eso se toman los valores de c de abajo
   //var b  = 9
   //var c = 10    
  var x = 10;
  console.log(x); //10 porque var x se encuentra dentro del scope por lo que puede definirse
  console.log(a); //8 porque las variables estan declaradas fuera de las funciones en la variable c(8,9,10)
  var f = function(a, b, c) {
    b = a; 
    console.log(b); //8 
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9 porque se encuentra dentro de la funcion de var f por lo que este contexto de ejecucion se elimina una vez que termina de ejecutarse y las unicas variables que quedan son las de c
}
c(8,9,10);
console.log(b); //10 contexto global
console.log(x); //1 por x 
```

```javascript
console.log(bar); //undef
console.log(baz); // error porque no esta definida la variable
foo(); // hola
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // franco. si fuese una funcion si seria otro contexto. como es un if no se genera otro contexto y se pisan las variables
```

```javascript
var instructor = "Tony";
console.log(instructor); //tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); 
   }
})() //estos dos parentesis significa que se invoca al instante que se crea; //franco
console.log(instructor); //tony
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash 
    console.log(pm); // reverse flash 
}
console.log(instructor); //the flash porque el if esta dentor del contexto global
console.log(pm); //franco porque la variable es let y nace y muere dentro de ese if
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // nan
7 / 0 // infinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23  primero parsea los 3 a string, luego los concatena, luego hace el 10 a string, luego los transforma a numeros a todos y 33-10 es 23
3>2>1 //false = 3>2 si, devuelve true. true>1, parsea el true a numero. 1>1 no, devuelve false
[] == ![] // true
//[] == false
//[] == 0 
//"" == 0 se parse el array a un string
//0 == 0 ---> true el array se parsea a 0 
```


> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undef no esta definida la variable dentro de este contexto
   console.log(foo()); //2 se toma la funcion que devuelve 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; //undef ya que al ser la funcion false no entra dentro del if y la variable snack esta definida dentro de la funcion y al hacer hoisting da undef 
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //aurelio de rosa porque esta invocando la funcion por lo que entra dentro del objeto obj 

var test = obj.prop.getFullname; 
console.log(test());// juan perez porque se encuentra dentro del contexto global en consola comun. en node retorna undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}



printing(); // 1, 4, 3, 2  porque primero se realiza el primer console.log que es 1, luego se ejecucta el 4 por el otro console.log y luego viene console.log 3 ya que demora 0 segundos en realizarse y es la primera que queda en el stack de los queues y luego viene 2 por ser el más largo en realizarse
```
