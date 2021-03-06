const sum = require('./sum');

describe('Функционал суммирования', () => {
    test('Сумма двух чисел вернет новое число согласно математике: 2 + 5 = 7', () => {
        expect(sum(2, 5)).toBe(7);
        expect(sum(2, -5)).toBe(-3);
        expect(sum(-2, -5)).toBe(-7);
    });

    test('Передача булева типа должна правильно быть обработана: true + 5 = 6', () => {
        expect(sum(true, 5)).toBe(6);
    });

    test('Передача строки типа должна правильно быть обработана: "-1" + 5 = 4', () => {
        expect(sum("-1", 5)).toBe(4);
    });

    test('Передача Infinity должна правильно быть обработана: Infinity + 5 = Infinity', () => {
        expect(sum(Infinity, 5)).toBe(Infinity);
    });

    test('Передача Infinity разного знака должна правильно быть обработана: Infinity + -Infinity = NaN', () => {
        expect(sum(Infinity, -Infinity)).toBe(NaN);
    });

    test('Передача NaN должна правильно быть обработана: NaN + 3 = NaN', () => {
        expect(sum(NaN, 3)).toBe(NaN);
    });

    test('Передача одного параметра должна правильно быть обработана: 4 = 4', () => {
        expect(sum(4)).toBe(4);
    });

    test('В функцию можно передать массив чисел и получить их сумму', () => {
        expect(sum([2, 3, 4, 5])).toBe(14);
    });

    test('При передаче массива, второй параметр игнорируется', () => {
        expect(sum([2, 3, 4, 5], 7)).toBe(14);
    });

    test('При вызове без параметров будет ошибка', () => {
        expect(() => sum()).toThrowError('Функция sum жидает хотя бы один параметр');
    });
});

