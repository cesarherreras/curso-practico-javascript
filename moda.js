function calcularModa(lista){
    const listaCount = {};

    //Recorrer el array
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1; 
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount);
    listaArray.sort((a,b) => {return a[1] - b[1]});
    const moda = listaArray[listaArray.length - 1];
    return moda;
}