/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn(array[i], i, array);
 }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
	var new_array = [];
    for (var i = 0; i < array.length; i++) {
        new_array[i] = fn(array[i], i, array);
    }
    return new_array;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
	var a = initial || array[0],
	i = initial ? 0 : 1;

for (; i < array.length; i++) {
	a = fn(a, array[i], i, array);
}

return a;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {	
    var new = [];
    for (var key in obj) {
        key = key.toUpperCase();
        arr.push(key);
    }
    return new;
}


export {
    forEach,
    map,
    reduce,
    upperProps
  };
