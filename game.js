var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt ('Приготовься, огонь! (Введите число от 0 до 6):');
    if (guess < 0 || guess > 6) {
        alert('Введите цифру от 0 до 6!')
    } else {
        guesses = guesses + 1; // Увеличение переменной количества выстрелов
    }

    if (guess == location1 || guess == location2 || guess == location3) {
        hits = hits + 1;
    }

    if (hits == 3) {
        isSunk = true;
        alert('Молодец! Ты выиграл!');
    }
}

var stats = 'Ты стрелял ' + guesses + ' раз';
alert(stats);