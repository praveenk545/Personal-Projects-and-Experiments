const titleCase = function (str) {
    let res='';
    let change=true;
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            res+=str[i]
            change=true
        }else{
            if(change){
                res+=str[i].toUpperCase();
                change=false;
            }else{
                res+=str[i].toLowerCase();
            }
        }
    }
    return res;
};
let str = "hello world";
console.log(titleCase(str));
