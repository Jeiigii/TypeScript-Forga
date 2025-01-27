/*
Operadores aritméticos

Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16

*/

function getSuma(a : number,b : number){
    return a+b;
}
const readline = require('readline-sync');
let num1 : string = readline.question('Introduce el valor de num1: ');
let num2 : string = readline.question("Introduce el valor de num2:  ");
let numero1 : number = parseInt(num1);
let numero2 : number = parseInt(num2); 
let result1 = getSuma(numero1,numero2);

console.log('El resultado de la suma es: ',result1,typeof result1);


/*
Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15

Exercicio 3
Multiplica dous números

*/

function getResta(a : number,b : number){
    return a-b;
}

function getMultiplicacion(a : number, b : number){
    return a*b;
}

let num3 : string = readline.question('Introduce el num3: ');
let num4 : string = readline.question('Introduce el num4: ');

let numero3 : number = parseInt(num3);
let numero4 : number = parseInt(num4);

let result2 = getResta(numero3,numero4);
let result3 = getMultiplicacion(numero3,numero4);
console.log('El resultado de la resta es: ',result2, typeof result2);
console.log('El resultado de la multiplicacion es: ',result3,typeof result3);


/*
Exercicio 4

Lembras para qué se utiliza o seguinte operador += ?, declara unha variable a cal lle sumes un valor e sácao por consola, utiliza dito operador.

Exercicio 5
Lembras para qué se utiliza o seguinte operador -= ?, declara unha variable a cal lle sumes un valor, utiliza dito operador.

*/

const num5 : string = readline.question('Introduce el num5: ');
const num6 : string = readline.question('Introduce el num6: ');

const numero5 = parseInt(num5);
const numero6 = parseInt(num6);

let contador : number = 0;

const result4 : number = getSuma(numero5,numero6);

if(result4>1){
    contador++;
   

}else{
    contador--;
}
console.log('El resultado de la suma es: ',result4,'Contador: ',contador,typeof result4,typeof contador);

/*
Exercicio 6

Non está explicado na aula, pero observa o seguinte resultado:

let variable = 4**2
Qué está facendo a operación?
Aplica esta observación con outro número

*/

let variable1 : number = 4 **2;
let variable2 : number= 3**3;
console.log('El valor de la variable1: ',variable1);
console.log('El valor de la variable2 es: ',variable2);

