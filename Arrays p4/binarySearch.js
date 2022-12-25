let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else if (arr[mid] > target) high = mid - 1;
    }
    return -1;
}
function ceilSearch(arr, target) {
    let low = 0;
    let ceil = arr.length;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] <= target) low = mid + 1;
        else {
            ceil = mid;
            high = mid - 1;
        }
    }
    return ceil;
}

console.log(binarySearch(arr, 79));
console.log(ceilSearch(arr, 77));
