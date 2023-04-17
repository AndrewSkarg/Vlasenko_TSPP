function getKindsOfletter(text){
    const vowels=['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
    let myObj={'текст':text,'голосних':0,'приголосних':0};
    for (let i = 0; i < text.length; i++) {
        if(isNaN(text[i])){
            if(vowels.includes(text[i].toUpperCase())){
                myObj.голосних++;
            }
            else{
                myObj.приголосних++;
            }
        }
        
    }

    return myObj;

}

let text="антОє2чЄ ф і";
console.log(getKindsOfletter(text));

