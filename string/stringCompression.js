let compress = function(s) {
    let i = 0;
    let result = [];
    while(i<s.length){
        result.push(s[i]);
        let j = i+1;
        let cnt = 1;

        while(j<s.length && s[i]===s[j]){
            cnt++;
            j++;
        }

        if(cnt != 1) result.push(cnt.toString(10));
        i=j;
    }
    return result.join('');
};
let s = "aaabbbcccddeexyxyddd";
console.log(compress(s));