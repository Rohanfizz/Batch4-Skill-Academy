function f(n){
    if(n == 0) return;
    console.log(n," -> Preorder");
    f(n-1);
    console.log(n," -> Postorder");
}
function f2(){
    console.log('F2 was called');
    return;
}
function f1(){
    console.log('F1 was called');
    f2();
    console.log('F1 is printing again');
}

f(5);