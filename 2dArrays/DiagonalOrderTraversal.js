const arr = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
];
let n = arr.length;

for(let g = n-1;g>=0;g--){
    for(let i=g,j=0;i<n;i++,j++){
        console.log(arr[i][j]);
    }
}

for(let g = 1;g<n;g++){
    for(let i = 0,j =g;j<n;i++,j++){
        console.log(arr[i][j]);
    }
}