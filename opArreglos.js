let numeros = [1,2,3,4,5,6]; 

numeros.forEach(function (elemento, indice)
{
    document.write(elemento + '_' + indice 
    + '<br>'); 
}); 



let numeros2 = numeros.map(function(elemento) {
    return elemento; 
});  */


/* document.write('<br>' + numeros2); 

let frutas = ['mango', 'fresa']; 
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>' ); 
document.write('<br>' + frutas2 + '<br>' ); 

frutas2.push('pera'); 
document.write('<br>' + frutas + '<br>' ); 
document.write('<br>' + frutas2 + '<br>' );  */




/* let frutas = ['mango', 'fresa']; 
let frutas2 = frutas.map(function(elemento){
    return elemento; 
});

document.write('<br>' + frutas + '<br>' ); 
document.write('<br>' + frutas2 + '<br>' ); 

frutas2.push('pera'); 
document.write('<br>' + frutas + '<br>' ); 
document.write('<br>' + frutas2 + '<br>' ); */


/* 
let numero2 = numeros.map()

 

const a = []; 
const b = [1, true, "hola", ["a","b","c"]];  
console.log(a); 
console.log(b.length);
console.log(b[0]); 


const c = Array.of("a", "b", "c",9,8,7);

console.log(c); 

const d = Array(100).fill(false); 
console.log(d); */


/* document.write
( '<br>' + numeros.includes(325) + '<br>' ); 


let numerosPares = numeros.filter((elemento) => {
    /* if(numero % 2 == 0){
        return: true; 
    }else{
        return: false; 
    }
    
    return elemento % 2 == 0; */ 

   /*  if(elemento > 10 ) {
        return true; 
    }
}); 


document.write('<br>' + numerosPares + '<br>'); */
 

let frutas = ["mango", "papa", "piña", "maracuya"]; 




/* let frutasFiltro = frutas.filter((fruta) => {

    if(fruta.includes('go') == true) {
        return true; 
    }
})


document.write(frutasFiltro);  */


/* let other = [1,5,8,7,3,39]; 
document.write(other.sort()); */
/* 
let other = [1,5,8,7,3,39]; 
document.write(other.reverse()); */



/* let other = [1,5,8,7,3,39]; 
document.write(other.reverse());


let frutaEncontrada = frutas.find((elemento) => {
    return elemento.includes('ma'); 
}); 

document.write(frutaEncontrada); 


























