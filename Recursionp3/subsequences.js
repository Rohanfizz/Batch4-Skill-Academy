let arr = [1,2,3];


function printSubsequences(arr,idx,ssf){
    if(idx == arr.length){
        console.log("( "+ssf+" )");
        return;
    }
    // i can come
    printSubsequences(arr,idx+1,ssf+" "+arr[idx]);
    // i cannot come
    printSubsequences(arr,idx+1,ssf);
}


printSubsequences(arr,0,"");