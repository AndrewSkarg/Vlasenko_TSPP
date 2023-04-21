function getUADay(d){
    let day="";
    d
    switch (d) {
        case 0: {
            day = "Неділя";
            break;
        }
        case 1: {
            day = "Понеділок";
            break;
        }
        case 2: {
            day = "Вівторок";
            break;
        }
        case 3: {
            day = "Середа";
            break;
        }
        case 4: {
            day = "Четвер";
            break;
        }
        case 5: {
            day = "П'ятниця";
            break;
        }
        case 6: {
            day = "Субота";
            break;
        }

    }
    day+=',';
    while(day.length!=14){
        day+=" ";
    }

    return day;

}

function getUAMonth(m){
    let month="";
    m
    switch (m) {
        case 0: {
            month = "Січень";
            break;
        }
        case 1: {
            month = "Лютий";
            break;
        }
        case 2: {
            month = "Березень";
            break;
        }
        case 3: {
            month = "Квітень";
            break;
        }
        case 4: {
            month = "Травень";
            break;
        }
        case 5: {
            month = "Червень";
            break;
        }
        case 6: {
            month = "Липень";
            break;
        }

        case 7:{
            month = "Серпень";
            break;
        }
        case 8:{
            month = "Вересень";
            break;
        }
        case 9:{
            month = "Жовтень";
            break;
        }
        case 10:{
            month = "Листопад";
            break;
        }
        case 11:{
            month = "Грудень";
            break;
        }

    }
    while(month.length!=14){
        month+=" ";
    }

    return month;
}

function getTimeNow() {
    let now = new Date();//?
    let day = getUADay(now.getDay());//?
    let month= getUAMonth(now.getMonth());//?
    let time=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()//?

    let date = time+', '+day+now.getDate()+' '+month+' '+now.getFullYear()+' року';
    return date;
}

console.log(getTimeNow())

