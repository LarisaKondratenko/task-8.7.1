let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); //Середина числового диапазона
let orderNumber = 1;
let gameRun = true;


const orderNumberField = document.getElementById('orderNumberField'); // Вопрос №1
const answerField = document.getElementById('answerField');

// Преобразования числа в текстовую форму. Число выводится в текстовой форме, если в текстовой форме меньше 20 символов, включая пробелы.


let first = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let second = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let third = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];


function numberToText() { // Функция преобразования числа из цифр в слова (числа от -999 до 999).
    let number = Math.abs(answerNumber);
    let text = '';

    if (number == 0) {
        text = 'ноль';
        return text;
    }

    if (number <= 9) {
        return first[Math.floor(Math.abs(number) / 1)];
    }

    if (number > 9 && number < 20) {
        return second[Math.floor(number / 10 + number % 10)];
    }

    if (number >= 20 && number <= 99) {
        return third[(Math.floor(number / 10)) - 1] + " " + first[Math.floor(number % 10)];
    }

    if (number >= 100 && number <= 999) {
        return hundreds[Math.floor(number / 100)] + " " + numberToTextHundreds();
    }
}

function numberToTextHundreds() { // Функция вычисления остатка от сотого числа и преобразования его в числа из цифр в слова (числа от 0 до 99) для последующего присоединения к функции numberToText() расчитывающей сотни hundreds.
    let firstSecondHundreds = Math.abs(answerNumber) % 100;

    if (firstSecondHundreds <= 9) {
        return first[Math.floor(firstSecondHundreds / 1)];
    }

    if (firstSecondHundreds > 9 && firstSecondHundreds < 20) {
        return second[(Math.floor(firstSecondHundreds / 10)) + (firstSecondHundreds % 10)];
    }

    if (firstSecondHundreds >= 20 && firstSecondHundreds <= 99) {
        return hundreds[(Math.floor(firstSecondHundreds / 10)) - 1] + " " + first[Math.floor(firstSecondHundreds % 10)];
    }
}

orderNumberField.innerText = orderNumber;
answerField.innerText = answerNumber >=0 ?
numberToText().length < 20 && answerNumber >=0 ? 
`Вы загадали число ${numberToText() }?`:
`Вы загадали число ${answerNumber }?`:
numberToText().length < 20 ?
`Вы загадали число ${numberToText() }?`:
`Вы загадали число ${answerNumber }?`;



document.getElementById('btnRetry').addEventListener('click', function () {  //кнопка ЗАНОВО
    location.reload();
                         
         })    

       

document.getElementById('btnOver').addEventListener('click', function () {  // кнопка БОЛЬШЕ
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2); // Гененрируем случайное число от 0 до 2 и сохраняем в переменную phraseRandom
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 2) ?`Вы ошиблись с числом!\n\u{1F9D0}` :
            (phraseRandom ===3) ?`Вы забыли, какое число загадали!\n\u{1F92A}`:
            `Не жульничайте!\n\u{1F620}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;  // Изменение нижней границы поискового диапазона.
            answerNumber  = Math.floor((minValue + maxValue) / 2);  // меняем значение числа на среднее арифметическое между минимальным и максимальным
            orderNumber++;  // Увеличиваем на 1 номер попытки
            orderNumberField.innerText = orderNumber; // Выводим на экран номер попытки
            const phraseRandom = Math.round(Math.random() * 4); // Генерируется случайное число от 0 до 4.            
            answerField.innerText = `Вы загадали число ${answerNumber }?`; // Выводим на экран вопрос с новым числом
        }
    }
}
)



document.getElementById('btnLess').addEventListener('click', function () {  // кнопка МЕНЬШЕ
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 2) ?`Вы ошиблись с числом!\n\u{1F9D0}` :
            (phraseRandom ===3) ?`Вы забыли, какое число загадали!\n\u{1F92A}`:
            `Не жульничайте!\n\u{1F620}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1; // Изменение верхней границы поискового диапазона.
            answerNumber  = Math.floor((maxValue - minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4); // Генерируется случайное число от 0 до 4.            
            switch (phraseRandom) {
                case 1:
                        answerPhrase = `Наверное, это число `
                        break;

                    case 2:
                        answerPhrase = `Возможно `
                        break;
            }
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {  // кнопка ВЕРНО
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    inputValue();
});
document.getElementById('button').addEventListener('click', (event) => {
    let inputValue = document.getElementById('inputNumber');
    if (inputValue) {
        inputValue.value = inputValue.value > 999 ? (event.preventDefault(), 999) : inputValue.value < -999 ? (event.preventDefault(), -999) : inputValue.value;
    }
});
function inputValue() {
    if (inputNumber === 0) {
        document.getElementById('textHeader').innerText = 'Введите первое число от -999 до 999';
        document.getElementById('button').innerText = 'Ввести';
        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.placeholder = 'Введите число';
        input.id = 'inputNumber';
        input.required = true;
        document.getElementById('#form').childNodes[3].insertAdjacentElement('afterend', input);
        input.focus();
        inputNumber++;
    } else if (inputNumber === 1) {
        document.getElementById('textHeader').innerText = 'Введите второе число от -999 до 999';
        arr.push(document.getElementById('inputNumber').value);
        form.reset();
        inputNumber++;
    } else if (inputNumber === 2) {
        arr.push(document.getElementById('inputNumber').value);
        arr.sort((a, b) => {
            return a - b;
        });
        document.getElementById('inputNumber').remove();
        let h2 = document.getElementById('textHeader');
        let button = document.getElementById('button');
        button.id = 'modalClose';        
        button.focus();
        minValue = parseInt(arr[0]);
        maxValue = parseInt(arr[1]);
        if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
            minValue = 0;
            maxValue = 999;
        }
        h2.innerText = 'Вы ввели числа ${minValue} и ${maxValue}!';
        inputNumber++;
    } else if (inputNumber === 3) {
        document.getElementById('.blur').remove();
        answerNumber = Math.floor((minValue + maxValue) / 2);
        answerField.innerHTML = 'Вы загадали число <b>${numberAsText(answerNumber)}</b>?\n\u{1F62C}';
    }
}