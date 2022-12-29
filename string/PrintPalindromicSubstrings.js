let s = "aeyehavemalayalam";
for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
        let l = i;
        let r = j;
        let isPali = true;
        while (l < r) {
            if (s[l] != s[r]) {
                isPali = false;
                break;
            }
            l++, r--;
        }
        if (isPali) console.log(s.substring(i, j + 1));
    }
}
