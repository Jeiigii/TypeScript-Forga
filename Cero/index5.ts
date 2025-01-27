/*
Como sabemos, podemos escoller as veces con qué tipo de función traballar. Utiliza ambas:
Coa palabra clave “function <nome de función>”, lembra utilizar para devolver o resultado a palabra clave ‘return’
Sendo Arrow-functions “ ( ) => { <instruccións> } “ , se ten máis dunha línea esta tamén debe levar a palabra clave “return”

Lembra que toda función, devolve un resultado que terá que ser almacenado noutra variable.

Nos seguintes exercicios, podes tratar de comenzar a integrar “import” e “export”

Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16. Para iso, crea as funcións A e B para sumar estas dúas variables.

Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15. Para iso, crea as funcións A e B para restar estas dúas variables.

Exercicio 3
Multiplica dous números. Para iso, crea as funcións A e B para multiplicar estas dúas variables.


Repite os exercicios anteriores, pasando como parámetros os valores numéricos


COS EXERCICIOS DA ESTRUCTURA IF

Realiza de novo estes exercicios integrándoo nunha función.
Ves posible realizar diferentes funcións dentro destas??, se é así, trata de implementalas

*/

import { getSumaa,getRestaa,getMulti,getDivivion } from "./functions";

let n1 : string = readline.question('Introduce el valor de n1: ');
let n2 : string = readline.question('Introduce el valor de n2: ');
let numerooo1 = parseInt(n1);
let numerooo2 = parseInt(n2);

let resultado1 : number = getSumaa(numerooo1,numerooo2);
let resultado2 : number = getRestaa(numerooo1,numerooo2);
let resultado3 : number = getMulti(numerooo1,numerooo2);
let resultado4 : number | string = getDivivion(numerooo1,numerooo2);

console.log('El resultado de la suma es: ',resultado1);
console.log('El resultado de la resta es: ',resultado2);
console.log('El resultado de la multi es: ',resultado3);
console.log('El resultado de la division es: ',resultado4);