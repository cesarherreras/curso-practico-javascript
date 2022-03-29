function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = (100 - descuento);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupon = document.getElementById("InputCoupon");
    const resultP = document.getElementById("ResultP");

    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;

    const coupons = [
        {   
            name: "JuanDC_es_Batman",
            discount: 15    
        },
        {
            name:"pero no le digas a nadie",
            discount: 30
        },
        {
            name: "es un secreto",
            discount: 25
        }
    ]

    //Función expresiva
    const isCouponValid = function(coupon){
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValid);
    console.log(userCoupon);

    //Revisa la existencia del cupón
    //Find entrega el primer elemento que cumple la condición en el array
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    }else{
        const discountValue = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
    }
}

