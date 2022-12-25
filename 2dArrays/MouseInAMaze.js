let arr = [
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
];
let n = arr.length;
let m = arr[0].length;

let state = 0;
let di = [0, 1, 0, -1];
let dj = [1, 0, -1, 0];

let i = 0;
let j = 0;

while (i >= 0 && i < n && j >= 0 && j < m) {
    if (arr[i][j] == 1) {
        //kuch kaam
        arr[i][j] = 0;
        state = (state + 1) % 4;
    }
    i += di[state];
    j += dj[state];
}

i -= di[state];
j -= dj[state];

console.log(i, j);
