    // ZAVD1
let i = 0;
let str = '';
while (i <= 100) {
    str += i + ' '
    i++;
}
console.log(str);

i = 0;

 //ZAVD2
console.log(i + '-' + 'це нуль');
let isParne = true;
do {
    i++;

    if (i % 2 === 0) {
        isParne = true
    }
    else {
        isParne = false
    }
    console.log(i + ' number is parne - ' + isParne);

} while (i < 10)

// // ZAVD3
for (let i = 0; i <= 9; console.log(i++)) { }

// ZAVD4 in console. Html demonstration available in 1_9_html.js (show piramid func)
let ch = 2
let inp=50;
let n=6;
console.log(inp);
let s = '';

switch (ch) {
    
    case (1): {
        s += ('\n');
        for (let row = 1; row <= inp; row++) {
            for (let star = 1; star <= row; star++) {
                s += '*';
            }
            s += '\n';

        }
        console.log(s);
    }
    case (2): {
        let aster = 1;
        let starID = (inp)-1;
        for (let col = 0; col <inp; col++, aster +=n, starID--) {
            for (let j = 0; j <= starID; j++) {
                s += ' ';
            }
            
            let k=0;
            while (k < aster) {
                s += '*';
                k++;
            }
            s+='\n';

        }

        console.log(s);


    }


}
//ZAVD5
let numb=10_000;
let result=numb;
let counter=0;1
while((result/=2)>=50){
    counter++;
}
result*=2;
console.log(result);
console.log('counter '+counter);


