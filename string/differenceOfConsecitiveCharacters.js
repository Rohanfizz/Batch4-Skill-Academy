let s="zabcdcdec"
let result = [];
for(let i = 0;i<s.length;i++){
    
    result.push(s[i]);
    if(i==s.length-1) break;
    let asciiI = s[i].charCodeAt(0);
    let asciiIp1 = s[i+1].charCodeAt(0);
    result.push((asciiIp1-asciiI).toString(10));
}
result = result.join('');
console.log(result);


