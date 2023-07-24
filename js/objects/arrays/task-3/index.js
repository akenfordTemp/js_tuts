/*
1. Напишите код, который сделает из массива объект
var arr = [
 {name: 'width', value: 10},
 {name: 'height', value: 20}
]
=>
{width: 10, height: 20}
 */

var arr = [
    { name: 'width', value: 10 },
    { name: 'height', value: 20 }
];

const keyValueObject = arr.reduce((result, obj) => {
    result[obj.name] = obj.value;
    return result;
}, {});

console.log(keyValueObject);

