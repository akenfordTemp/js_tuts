/* 1. Нужно создать следующую структуру с использованием DOM методов: appendChild, createElement, createTextNode, setAttribute:*/
/*<div>
    Привет, <span style="font-size:150%">Лена</span>
</div>*/
const divElement  = document.createElement('div');
const textNode = document.createTextNode('Привет, ');
const spanElement  = document.createElement('span');
spanElement.setAttribute('style', 'font-size:150%');
const nameNode = document.createTextNode('Лена');
divElement.appendChild(textNode);
spanElement.appendChild(nameNode);
divElement.appendChild(spanElement);
document.body.appendChild(divElement);

