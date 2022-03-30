function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

    const promedio = sumaLista/lista.length;
    return promedio;
}