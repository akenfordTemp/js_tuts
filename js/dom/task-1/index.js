/* 1. Нужно создать следующую структуру с использованием DOM методов: appendChild, createElement, createTextNode, setAttribute:*/
/*<div>
    Привет, <span style="font-size:150%">Лена</span>
</div>*/
const newElement  = document.createElement('div');
newElement.innerHTML = "<span style=\"font-size:150%\">Лена</span>";
document.body.append(newElement);


const textNote = document.createTextNode('Привет, Лена');
document.body.append(textNote);

/* 2. Найти на странице все <b> и изменить их размер на 15px. Использовать getElementsByTagName, setAttribute */