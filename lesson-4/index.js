
const foo = (...elements) => {
    let sum=0;
    if(arguments.length>0){
        if(elements.length===1){
            sum=elements[0];
        }
        else{
            sum=1;
            for(let i=0;i<elements.length;i++){
                sum*=elements[i];
            }
        }

    }
    return sum;
};
console.log(foo(2, 4));