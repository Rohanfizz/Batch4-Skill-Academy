let arr = [1,2,3,4];

for(let sp = 0;sp<arr.length;sp++){
    for(let ep = sp;ep<arr.length;ep++){
        for(let i = sp;i<=ep;i++){
            process.stdout.write(arr[i]+" ");
        }
        process.stdout.write("\n");
    }
}