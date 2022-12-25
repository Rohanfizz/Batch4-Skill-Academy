let r1 = 3,
    c1 = 3;
let r2 = 3,
    c2 = 2;

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let b = [
    [1, 2],
    [2, 1],
    [3, 2],
];

if (c1 != r2) {
    // condition for matrix multiplication
    console.log("Invalid Operation!");
}

let res = [];
for (let i = 0; i < r1; i++) {
    let row = [];
    for (let j = 0; j < c2; j++) {
        row.push(0);
    }
    res.push(row);
}

// let res  = new Array(r1).fill(0).map(()=>new Array(c2).fill(0));

for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
        for (let k = 0; k < r2; k++) {
            res[i][j] += a[i][k] * b[k][j];
        }
    }
}

console.log(res);
