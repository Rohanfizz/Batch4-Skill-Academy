// let arr = [5, 2, -10, 3, -1, 2, 6, -14, -2, 1, -1, 3];
let arr = [-10,-1,-23,-1244,-23,-5,-3];

function bruteForce(arr) {
    let maxi = -Infinity;
    let msp = -1;
    let mep = -1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let csum = 0;
            for (let k = i; k <= j; k++) csum += arr[k];

            if (maxi < csum) {
                maxi = csum;
                msp = i;
                mep = j;
            }
        }
    }
    return [msp, mep, maxi];
}

function mss(arr){
    let osp = -1,oep = -1,omax = -Infinity;
    let csp = 0,cep =0,csum = 0;

    while(cep<arr.length){
        // Todays work
        if(csum + arr[cep] >= arr[cep]){
            // Sitting in last train
            csum+=arr[cep];
        }else{
            //Staring a new train
            csp = cep;
            csum = arr[cep];
        }
        //Overall
        if(csum > omax){
            osp = csp;
            oep = cep;
            omax = csum;
        }
        cep++;
    }
    return [osp,oep,omax];
}

console.log(bruteForce(arr));
console.log(mss(arr));
