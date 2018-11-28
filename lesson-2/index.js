let  fedorPoints = 16;
let petrPoints = 22;
console.log('У Фёдора '+ fedorPoints + ' очков, у Петра ' + petrPoints + ' очков.');
if (petrPoints<=21 && fedorPoints<=21){
    if (petrPoints>fedorPoints){
        console.log('Победил Пётр!')
    }
    else if(petrPoints===fedorPoints){
        console.log('Ничего себе, ничья!')
    }
    else{
        console.log('Победил Фёдор!')
    }
}
else{
   if (petrPoints>21 && fedorPoints<=21){
       console.log('Победил Фёдор, так как у Петра перебор!')
   }
   else if(fedorPoints>21 && petrPoints<=21){
       console.log('Победил Пётр, так как у Фёдора перебор!')
   }
   else{
       console.log('Странно, но оба игрока проиграли! Интересно, что бы спел Михаил Круг о такой ситуации?')
   }
}