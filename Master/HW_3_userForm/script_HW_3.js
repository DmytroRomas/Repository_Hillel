//   1 - Запрашиваем у пользователя имя.
//   Чистим введенное значение от пробелов в начале/конце строки. Например, "Алла Виктория" – допустимое, " Алла Виктория " – недопустимое.

let userName = prompt( 'Enter your name' )
//let userName = '  Dmytro   '
//console.log(userName)
userName = userName.trim()
//console.log(userName)  // - работает

// 2 - Запрашиваем у пользователя фамилию.
// Чистим введенное значение от пробелов в начале/конце строки. Например, "Иванова Максимова" – допустимое, " Иванова Максимова " – недопустимое.

let userSurname = prompt( 'Enter your surname' )
//let userSurname = '   Romas   '
//console.log(userSurname)
userSurname = userSurname.trim()
//console.log(userSurname)  //- работает




// 3 - Запрашиваем у пользователя email.
// Чистим введенное значение от всех пробелов. Например, "anna@gmail.com" – допустимое, " anna @gma il.com " – недопустимое.
// Приводим введенное значение к нижнему регистру.
//
// Если в введенном значении отсутствует символ @, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ not exist)`;
// Если в введенном значении символ @ находится на первом месте, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ find in first place)`;
// Если в введенном значении символ @ находится на последнем месте, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ find in last place)`;

let email = prompt( 'Enter your email' )
//let email = '    DmItriy.ROMAS@   gmail.com   ';

email = email.replace(/\s+/g, '').toLowerCase(); // Обрезаем пробелы и переводим в нижний регистр

//console.log(email);

// Ищем символ @ в строке
let indexOfAt = email.indexOf('@');
//console.log(indexOfAt);

if (indexOfAt === -1) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (indexOfAt === 0) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (indexOfAt === email.length - 1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}


//console.log(email); // - работает

// 4 - Запрашиваем у пользователя год рождения.
// Чистим введенное значение от всех пробелов. Например, "1990" – допустимое, " 19 90 " – недопустимое.
// В переменную age высчитываем актуальный возраст пользователя (new Date, getFullYear).

let yearOfBirth = prompt( 'Enter your year of birth' )
//let yearOfBirth = '       19     82    '
//console.log(yearOfBirth)
yearOfBirth = +yearOfBirth.replace(/\s+/g, '')
//console.log(yearOfBirth)  //-работает
//console.log(typeof yearOfBirth) //намбер

let currentYear = new Date().getFullYear(); // текущий год
let age = currentYear - yearOfBirth; //  актуальный возраст пользователя
//console.log(age)   //-работает

let fullName = userName + ' ' +userSurname
//console.log(fullName)  //-работает



document.getElementById('fullName').textContent += `: ${fullName}`;
document.getElementById('email').innerHTML += `: ${email}`; //выделяем жирным в случае сроабатывания условий if else
//document.getElementById('email').textContent += `: ${email}`;
document.getElementById('age').textContent += `: ${age}`;



