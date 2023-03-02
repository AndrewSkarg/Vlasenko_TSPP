function createGreetable (str) {
    const result = str;
    result.greet = function(greeting) {return `${greeting}, ${this}!`};
    return result;
}

let c = createGreetable("Andriy")
console.log(c.greet("Hello"))