
function edad() {
    const anhoNaci = document.getElementById("anho").value

    if(anhoNaci !== ""){
        const anhoActual = new Date().getFullYear
        const edad = parseInt(anhoNaci) - parseInt(anhoActual)
        document.getElementById("edad").innerHTML = edad
    }

}

edad()