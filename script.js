// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

// строку
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа 
// (по умолчанию справа).
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, 
// и если каких-то аргументов нет,
//  то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть
//   разное в зависимости от того условия, по которому не прошла проверка.

// Результат вызова функции нужно вывести в консоль — после завершения функции.

// Например:

// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки,
//  нужно строку обрезать при помощи метода substr

function padString(str, newLength, symb, bool = true) {

	if (!str || typeof str !== "string") return "ERROR! you have entered wrong data";
	if (!newLength || typeof (newLength) != "number" || isNaN(newLength)) return "ERROR! you have entered wrong amount of symbols";
	if (typeof (bool) !== "boolean") return "ERROR! You should enter 'true/false'.";
	if (str.length >= newLength) return str.substr(0, newLength);
	if (!symb || symb.length > 1) return "ERROR! Enter any symbol, please.";

	let newStr = '';

	for (let i = str.length; i < newLength; i++) {
		newStr += symb;
	}
	return bool ? str + newStr : newStr + str;
}
console.log(padString("Dimon", 10, '*'));
console.log(padString("Dimon", 10, '$', false));
console.log(padString("Dimon", 4));
