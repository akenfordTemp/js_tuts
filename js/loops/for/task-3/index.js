/*
Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите
произведение элементов этого массива
 */
let arr = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < arr.length; i++){
    result = result * arr[i];
}
alert(result);