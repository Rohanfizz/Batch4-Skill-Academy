let n = 3;
let m = 4;

function getMazePaths(i,j,psf){
    if(i<1) return;
    if(j<1) return;
    if(i == 1 && j == 1){
        console.log(psf);
        return;
    }
    //horizontal
    getMazePaths(i,j-1,psf+"h");
    //vertical
    getMazePaths(i-1,j,psf+"v");
}

getMazePaths(n,m,"");