export function getSumaa(a : number,b : number) :number{
    return a + b;
}
export function getRestaa(a : number,b : number) :number{
    return a-b;
}
export function getMulti(a : number,b : number) :number {
    return a*b;
}

export function getDivivion(a : number,b : number):number | string{
    let resultado : number | string;
    
    if(b<0){
        
        //console.log();
        resultado = 'No se puede dividir por 0';

    }else{
        resultado =  a/b;
        
    }
    return resultado
}
