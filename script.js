/*  #oraclenexteducation
    Primer Challenge ONE
    Challenge Encriptador de texto
    Participante: Jaime Ricardo Lagunas Piñón
*/

//Declaración de variables y asignación de inicial
const textArea = document.querySelector(".areaDeTexto");
const mensaje = document.querySelector(".areaDeMensaje");


//Función para enviar mensaje de error en caso de no cumplir con requisito de ingreso de texto.
function mensajeDeError(mensaje) {
    const error = document.querySelector('#error');
    error.textContent = mensaje;
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 3000);
}

//Función para asignar en el boton encriptar del archivo HTML, realiza la validación de caracteres ingresados y llama a función encriptar.
function btnEncriptar(){
    const caracteresOK = /^[a-z \n]+$/.test(textArea.value);
    if (caracteresOK==true){
            const textoEncriptado = encriptar(textArea.value)
            mensaje.value = textoEncriptado;
            textArea.value = "";
            mensaje.style.backgroundImage = "none";
            document.getElementById("btndec").disabled = false; 
            document.getElementById("btncopy").disabled = false; 

    }
    else{
        mensajeDeError('Solo letras, sin acentos ni caracteres especiales y desactiva mayúsculas.');
        textArea.value = "";
        mensaje.value = "";
        document.getElementById("btndec").disabled = true; 
        document.getElementById("btncopy").disabled = true; 
    }
}

//Función que se asigna al boton desencriptar en el archivo HTML, llama a la función que desencripta.
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

//Función para copiar la cadena de texto encriptada 
function btnCopiar(){
    document.getElementById("textarea2").select()
            document.execCommand ("copy");
}
 


/* Política para cifrado o encriptado de cadena de texto
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//Función para encriptar texto, regresa una cadena de texto encriptada
function encriptar(stringEncriptada){
            let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
            stringEncriptada = stringEncriptada.toLowerCase()
            for(let i = 0; i < matrizCodigo.length; i++){
                if(stringEncriptada.includes(matrizCodigo[i][0])){
                    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

                }
            }
            return stringEncriptada;
    }

//Función para desencriptar texto, regresa la cadena de texto desencriptada
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

