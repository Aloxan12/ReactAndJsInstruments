// Регулярные выражения

const pattern = /test/ // литерал
const pattern2 = new RegExp('test') // конструктор
// В обоих случаях создается одно и то же регулярное выражение

const pattern3 = /[test]/ //оператор класса символов
// в случае с литералом важна последовательность символов, тут - нет
// однако, иметь ввиду, что совпадение в данном примере будет происходить только с одним символом
// в проверяемой строке
// console.log('pattern', pattern.test('et')) // false
// console.log('pattern3', pattern3.test('et')) // true


// Шаблоны:
// ^ - все кроме указанных символов, пример [^es]
// \ - Экранирование - любой следующий за ним символ, делает его тем самым буквально сопоставляемым членом данного выражения
// ? - Если требуется задать символ как необязательный /t?еst/ ===> est=true
// + - Если требуется, чтобы с имвол присутствовал однократно или многократно /t+еst/ ===> est=false test=true ttest=true
// * - Если требуется, чтобы символ присутствовал многократно или вообще отсуствовал /t+еst/ ===> est=true test=true ttest=true
// {5}, {4, 9} - Если требуется задать фиксированное число повторений символа в проверяемой на совпадение строке,
        // это число следует указать в фигурных скобках /а{4}/,
        // если в передлах какого то числа, то через занятую /a{4, 10}/
        // если в расширяемых пределах какого то числа, то опустить второе число, но оставить запятую /a{4,}/
// | - Выбор альтернати вных вариантов регулярное выражение /(аЬ)|(cd)+/ - с одним или более вхождением
// подстроки "аЬ" или "cd"



// Флаги:
// для литерала /test/ig
// для конструктора new RegExp('test', 'ig')

// i - делает регулярное выражение не зависящим от регистра
// g - допускает совпадение со всеми экземплярами шаблона
// m - допускает сопоставление со многими строками , которые могут быть получены из значения элемента разметки textarea .



//  t Горизонтальная табуляция
//  Ь Возврат на одну позицию
//  v Вертикальная табуляция
//  f Перевод страницы
//  r Возврат каретки
//  n Перевод строки
//  сА:\cZ Управляющие символы
//  хОООО:\xFFFF Шестнадцатеричные значения символов в уникоде
//  хОО:\xFF Шестнадцатеричные значения символов в коде ASCll
//  Любой символ, кроме перевода строки ( \n)
//  d Любая десятичная цифра, что эквивалентно выражению [ 0 - 9 ]
//  D Любой символ, кроме десятичной цифры, что эквивалентно выражению [^0-9]
//  w Любой буквенно-цифровой символ , включая и знак подчеркивания , что эквивалентно выражению [A-Za-z0-9]
//  W Любой символ, кроме буквенно-цифровых, включая и знак подчеркивания, что эквивалентно выражению [^A-Za-z0-9]
//  s Любой символ пробела (собственно пробела, табуляции, перевода строки , перевода страницы и т.д. )
//  S Любой символ , кроме пробела
//  Ь Граница слова
//  В Не граница слова, а его внутренняя часть



// обратные ссылки на фиксации, обозначаются обратной косой чертой \ и номером фиксации, на которую делается ссылка

// /^([dtn])а\1/,которое
// обеспечивает совпадение с символьной строкой , начинающейся с любого из символов
// d, t или n, за которыми следует символ а и далее любой си мвол , совпадающий с первой
// фиксацией. Последнее очень важно уяснить! Ведь это не одно и то же , что и выражение
// / [dtn]а[dtn] / . Символ , следующий после с имвола а, не может быть любым из символов
// d, t или n, но должен быть каким угодно из тех си мволов, которые инициируют совпадение
// с первым си мволом. Следовательно, символ , который совпадет с членом \ 1 ,
// неизвестен до самого момента вычисления данного регулярного выражения.

// Пример /<(\w+)>(.+)<\/\1>/  ===> <strong>вce что угодно </strong>.

// "fontFamily".replace(/([A-Z])/g,"-$1").toLowerCase(); == font-family  тут $1 ссылается на первый найденный элемент