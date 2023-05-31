//Actividad 10
//Sólo lo enlace con la página index.html para mostrar los resultados.

// var nombre="Gustavo";
// var apellido="Valdez";

// console.log(nombre + " " + apellido)


// var numero1=3
// var numero2=4
// var suma=numero1+numero2

// console.log("El resultado de la sumas es " + suma)


// var numero3=suma + 5

// console.log("El resultado de la suma es " + numero3)





//Trabajo Final


function calcularEnvio(){
    var clienteUbicacion=document.getElementById("Ubicación").value;
    var costoEnvio=0;
    if(clienteUbicacion=="2900"){
        costoEnvio=0;
    }else if(clienteUbicacion=="2919" || clienteUbicacion=="2914"){
        costoEnvio=900;
    }else
        costoEnvio=1800;

    document.getElementById("costo-envio").innerHTML= "$" + costoEnvio;
}


function goHome(){
    window.location.href="about:blank";
    alert("Gracias por su visita")
}

// var resultado=window.confirm("¿Estas seguro que deseas abandonar el sitio?");
// if(resultado===true){
//     window.alert("Gracias por su visita");
//     close();
// }else{
//     window.alert("Sigues en nuestro sitio");
// }

