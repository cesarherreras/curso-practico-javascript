//Funciones helpers - utils
function esPar(numero){
    return (numero % 2 === 0);
}

//Función para el cálculo de la mediana 
function medianaSalarios(lista){
    let mediana;
    const mitad = parseInt((lista.length)/2);
    if (esPar(lista.length)){
        const posicion1 = lista[mitad - 1];
        const posicion2 = lista[mitad];
        mediana = (posicion1 + posicion2)/2;
    }else{
        mediana = lista[mitad];
    }
    return mediana;
}

//Array de salarios
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    });

//Ordenar el Array anterior
const salariosColSorted = salariosCol.sort((a,b) => {return a - b});

//Mediana del top 10% más alto
const spliceStart = parseInt(salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});