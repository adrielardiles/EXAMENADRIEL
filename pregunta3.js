let productos = [
    {nombre : "Leche", cantidad : 4, precio: 2.5},
    {nombre : "Gaseosa", cantidad:2,precio:5.3},
]

function calcTotal (){
    let suma = 0;

    let conteo = 0;
    
    for(let i = 0; i < productos.length; i++){ 
        let total1 = productos[i].cantidad * productos[i].precio
        console.log(total1)
        console.log("iteracion")
        conteo++;
        suma = suma + total1 
        console.log(suma)
        console.log(conteo)
        console.log("hola")
    }


    console.log(conteo)

    document.getElementById("total").innerHTML = suma/conteo




}

calcTotal()