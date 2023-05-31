/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.*/


var edad = parseInt(prompt("Introduce tu edad"));  
    if (edad > 18) {
        
        console.log("Puedes conducir");
    }    
else {
    
    alert("Introduce un numero válido");
}


/*2. Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”. */

let nota = parseInt (prompt ("digite un numero del 0 al 10"));

if (nota >= 0 || nota <=10) {

switch (nota) {

        case 0:
        case 1:
        case 2:
         document.write("muy deficiente");
        break;
        case 3:
        case 4:
         document.write("insuficiente");
        break;
        case 5:
        case 6:
         document.write("suficiente");
        break;
        case 7:
         document.write("bien");
        break;
        case 8:
        case 9:
         document.write("notable");
        break;
        case 3:
        case 4:
         document.write("sobresaliente");
        break;
          


           default:
               alert("numero erroneo")
               break;

 }
 } else {

            !isNaN (nota) 
            alert ("introduce un numero valido")
        }

 
/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión - */


var resultado = ""
do {
    var cadena = prompt("Introduce una cadena");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));

/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

var suma = 0;
do {
    var numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
document.write(suma);

/*5.Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

var resto = 0;
var letra = "";
do {
    var numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
            }
        }
        alert("Numero: " + numero + ", Letra: " + letra);
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
}
while (numero != undefined);

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….  */

var i, rep;
for (i = 1; i <= 30; i++) {
    for (rep = 0; rep < i; rep++) {
        console.log(i);
    }
    
}

/*7.  Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

let numero = parseInt(prompt("ingrese el numero"))

if (numero <= 50) {
    for (let i = numero; i > 0 ; i ++)
    { 
        console.log(i.toString(). repeat(i));
          
    }
}
    else{
        console.log("error");
    }



/*EJERCICIO 8: Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
var numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        for (i = 0; i <=numrep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}



/*EJERCICIO 9: Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
document.write("<hr>");
var i;
var j = 500;
var rep = 0;
for (i = 1; i <= j; i++) {
    document.write(i);
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}


/*EJERCICIO 10: Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

// DECLARAMOS LAS VARIABLES
var i,j;
var filas = Number(prompt("Introduce numero de filas"));
var colum = Number(prompt("Introduce numero de columnas"));
var res = filas * colum;
document.write("<table border>");
for (i = 0; i < filas; i++) {
    document.write("<tr>");
    for (j = 0; j < colum; j++) {
        document.write("<td>");
        document.write(res);
        res--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// EJERCICIO 11:Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));

var maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

//EJERCICIO 12: Realiza un script que genere un número aleatorio entre 1 y 99
var num = Math.floor((Math.random() * 99) + 1);
document.write(num);


//EJERCICIO 13: Realiza un script que pida un texto y lo muestre en mayúsculas.
var texto = prompt("Introduce el texto");
document.write("TEXTO: " + texto.toUpperCase() + ".");

/*EJERCICIO 14: Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
 Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;    
var caracter;
var i;
for (i = 0; i < numchar; i++) {
    caracter = cadena.charAt(i);    
    if (i == numchar - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}


//EJERCICIO 15: Realiza un script que cuente el número de vocales que tiene un texto.
var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;    
cadena = cadena.toUpperCase();  
var car;
var contador = 0;
var i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

/*EJERCICIO 16: Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh” */
var cadena = prompt("Introduce un Texto:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);   
    salida = car + salida;
}
document.write(salida);

//EJERCICIO 17: 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
var vocales = ["a", "e", "i", "o", "u"];
var texto = prompt("Introduce un texto");
var textomin = texto.toLowerCase();
var posicion = 0;
var parar = false;
for (var i = 0; i < textomin.length; i++) {
    for (var j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);

