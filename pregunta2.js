
let altura = 10;
let peso = 5;
function IMC(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    console.log(altura)
    console.log(peso)
    let IMC = parseInt(peso)/(parseInt(altura) ** 2)
    document.getElementById("imc").innerHTML = "El IMC es " + IMC
}


IMC(2)
