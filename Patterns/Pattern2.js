let n = parseInt(process.argv[2]);

for(let i = n;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}