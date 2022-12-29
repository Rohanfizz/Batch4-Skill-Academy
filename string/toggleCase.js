let s = "AbcsDbDnsMmK";

s = s.split('');

for(let i =0;i<s.length;i++){
    if(s[i].charCodeAt(0)<97){
        //it is a capital character
        s[i] = String.fromCharCode(s[i].charCodeAt(0) + 32);
    }else{
        //it is a small character
        s[i] = String.fromCharCode(s[i].charCodeAt(0) - 32);
    }
}
s = s.join('');
console.log(s);