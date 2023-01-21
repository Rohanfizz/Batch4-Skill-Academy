let arr = [
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
];

let n = arr.length;
let m = arr[0].length;

function floodFill(n,m,i,j,psf){
    if(i<0 || i>=n || j<0 || j>=m || arr[i][j] != 0) return;
    if(i == n-1 && j == m-1){
        console.log(psf);
        return;
    }

    arr[i][j] = 2;
    // top
    floodFill(n,m,i-1,j,psf+"t");
    // left
    floodFill(n,m,i,j-1,psf+"l");
    // bottom
    floodFill(n,m,i+1,j,psf+"b");
    // right
    floodFill(n,m,i,j+1,psf+"r");
    arr[i][j] = 0;
}
floodFill(n,m,0,0,"");
