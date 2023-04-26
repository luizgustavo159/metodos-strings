function imprimirData(dia, mes, ano){
    console.log(`${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${ano}`);
}
imprimirData(1, 1, 2021);
imprimirData(18, 2, 2021);