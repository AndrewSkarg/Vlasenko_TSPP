function zavd4() {
    
    let paintVar = Number(prompt("Enter what to paint:\n1.rectangle\n2.triangle\n3.rhombus"));
    let constAster = 2;
    if (paintVar === 1 || paintVar === 2 || paintVar === 3) {
        let height = Number(prompt("Enter height:"));
        
        paintVar===3?height=Math.round(height/2):true;
        paintVar===1?constAster=1:true;

        let aster = 1;
        let starID = height;
        for (let col = 1; col <= height; col++, aster += constAster, starID--) {
            paintTriangle(aster, starID);
        }

        if(paintVar === 3){
            aster -= 2 * constAster;
            starID += 2;

            for (let col = height; col >= 0; col--, aster -= constAster, starID++) {
                paintTriangle(aster, starID);
            }
        }
        

    }
    else{
        alert('Choose right variant!')
    }


}



function paintTriangle(aster, starID) {
    for (let j = 1; j <= starID; j++) {
        document.write('&nbsp&nbsp');
    }
    let k = 0;
    while (k < aster) {
        document.write('*');
        k++;
    }
    document.write('<br>');
}



function zavd6() {
    let n = Number(prompt("Enter number of month:"));
    let b = '';
    let s = '';

    switch (n) {
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June";
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
    }

    if ((n == 12) || (n == 1) || (n == 2)) {

        s = "is " + n + ", which is in winter.";
    }

    if ((n == 3) || (n == 4) || (n == 5)) {

        s = "is " + n + ", which is in spring.";
    }

    if ((n == 6) || (n == 7) || (n == 8)) {

        s = "is " + n + ", which is in summer.";
    }

    if ((n == 9) || (n == 10) || (n == 11)) {

        s = "is " + n + ", which is in fall.";
    }

    alert('Month: ' + b + ' Season ' + s);

}

function zavd7() {
    let tC = Number(prompt("Enter temperature in Celsius:"));
    let tF = (9 / 5) * tC + 32;
    alert('fahrenheit: ' + tF);
}

function zavd8() {
    let day = Number(prompt("Enter number of day:"));

    switch (day) {

        case 1:
            alert("It's Monday");
            break;
        case 2:
            alert("It's Tuesday");
            break;
        case 3:
            alert("It's Wednesday");
            break;
        case 4:
            alert("It's Thursday");
            break;
        case 5:
            alert("It's Friday");
            break;
        case 6:
            alert("It's Saturday");
            break;
        case 7:
            alert("It's Sunday!")
            break;

    }
}
