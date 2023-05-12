let titulo = document.querySelector(".titulo");
let texto = "Encriptador de texto...";
let indice = 0;
let escribiendo = true;
let barraVisible = false;

function escribir() {
    if (escribiendo) {
        titulo.textContent = titulo.textContent.replace("|", "") + texto.charAt(indice);
        indice++;
        if (indice >= texto.length) {
            escribiendo = false;
            setTimeout(borrar, 2000);
        }
    } else {
        titulo.textContent = titulo.textContent.slice(0, -1);
        indice--;
        if (indice <= 0) {
            escribiendo = true;
            setTimeout(escribir, 2000);
        }
    }
    if (escribiendo) {
        barraVisible = !barraVisible;
        if (barraVisible) {
            titulo.textContent += "|";
        } else {
            titulo.textContent = titulo.textContent.replace("|", "");
            }
    }
}

    let intervalo;

function borrar() {
    clearInterval(intervalo);
    intervalo = setInterval(escribir, 100);
}

borrar();


document.getElementById("ingreseTexto").addEventListener("input", function() {
    let exclamacion = document.querySelector(".exclamacion");
    if (this.value.match(/[^a-z 0-9 ñ]/)) {
        exclamacion.style.color = "red";
        exclamacion.classList.remove("vibrar");
        void exclamacion.offsetWidth;
        exclamacion.classList.add("vibrar");
    } else {
        exclamacion.style.color = "";
        exclamacion.classList.remove("vibrar");
    }
});

document.getElementById("encriptar").addEventListener("click", function() {
    let texto = document.getElementById("ingreseTexto").value;

    if (texto === "") {
        return;
    }

    let exclamacion = document.querySelector(".exclamacion");
    if (texto.match(/[^a-z 0-9 ñ]/)) {
        this.disabled = true;
        exclamacion.classList.remove("vibrar");
        void exclamacion.offsetWidth;
        exclamacion.classList.add("vibrar");
        return;
    } else {
        this.disabled = false;
    }

    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/o/g, "ober")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/u/g, "ufat");

    document.querySelector("#resultado").innerHTML = textoEncriptado;
    document.querySelector(".resultado").innerHTML = "";

    let botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";

    botonCopiar.classList.add("boton-copiar");

    botonCopiar.addEventListener("click", function() {
        navigator.clipboard.writeText(textoEncriptado);
        document.querySelector("#resultado").innerHTML = "¡Texto Copiado!";
        document.getElementById("ingreseTexto").value = textoEncriptado;
    });

    document.querySelector("#resultado").appendChild(botonCopiar);
});


document.getElementById("desencriptar").addEventListener("click", function() {
    let texto = document.getElementById("ingreseTexto").value;

    if (texto === "") {
        return;
    }
    
    let exclamacion = document.querySelector(".exclamacion");
    if (texto.match(/[^a-z 0-9 ñ]/)) {
        this.disabled = true;
        exclamacion.classList.remove("vibrar");
        void exclamacion.offsetWidth;
        exclamacion.classList.add("vibrar");
        return;
    } else {
        this.disabled = false;
    }

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                .replace(/ober/g, "o")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ufat/g, "u");

    document.querySelector("#resultado").innerHTML = textoDesencriptado;
    document.querySelector(".resultado").innerHTML = "";

    let botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";

    botonCopiar.classList.add("boton-copiar");

    botonCopiar.addEventListener("click", function() {
        navigator.clipboard.writeText(textoDesencriptado);
        document.querySelector("#resultado").innerHTML = "¡Texto Copiado!";
        document.getElementById("ingreseTexto").value = textoDesencriptado;
    });

    document.querySelector("#resultado").appendChild(botonCopiar);
});

document.getElementById("clear").addEventListener("click", function() {
    location.reload();
});

document.querySelector(".titulo").addEventListener("click", function(){
    location.reload();
});