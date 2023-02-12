function z1_11_1() {
    function seconds(total) {
        return total % 60;
    }

    let divBy60 = seconds(Number(prompt('Enter number:')));
    document.write('result of remnant after dividing on 60: ' + divBy60);
}

function z1_11_2() {
    function perimetr(side, count) {
        return side * count;
    }
    let s = Number(prompt('Enter length of side:'));
    let c = Number(prompt('Enter number of sides:'))
    let p = perimetr(s, c);
    document.write('Perimetr: ' + p);

}

function z1_11_3() {
    function getNumbers(last) {
        for (let i = 1; i < last; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.write('fizzbuzz <br>');
            }
            else if (i % 3 == 0) {
                document.write('fizz <br>');
            }
            else if (i % 5 == 0) {
                document.write('buzz <br>');
            }
            else {
                document.write(i + '<br>');
            }


        }
    }

    let last = Number(prompt('Enter last number:'));
    getNumbers(last);

}

function z1_11_4() {
    function Calculate(numbers) {
        numbers = numbers.map(number => +number);
        let average = numbers.reduce((a, b) => a + b) / numbers.length;
        return average;
    }

    var numbers = prompt('Enter numbers using coma as separator:').split(',');
    let average = Calculate(numbers);
    document.write('Average: ' + average);

}

function z1_11_5() {
    function isDivisible(n, x, y) {
        let isDiv = true;
        let selected = Number(prompt('Choose var:\n1.if operator\n2.ternary operator\n3.without IF and Ternary:'));
        if (+selected === selected && selected !== 0) {


            switch (selected) {
                case 1: {
                    // if (n % x == 0 && n % y == 0) {
                    //     isDiv = true
                    // }
                    // else {
                    //     isDiv = false;
                    // }
                    if (isNaN(n / x) || isNaN(n / y)) {
                        isDiv = false;
                    }
                    break;
                }
                case 2: {
                    // n % x == 0 && n % y == 0 ? isDiv = true : isDiv = false;
                    isNaN(n / x) || isNaN(n / y) ? isDiv = false : isDiv = true;
                    break;
                }

                case 3: {
                    let arr = [n, x, y];
                    for (let i = 0; isDiv == true && i < arr.length; i++) {
                        isDiv = !isNaN(arr[i]);
                    }
                    break;
                }

            }

        }

        return isDiv;

    }

    let n = Number(prompt('Enter n'));
    let x = Number(prompt('Enter x'));
    let y = Number(prompt('Enter y'));


    document.write('Numbers can be divided: ' + isDivisible(n, x, y));

}

function z1_11_6() {
    let n = Number(prompt('Enter size of array:'));
    let arr = [];
    let oddNums = [];
    let sum = 0;
    while (n > 0) {
        let x = Math.round(Math.random() * 100) + 1;
        sum += x;
        arr.push(Number(x));
        x % 2 != 0 ? oddNums.push(Number(x)) : false;
        n--;
    }
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let average = sum / arr.length;

    alert('min: ' + min + '\n' + 'max: ' + max + '\n' + 'sum: ' + sum + '\n' + 'average: ' + average);
    alert('odd numbers: ' + oddNums);
}
function genNumber(from, to) {
    let x = Math.round(Math.random() * to) + from;
    x == 10 ? x -= 1 : true;
    x == -10 ? x += 1 : true;
    x = x % 2 == 0 ? +x : -x;
    return x;
}

function z1_11_7() {
    let Arr2D = new Array(5);
    let length = Arr2D.length;

    for (var i = 0; i < length; i++) {
        Arr2D[i] = new Array(5);
    }


    // Loop to initialize 2D array elements.
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {

            Arr2D[i][j] = genNumber(1, 9);
            let str = Arr2D[i][j].toString();
            let out = str.padStart(6, ' ');
            out = out.replaceAll(' ', '&nbsp');

            document.write(out);
        }
        document.write("<br>");

    }

    document.write("<br><br>");

    // Loop to display the elements of 2D array. 
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i == j) {
                Arr2D[i][j] > 0 ? Arr2D[i][j] = 1 : Arr2D[i][j] = 0;
            }
            let str = Arr2D[i][j].toString();
            let out = str.padStart(6, ' ');
            out = out.replaceAll(' ', '&nbsp');

            document.write(out);
        }
        document.write("<br>");
    }

}

function Add(num1, num2) {
    return num1 + num2;
}

function Sub(num1, num2) {
    return num1 - num2;
}

function Mul(num1, num2) {
    return num1 * num2;
}

function Div(num1, num2) {
    let nul = false;
    num2 == 0 ? nul = true : nul = false;
    if (nul == false) {
        return num1 / num2;
    }
    else {
        num2 = isNumCorrect('Enter number 2:\n');
        return Div(num1, num2);
    }
}

function isNumCorrect(message) {
    let num = Number(prompt(message));
    while (isNaN(num)) {
        num = Number(prompt(message));
    }
    return num;
}

function z1_11_8() {
    let num1 = isNumCorrect('Enter number 1:\n');
    let num2 = isNumCorrect('Enter number 2:\n');
    let option = isNumCorrect('Choose option:\n1.Add\n2.Sub\n3.Mul\n4.Div');
    let result = 0;
    switch (option) {
        case 1: {
            result = Add(num1, num2);
            break;
        }
        case 2: {
            result = Sub(num1, num2);
            break;
        }
        case 3: {
            result = Mul(num1, num2);
            break;
        }
        case 4: {
            result = Div(num1, num2);
            break;
        }
    }
    alert('RESULT: ' + result);
}


function z1_11_9() {
    let num = isNumCorrect('Enter number:');
    let positive = false;
    let simple = true;
    if (num > 0) {
        positive = true;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            simple = false;
            break;
        }
    }
    alert('positive: ' + positive);
    alert('simple: ' + simple);

    let mas = [2, 5, 3, 6, 9];
    for (let i = 0; i < 5; i++) {
        if (num % mas[i] == 0) {
            mas[i] = num + ' / ' + mas[i] + ' without rest';
        }
        else {
            mas[i] = num + ' / ' + mas[i] + ' with rest';
        }
        document.write(mas[i]);
        document.write('<br>')
    }
}

function revArr(array) {
    let rev = [];
    let j = 0;
    for (let i = array.length - 1; i >= 0; i--, j++) {
        if (isNaN(array[i])) {
            rev[j] = array[i];
        }
        else {
            rev[j] = array[i] ** 2;
        }

    }
    return rev;
}

function z1_11_10() {
    let mas = ['Andriy', 10, '24', 'Mikola', 2, 'Lolita', 16, 'Mikola'];
    document.write(mas);
    let revMas = revArr(mas);
    document.write('<br><br>');
    document.write(revMas);
}



function z1_11_11() {
    let mas = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,32,41,42,52,13,41,452,41,42,5];
    document.write(mas);
    document.write('<br><br>');
    //[1, 2, 4, 5, 7, 8, 3, 6]
    for (let i = 0; i < mas.length - 1; i++) {
        for (let j = i+1; j < mas.length; j++) {
            while (mas[i] == mas[j]) {
                mas.splice(j, 1);
            }
        }
    }
    document.write(mas);



}





