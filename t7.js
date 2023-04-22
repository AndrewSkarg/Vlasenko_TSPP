function getRandom(min, max) {
    return min + Math.ceil(Math.random() * (max - min));
}

let random = getRandom(0, 100);

let flag = true;
let conf = true;
let countTry = 0;
while (conf == true) {
    let entered = prompt('guess the number from 0 to 100');
    if (entered > random) {
        entered = random - (entered - random);
    }
    if (entered == random) {
        countTry++;
        alert('Ви вгадали за ' + countTry + ' разів!');
        break;
    }
    else if (flag && entered <= 1 / 8 * random || entered < 2 / 8 * random) {
        conf = confirm("дуже холодно")
        flag = false;
    }
    else if (flag && entered == 2 / 8 * random || entered < 3 / 8 * random) {
        conf = confirm("холодно. Спробувати ще раз?")
        flag = false;

    }
    else if (flag && entered == 3 / 8 * random || entered < 4 / 8 * random) {
        conf = confirm("тепло. Спробувати ще раз?")
        flag = false;

    }
    else if (flag && entered == 4 / 8 * random || entered < 5 / 8 * random) {
        conf = confirm("тепліше. Спробувати ще раз?")
        flag = false;

    }
    else if (flag && entered == 5 / 8 * random || entered < 6 / 8 * random) {
        conf = confirm("дуже тепло. Спробувати ще раз?")
        flag = false;

    }
    else if (flag && entered == 6 / 8 * random || entered < 7 / 8 * random) {
        conf = confirm("гаряче. Спробувати ще раз?")
        flag = false;

    }
    else if (flag && entered == 7 / 8 * random || entered < random) {
        conf = confirm("дуже гаряче. Спробувати ще раз?");
        flag = false;

    }
    countTry++;
}
