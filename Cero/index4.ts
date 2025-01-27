/*
Exercicio 1
Suma dous variables, unha que valga 4 e outra que valga 16. Para poder sumar, tes que integrar unha condición:
 Esta suma vai depender doutra variable numérica, esta debe ser maior de 40, polo que integra esta para que se faga posible.
 */



const number1 : number = 4;
const number2 : number = 43;
let suma : number = 0;
let flag : boolean = false;
if(number2>40){
    suma=number1+number2;
    flag=true;
    console.log('El numero es maior que 40, se puede sumar, resultado de la suma es: ',suma);

}else{
    console.log("El number1 es menor que 40, no se puede sumar");
}
/*
Exercicio 2
Resta dúas varibles, unha que valga 2 e outra que valga 15. Para poder restar, tes que integrar unha condición:
Esta resta vai depender doutra variable numérica, esta debe ser menor de 40, polo que integra esta para que se faga posible.
*/
let number3: number= 2;
let number4 : number = 15;

let resta : number = 0;

if(number4<40){
    resta=number3-number4;
    console.log('El numero es menor que 40.El resultado de la resta es: ',resta)
}else{
    console.log('El numero es maior que 40 por lo tanto no se puede restar.');
}

/*
Exercicio 3
Multiplica dous números. Para poder multiplicar, tes que integrar unha condición:
Esta multiplicación vai depender se a suma do exercicio 1 foi posible.
Pista: tal vez teñas que integrar unha nova variable dándolle un valor booleano.
*/

let number5 : number = 13;
let number6 : number = 13;

let multi : number = 0;

if(flag==true){
    multi=number5*number6;
    console.log('El resultado de la multi es: ',multi);
}else{
    console.log('No se pudo hacer la multi por que no se pudo hacer la suma en el ejercicio1.');
}