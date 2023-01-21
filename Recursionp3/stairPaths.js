let n = 5;

function getStairPath(n,stair,asf){
    if(stair == n){
        console.log(asf);
        return;
    }
    if(stair > n){
        return;
    }
    // jump 1 stair
    getStairPath(n,stair+1,asf+1+" ");
    // jump 2 stairs
    getStairPath(n,stair+2,asf+2+" ");
    // jump 3 stairs
    getStairPath(n,stair+3,asf+3+" ");
}
getStairPath(n,0,"");