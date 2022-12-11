let arr = [10, 20, 20, 30, 30, 10, 40, 10, 10, 30, 40];
let d = 20;

let cnt = 0;

for (let x of arr) {
    if (x === d) {
        cnt++;
    }
}
console.log(cnt);
