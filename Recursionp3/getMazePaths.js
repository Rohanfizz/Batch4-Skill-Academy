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
function mazePath(i,j,di,dj,psf){
    if(i>di || j >dj) return;
    if(i == di && j == dj){
        console.log(psf);
        return;
    }
    mazePath(i,j+1,di,dj,psf+"h");
    mazePath(i+1,j,di,dj,psf+"v");
}
mazePath(1,1,2,3,"");
// getMazePaths(n,m,"");