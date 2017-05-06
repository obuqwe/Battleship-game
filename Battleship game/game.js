var randonLoc = Math.floor(Math.random() * 5);
var location1 = randonLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

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
        alert ('Попал!');
    } else {
        alert('Промах. Давай еще раз.');
    }

    if (hits == 3) {
        isSunk = true;
        alert('Молодец! Ты выиграл!');
    }
}

var stats = 'Ты стрелял ' + guesses + ' раз';
alert(stats);