function subsetSum(arr,idx,tar){
    if(tar == 0) return true;
    if(tar < 0) return false;
    if(idx == arr.length) return false;
    console.log(idx,tar);
    // if i pick this arr[idx];
    let pick = subsetSum(arr,idx+1,tar-arr[idx]);
    // if i dont pick this arr[idx]
    let notpick = subsetSum(arr,idx+1,tar);
    return pick || notpick;
}


let arr = [1,2,3,5,4];
let tar = 10;
console.log(subsetSum(arr,0,tar));