function getObject(number) {
    str = number.toString();
    let myObj = { 'одиниці': 0, 'десятки': 0, 'сотні': 0, 'тисячні': 0 }
    let mas=Object.keys(myObj);
    let c=0;
    for (let i = str.length-1; i>=0; i--) {
        myObj[mas[c]] = str[i];
        c++;
        
    }
    return myObj;
}

let numb = getObject(2459);
console.dir(numb);