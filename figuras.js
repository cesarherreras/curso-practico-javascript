//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return Math.pow(lado,2);
}

//Código del triángulo

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(ladoTriangulo1, baseTriangulo){
    const alturaTriangulo = Math.sqrt(Math.pow(ladoTriangulo1,2) - Math.pow((baseTriangulo/2),2));
    const areaTriangulo = Math.round((baseTriangulo * alturaTriangulo)/2);
    console.log(`La altura del triángulo es: ${alturaTriangulo}`);
    return areaTriangulo;
}

//Código del círculo

function diametroCirculo(radio){
    return 2 * radio; 
}

function perimetroCirculo(radio){
    return Math.PI * diametroCirculo(radio);
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

//Interaccion con HTML
//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Inputlado1"); 
    const input2 = document.getElementById("Inputlado2"); 
    const input3 = document.getElementById("Inputbase"); 

    const value1 = input1.value;
    const value2 = input2.value;
    const base = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, base);
    alert(perimetro);
   }
   
//Triángulo isóceles
function calcularAreaTriangulo(){
    const input1 = document.getElementById("Inputlado1"); 
    const input2 = document.getElementById("Inputlado2"); 
    const input3 = document.getElementById("Inputbase"); 

    const value1 = input1.value;
    const value2 = input2.value;
    const base = input3.value;

    if (value1 === value2){
        const area = areaTriangulo(value1,base);
        alert(area);
    }else{
        alert("Los lados del triángulo no son iguales. La aplicación es para un triángulo isóceles")
    }
}

//CIRCULO 
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const perimetro= perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const area= areaCirculo(radio);
    alert(area);
}