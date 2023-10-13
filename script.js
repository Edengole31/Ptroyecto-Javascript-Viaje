import { barcelona, paris, roma, londres } from './ciudades.js'

//seleccion de elementos del DOM (html)

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agregamos en evento a cada enlace
console.log(enlaces)
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //removemos el active
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        //agregamos el active

        this.classList.add('active')

        //traer la información del objeto

        let contenido = obtenerContenido(this.textContent)

        //mostrar el contenido en el DOM

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });



});
//enlace.addEventListener escucha al html
//funcion para traer la información correcta desde cuidades.js

function obtenerContenido(enlace) {

    let contenido = {    //contiene el objeto al que se referencia en enlace

        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres

    };
    return contenido[enlace];
}





