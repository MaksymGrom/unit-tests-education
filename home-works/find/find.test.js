const find = require('./find');

test('Получить ответ 1 если мы ищем 2 в [1, 2, 3]', function() {
    const arr = [1, 2, 3];

    expect(find(arr, 2)).toBe(1);
});

test('Получить ответ null если мы ищем 5 в [1, 2, 3]', function() {
    const arr = [1, 2, 3];

    expect(find(arr, 5)).toBe(null);
});

test('Получить ответ null если мы ищем не существующий элемент в массиве', function() {
    const arr = [1, 2, 3, 8, 10, 11, 22, 1 ,2 ,3];

    expect(find(arr, 6)).toBe(null);
});

test('Получить ответ null если мы передали не массив', function() {
    expect(find(123, 2)).toBe(null);
});
