const nome = "jose messias junior";
const arrayNome = nome.split(" ");
let nomeFormatado = "";
    for(let item of arrayNome){
        let priLetra = item.slice(0,1);
        let restLetra = item.slice(1);
        nomeFormatado += priLetra.toUpperCase() + restLetra + " ";
    }
    console.log(nomeFormatado.trim());