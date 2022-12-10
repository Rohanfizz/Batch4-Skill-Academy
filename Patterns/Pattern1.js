let n = parseInt(process.argv[2]);
// *
// **
// ***
// ****
for(let i = 1;i<=n;++i){
    for(let j = 1;j<=i;++j){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}