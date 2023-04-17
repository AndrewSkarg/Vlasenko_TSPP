function checkMail(mail){
    var re=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,6}$/
    let tr=re.test(mail)
    return tr;
}

let mail="test@test.test";
console.log(checkMail(mail));
