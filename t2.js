function getExtension(path){
    let ext=path.substring(path.lastIndexOf('.')+1);
    return ext;
}

let a="/home/user/main.exe";
console.log(getExtension(a));