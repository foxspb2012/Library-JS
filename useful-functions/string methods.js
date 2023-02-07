///////////////////////////////////////////////////
// 16 JavaScript String Methods You Need to Know //
//////////////////////////////////////////////////

/***** Задание 5 - Решите 3 задачу, используя, функцию delay *****/

/***** 1. includes *****/
// Метод includes() выполняет поиск с учетом регистра, чтобы определить, можно ли
// найти одну строку в другой строке, возвращая true или false при необходимости.
const arrayAuthors = ["DevPoint", "DevelopPoint"];
const author = "DevPoint";
console.log([].includes(author)); // false
console.log(arrayAuthors.includes(author)); // true
console.log([1, 2].includes(author)); // false

/***** 2. indexOf *****/
// Метод indexOf()используется для поиска первого индекса строки. Если искомый символ или строка
// повторяется несколько раз, метод вернет только значение индекса первого вхождения.
const getStringIndex = (str, searchStr) => str.indexOf(searchStr);
console.log(getStringIndex("DevPoint", "v")); // 2
console.log(getStringIndex("DevPoint Develop Point", "P")); // 3
console.log(getStringIndex("DevPoint Develop Point", "Dev")); // 0
console.log(getStringIndex("DevPoint", "1")); // -1

/***** 3. lastIndexOf *****/
// Метод lastIndexOf()возвращает последний индекс, по которому данный элемент может быть найден в массиве,
// или -1, если он отсутствует. Массив просматривается в обратном направлении, начиная с fromIndex.
// Вопреки результату indexOf()(искомый контент существует).
const getStringLastIndex = (str, searchStr) => str.lastIndexOf(searchStr);
console.log(getStringLastIndex("DevPoint", "v")); // 2
console.log(getStringLastIndex("DevPoint Develop Point", "P")); // 17
console.log(getStringLastIndex("DevPoint Develop Point", "Dev")); // 9
console.log(getStringLastIndex("DevPoint", "1")); // -1

/***** 4. toUpperCase *****/
// Метод toUpperCase() возвращает строковое значение вызова, преобразованное в верхний регистр
// (значение будет преобразовано в строку, если оно не является строкой).
const title = "Develop Point";
console.log(title.toUpperCase()); // DEVELOP POINT

/***** 5. toLocaleLowerCase *****/
// Метод toLocaleLowerCase()возвращает строку со всеми строчными буквами.
const title = "Develop Point";
console.log(title.toLocaleLowerCase()); // develop point

/***** 6. search *****/
// Используйте search()метод для поиска строки в другой строке, он вернет индекс строки,
// этот метод аналогичен методу indexOf().
console.log("DevPoint".search("Point")); // 3
console.log("DevPoint Develop Point".search("e")); // 1
console.log("DevPoint".search("e")); // 1

/***** 7. slice *****/
// Метод slice()нарезает часть строки и возвращает нарезанную часть в новой строке. slice(), метод принимает
// два параметра: начальный индекс и конечный индекс. Результирующая строка представляет собой строку,
// разделенную между этими двумя индексами, за исключением символа в конце индекса.
// slice()обычно используется для нарезки строк.
console.log("DevPoint".slice(0, 3)); // Dev
console.log("DevPoint".slice(3, 7)); // Poin, does not contain the letter t with index 7

// Если последний индекс не указан, срез будет продолжать поиск до конца строки:
console.log("DevPoint".slice(3)); // Point

// Вы также можете использовать отрицательные параметры для перехвата строки с конца строки.
// Если это отрицательное число, то счет начнется справа.
console.log("DevPoint".slice(-5)); // Point
console.log("DevPoint".slice(-5, -1)); // Point

/***** 8. replace *****/
// Метод replace()заменяет определенное значение в строке другим значением.
console.log("DevPoint".replace("Dev", "Develop ")); // Develop Point

/***** 9. concat *****/
// Метод concat()объединяет две или более строк:
const str1 = "Develop";
const str2 = "Point";
const arrStr = [str1, " ", str2];
console.log(str1.concat(" ", str2)); // Develop Point
console.log("".concat(...arrStr)); // Develop Point

/***** 10. trim *****/
// trim()в JavaScript удаляет пробелы с обеих сторон строки:
const str1 = " Develop ";
console.log(str1.trim()); // Develop

/***** 11. split *****/
// Метод split()принимает шаблон и делит строку на упорядоченный список подстрок путем поиска
// шаблона, помещает эти подстроки в массив и возвращает массив.
const str = "The split() method takes";
const arrayWorlds = str.split(" ");
console.log(arrayWorlds); // [ 'The', 'split()', 'method', 'takes' ]

/***** 12. charAt *****/
// Метод charAt()возвращает символ по указанному индексу или позиции в строке.
// Обход строки реализован с помощью charAt() метода, код такой:
const string = "DevPoint";
for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
}

/***** 13. charCodeAt *****/
// Метод charCodeAt()возвращает целое число между 0 и 65535, представляющее UTF-16единицу кода с заданным индексом.
const title = "Develop Point;";
console.log(title.charCodeAt(0)); // 68
console.log(title.toLocaleLowerCase().charCodeAt(0)); // 100

/***** 14. repeat *****/
// Метод repeat()создает и возвращает новую строку, содержащую указанное количество копий строки,
// для которой он был вызван, объединенных вместе.
const title = "Develop Point;";
console.log(title.repeat(2)); // Develop Point;Develop Point;

/***** 15. match *****/
// Метод match()извлекает результаты, которые возвращают строку, соответствующую регулярному выражению.
// В следующем примере выполняется поиск всех заглавных букв в строке.
// Он возвращает строковый массив значений, соответствующих регулярному выражению.
const title = "Develop Point;";
const regex = /[A-Z]/g;
console.log(title.match(regex)); // [ 'D', 'P' ]


/***** 16. matchAll *****/
// Метод matchAll()возвращает итератор, содержащий все результаты, соответствующие регулярному выражению,
// и группирует группы захвата. Вместо создания единого массива, содержащего все совпадения, он создает итератор.
// По сравнению с match(), основное отличие — разница в возвращаемом значении, и есть тонкие отличия в параметрах
// (параметр RegExp должен быть в виде установки глобального режима, иначе будет выброшено исключение ).TypeError
const title = "Develop Point;";
const regex = /[A-Z]/g;
const result = title.matchAll(regex);
console.log(result); // Object [RegExp String Iterator] {}
console.log([...result]);
// [
//   [ 'D', index: 0, input: 'Develop Point;', groups: undefined ],
//   [ 'P', index: 8, input: 'Develop Point;', groups: undefined ]
// ]

