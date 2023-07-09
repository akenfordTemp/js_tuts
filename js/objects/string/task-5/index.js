/*
Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен
работать с любыми аналогичными строками.
 */
function camelize(str) {
    return str.split('_').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}
console.log(camelize('var_test_text'));

