let sum=1;
let total=0;
function foo(arg) {
    if(Number.isInteger(arg)){
    sum*=arg;
    return function fooMulti(num){
        if(num!==undefined){
        return total=foo(num);
        }
        return sum;
    }
    }
}

console.log(foo(2)(1)(3)(4)());