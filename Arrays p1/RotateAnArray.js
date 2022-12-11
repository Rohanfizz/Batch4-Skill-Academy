let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 3;

function reverse(i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

reverse(n - k, n - 1);
reverse(0, n - k - 1);
reverse(0, n - 1);
console.log(arr);

