let sum = 1;
let total = 0;
function foo(arg) {
    if(Number.isInteger(arg)){
    sum *= arg;
    return function fooMulti(num){
        if(num !== undefined){
        return total=foo(num);
        }
        let final = sum;
        sum = 1;  //Обнуляем переменные в конце работы функции для того, чтобы можно было её многократно использовать.
        total = 0;
        return final;
    }
    }
}


console.log(foo(5)(2)());
console.log(foo(5)());
console.log(foo(2)(1)(3)(4)());