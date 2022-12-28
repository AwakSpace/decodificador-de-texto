let input = document.getElementById('input');
let output = document.getElementById('output');

const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const copiar = document.getElementById('copiar');

criptografar.addEventListener('click', () => {
    let textoParaCriptografar = input.value;
    let criptografia = textoParaCriptografar.replace(/a/g, "ai");
    output.value = criptografia;
})

descriptografar.addEventListener('click', () => {
    output.value = input.value;
})