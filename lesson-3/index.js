//Задание: Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2.
//Как же максимально непонятно задано задание. Это что-то с чем-то. Надеюсь, я угадал, чего от меня хотят.
let number=10000;
while (number<=150000){
    let sum=number-1+number-2+number-3;
    if ((sum%100)===52){ //проверяем, даёт ли сумма трёх предыдущих цифр при делении на 100 остаток 52
        if (sum.toString()[1]==='2'){ //проверяем, является ли вторая цифра двойкой при помощи приведения числа к строке
            console.log(number);
        }

    }
    number++;
}