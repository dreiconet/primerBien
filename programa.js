function SumaDosNumeros(primerNumero, segundoNumero){
    var suma = primerNumero + segundoNumero;
     return suma;
 
 }
 console.log(SumaDosNumeros(1,2));
 
 function RestaDosNumeros(primerNumero,  segundoNumero){
     var res = primerNumero - segundoNumero;
     return res;
 
 }
 console.log(RestaDosNumeros(6,2));
 
 function DevolverMasGrande(primerNumero, segundoNumero){
     var numeroMasGrande = primerNumero
     if (primerNumero > segundoNumero){
         return primerNumero
     } else {
         return segundoNumero
         
     }
 }
 console.log(DevolverMasGrande(8,13));
 
 function espar(numero){
     var res = numero % 2;
     if (res == 0) {
         return true
     } else {
         return false
     }
 
 }
 console.log(espar(3));
 
 function mayorDeVeinte(numero){
     var res = numero > 20;
     return res;
 }
 console.log(mayorDeVeinte(18));
 
 var nombre = "Jean";
 var apellido = "Sandrea";
 
 function nombreCompleto(nombre, apellido){
     return (nombre + " " + apellido);
 }
 console.log(nombreCompleto(nombre, apellido));
 
 function capitalizar(palabra){
     var resultado = palabra[0].toUpperCase() + palabra.slice(1)
     return resultado;
 
 }
 console.log(capitalizar("maracaibo"));
 
 function primeraPalabra(frase){
     var resultado = frase.split (" ", 1);
     return resultado;
 
 }
     console.log(primeraPalabra("Maracaibo la ciudad"));