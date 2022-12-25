let a = [9,9,5,1,7,6];
let b = [9,3,2,5,5,2,6];
let n = a.length;
let m = b.length;

function rev(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }
    return arr
}

a = rev(a);
b = rev(b);

let i = 0;
let j = 0;
let carry = 0;
let result = [];

while(i<n || j<m || carry!=0){
    let x = 0;
    let y = 0;
    if(i<n) x= a[i];
    if(j<m) y= b[j];

    let sum = carry + x + y; 
    carry = parseInt(sum/10);
    sum = sum%10;
    result.push(sum);
    i++;
    j++;
}

result = rev(result);
console.log(result);