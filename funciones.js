const mensajeInformacion = " ! Solo letras minúsculas y sin acentos.";
const mensajeErrorTextoAEncriptar = "Ningún mensaje fue encontrado.";
const mensajeDeReferenciaInputResultado = "Ingresa el texto que deseas encriptar o desencriptar.";
const mensajeDeReferenciaInputInicial = "Ingresa el texto para Encriptar/Desencriptar aqui...";
const expresionNumerosLetras = /[^a-z0-9\s*]/g;
const remplazoA = "ai";
const remplazoE = "enter";
const remplazoI = "imes";
const remplazoO = "ober";
const remplazoU = "ufat";

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("mensajeInformacion").innerHTML = mensajeInformacion;
    document.getElementById("inputTextoInicial").setAttribute("placeHolder",`${mensajeDeReferenciaInputInicial}`);
    document.getElementById("inputTextoResultado").setAttribute("placeHolder",`${mensajeDeReferenciaInputResultado}`);
});

function soloMinusculasSinAcentos(elemento){
    let cadena = elemento.value;
    console.log(cadena.replaceAll(expresionNumerosLetras, ""));
    elemento.value = cadena.replaceAll(expresionNumerosLetras, "");
    return;
}

function encriptarTexto(){
    let textoParaEncriptar = document.getElementById("inputTextoInicial").value;
    let resultadoTextoEncriptado = textoParaEncriptar.replaceAll("e",remplazoE).replaceAll("i",remplazoI).replaceAll("a",remplazoA).replaceAll("o",remplazoO).replaceAll("u",remplazoU);
    document.getElementById("inputTextoResultado").value = resultadoTextoEncriptado;
}

function desencriptarTexto(){
    let textoParaDesencriptar = document.getElementById("inputTextoInicial").value;
    let resultadoTextoDesencriptado = textoParaDesencriptar.replaceAll(remplazoU,"u").replaceAll(remplazoO,"o").replaceAll(remplazoA,"a").replaceAll(remplazoI,"i").replaceAll(remplazoE,"e");
    document.getElementById("inputTextoResultado").value = resultadoTextoDesencriptado;
}

function copiarTexto(){
    let textoParaCopiar = document.getElementById("inputTextoResultado").value;
    if(textoParaCopiar.length > 0){
        navigator.clipboard.writeText(textoParaCopiar);
    }else{
        console.log("No hay texto que copiar")
    }
    
}

