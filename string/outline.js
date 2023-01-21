let s = "My Name is Rohan";

// console.log(s);
s = s.split(" ");
console.log(s);
// s[0] = "b";
// console.log(s);
// s = s.join('');
// console.log(s);

s = "a";

function capitalLetter(s) {
    let asciiVal = s.charCodeAt(0);
    console.log(asciiVal);
    if (asciiVal < 97) {
        return true;
    } else return false;
}

if (capitalLetter(s)) {
    console.log("Yes");
} else console.log("No");
