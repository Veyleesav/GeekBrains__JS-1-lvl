let result = 1;
function foo(arg) {
    if (arg === undefined){
        let total = result;   //Эти строки добавлены дополнительно мной
        result = 1;           //Т.к. лектор не учёл многократное исполнение функции
        return total;
    }
    result*=arg;
    return foo;
}

console.log(foo(5)(2)());
console.log(foo(5)());
console.log(foo(2)(1)(3)(4)());