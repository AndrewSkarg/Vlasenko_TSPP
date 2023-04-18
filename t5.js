function findRepetition(str) {
    let mas = new Set(str.split(/\s+/));
    let map = new Map();
    const iterator = mas[Symbol.iterator]();

    for (let i = 0; i < mas.size; i++) {
        let value = iterator.next().value;
        let countRep = 0;
        let reg = new RegExp("(^|\\s+)" + value, "g");

        while (reg.exec(str) != null) {
            countRep++;
        }

        map.set(value, countRep);


    }

    return map;
}


let text = "ga daf  fbgsd fas asd daf afa ga fbgsd"
console.log(findRepetition(text));

