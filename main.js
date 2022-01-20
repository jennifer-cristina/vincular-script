//alert ("Olá Mundo!");

const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const ok = document.getElementById('ok');

function trocarParaCorVermelho () {
    titulo.textContent = nome.value;   
    titulo.classList.add('vermelho');
    titulo.classList.remove('azul', 'verde')
}

function trocarParaCorAzul () {
    titulo.textContent = nome.value;
    titulo.classList.add('azul');
    titulo.classList.remove('vermelho', 'verde')
}

function trocarParaCorVerde () {
    titulo.textContent = nome.value;
    titulo.classList.add('verde');
    titulo.classList.remove('azul', 'vermelho')
}

vermelho.addEventListener('click',  trocarParaCorVermelho);
azul.addEventListener('click', trocarParaCorAzul);
verde.addEventListener('click', trocarParaCorVerde);
