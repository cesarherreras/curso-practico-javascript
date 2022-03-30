function calculoMediana(lista){
    const mitadLista = lista.length / 2 ;
    let mediana;

    //Compara los valores del array
    //Si a - b > 0, b va antes que a
    //Si a - b < 0, a va antes que b
    lista.sort(function(a , b){
        return a - b;
    });

    console.log(lista);
    if(lista.length % 2 === 0){
        mediana = (lista[mitadLista - 1] + lista[mitadLista]) / 2;
        console.log(`La mediana es: ${mediana}`);
    }else{
        const mitadListaImpar = Math.floor(mitadLista);
        mediana = (lista[mitadListaImpar]);
        console.log(`La mediana es: ${mediana}`);
    }
    return mediana;
}   



