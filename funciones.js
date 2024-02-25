const mensajeInformacion = "Solo letras minúsculas y sin acentos.";
const mensajeErrorTextoAEncriptar = "Ningún mensaje fue encontrado.";
const mensajeDeReferenciaInputResultado = "Ingresa el texto que deseas encriptar o desencriptar.";
const mensajeDeReferenciaInputInicial = "Ingresa el texto para Encriptar/Desencriptar aqui...";

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("mensajeInformacion").innerHTML = mensajeInformacion;
    document.getElementById("inputTextoInicial").setAttribute("placeHolder",`${mensajeDeReferenciaInputInicial}`);
});

