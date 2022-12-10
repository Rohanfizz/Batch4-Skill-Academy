let n = 73;

let spaces = parseInt(n / 2);
let stars = 1;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= spaces; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= stars; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
    if (i < parseInt(n / 2) + 1) {
        spaces--;
        stars += 2;
    } else {
        spaces++;
        stars -= 2;
    }
}
