
function fib(n) {
    if (n <= 1) return n;
    let prev = fib(n-1);
    let prevprev = fib(n-2);
    return prev + prevprev;
}
// 0 1 1 2 3 5
console.log(fib(6));
