let numero = "1,350,000";
let numeroAlterado= numero;
while(numeroAlterado !== numeroAlterado.replace(",", ".")){
    numeroAlterado = numeroAlterado.replace(",", ".");
}
console.log(numeroAlterado);
//teste original
//console.log(numero);