'use strict'
const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const contenedor = document.getElementsByClassName("js-cont-todo");
const elementUl = document.createElement("ul");

let lista = [];
for (let item of to_do) {
    let li = document.createElement('li');

    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");

    let descripcion = document.createElement('span');
    descripcion.textContent = item;

    let obj = {
        elementInput: input,
        elementSpam: descripcion
    }
    lista.push(obj);

    li.append(input, descripcion);
    elementUl.append(li);
}
contenedor.append(elementUl);

for (let i = 0; i < lista.length; i++) {
    let elemento = lista[i];
    elemento.elementInput.addListener('change', function () {
        if (this.checked) {
            elemento.elementSpam.setAttribute("style", "text-decoration: line-through; color: gray;")
        } else {
            elemento.elementSpam.setAttribute("style", "text-decoration: none; color: nose;")
        }
    })

}