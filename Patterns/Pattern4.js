let n = 5;

for(let i = n;i>0;i--){
    let stars = i;
    let spaces = n-i;

    while(spaces>0){
        process.stdout.write(" ");
        spaces--;
    }
    while(stars>0){ 
        process.stdout.write("*");
        stars--;
    }
    process.stdout.write("\n");
}