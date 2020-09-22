function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    console.log(textoArray);
}

const titulo = document.querySelector('h2');
typeWriter(titulo);