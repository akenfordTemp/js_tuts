/*
. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату
в формат '31/12/2025'.
 */
let date = '2025-12-31';
let newDate = date.split('-');
alert(newDate[2] + '/' + newDate[1] + '/' + newDate [0]);
