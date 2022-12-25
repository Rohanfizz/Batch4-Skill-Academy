let arr = [4, 3, 5, 7, 9, 3, 6];
let target = 16;

function bruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let csum = 0;
            for (let k = i; k <= j; k++) csum += arr[k];
            if (csum == target) return [i, j];
        }
    }
    return [-1, -1];
}

function optimized(arr, target) {
    let sp = 0;
    let ep = 0;
    let csum = arr[sp];
    while (ep < arr.length) {
        if (csum == target) return [sp, ep];
        else if (csum < target) {
            ep++;
            if (ep == arr.length) break;
            csum += arr[ep];
        } else {
            csum -= arr[sp];
            sp++;
        }
    }
    return [-1, -1];
}

console.log(bruteForce(arr, target));
console.log(optimized(arr, target));
