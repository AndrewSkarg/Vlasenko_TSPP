const { program } = require('commander');

program
    .option('-re, --replace <char>', "enter a char  to be replaced")
    .option('-rt --replacement <char>', "enter a replacement char")
    .option('-c, --count <number>', 'enter limit for elements to be returned from separated string')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
console.log(options.separator);
console.log(options.count);
console.log(options.replace);
console.log(options.replacement);

if (options.count != undefined && options.separator != undefined) {
    console.log(options.separator);
    console.log(options.count);
    console.log(program.args[0].split(options.separator, options.count));
}

if (options.replace != undefined && options.replacement != undefined) {
    console.log(options.replace);
    console.log(options.replacement);
    console.log(program.args[0].replace(options.replace, options.replacement));
}


