const reverseWords=(str)=>{
    console.log(str);
    let words=[];
    let word='';
    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
            word+=str[i];
        }
        else if(word){
            words.push(str[i]);
            word='';
        }
    }
    if(word){
        words.push(word)
    }
  let rev='';
  for(let i=word.length-1;i>=0;i--){
    rev+=word[i]
    if(i>0){
     rev+=' '
    }
  }
  return rev;
}
let str="Hello World from OpenAI"
console.log(reverseWords(str))