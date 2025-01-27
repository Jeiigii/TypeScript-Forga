/*
Operadores lóxicos

Exercicio
Utiliza o operador > para comparar dous números, declarando previamente dúas variables numéricas.

Fai a proba:
Se é menor.
Se é igual.
E se é maior.
Exercicio
Utiliza o operador < para comparar tres números, é dicir, inicialmente podemos comparar dous números e posteriormente o resultado desta.

Compróbao para diferentes casos.
Exemplo:
Tendo num1, num2 e num3, poderíamos comparar:

Primeiro num1 e num2, e almaceno o resultado nunha variable result1
Segundo comparo num2 e num3, almacenándo en result2
Finalizando ca comparación destes resultados previos, result1 con result2 Nota:
A comparación dos números darán un resultado lóxico, polo que deberemos facer a comparación final mediante === ou == ou != ou !== , xa que os resultados previos foron ou TRUE ou FALSE. Ou tamén utiliza operadores lóxicos da seguinte páxina

*/
const readline2 = require('readline-sync');
let numm1 : string = readline2.question('Introduce el valor de num1: ');
let numm2 : string = readline2.question('Introduce el valor de numm2: ');
let numm3 : string = readline2.question('Introduce el valor de numm3: ');

let nummero1 : number = parseInt(numm1);
let nummero2 : number = parseInt(numm2);
let nummero3 : number = parseInt(numm3);

let menor : number = nummero1;

if(nummero2 < menor && nummero3>nummero2 ){
    menor=nummero2
}else if(nummero3 < menor && nummero1>nummero3){
    menor=nummero3;
}else{
    menor=nummero1;
}
console.log('El numero menor de los tres es: ',menor);


/*
Operadores incremento_decremento

Exercicio 
Utilizando o operador ++, incrementa o valor da varible:

Colocándoo posterior á variable, é dicir: variable++,
Colocándoo anterior á variable, é dicir: ++variable
Cáles son as variacións de utilizar unha opción respecto a outra?

Exercicio
Utilizando o operador --:

Colocándoo posterior á variable, é dicir: variable--
Colocándoo anterior á variable, é dicir: --variable
Cáles son as variacións de utilizar unha opción respecto a outra?

*/

let numm4 : string = readline2.question('Introduce el valor de numm4: ');

let nummero4 : number = parseInt(numm4);

let variable : number = 0;

if(nummero4>0){
    variable++;
}else{
    variable--;
}
console.log("El nummero4 es: ",nummero4,'Variable: ',variable);