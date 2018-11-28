class Bird {
    constructor(name) {
        this.points = 0;
        this.wasEaten = false;
        this.name = name;
    }

    getEeaten() {
        this.wasEaten = true;
    }

    getPoint() {
        this.points += 1;
    }
}

const bird1 = new Bird('Bird 1');
const bird2 = new Bird('Bird 2');
const bird3 = new Bird('Bird 3');
const bird4 = new Bird('Bird 4');
const bird5 = new Bird('Bird 5');
const bird6 = new Bird('Bird 6');
const bird7 = new Bird('Bird 7');
const bird8 = new Bird('Bird 8');
const bird9 = new Bird('Bird 9');
const bird10 = new Bird('Bird 10');

function deathMachine() {
    console.log('Игра в выживание птичек началась!');
    let birdsAlive = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10];
    while (birdsAlive.length > 1) {
        birdsAlive.sort(function () {
            return 0.5 - Math.random()
        }); //перемешиваем массив, теперь птицы расположены в случайном порядке.
        birdsAlive[0].getEeaten();
        console.log(`Была съедена птичка ${birdsAlive.shift().name}. Её слопала птичка по имени ${birdsAlive[0].name}`);
        birdsAlive[0].getPoint();
    }
    if (birdsAlive.length === 1) { //Поведение в случае, когда осталась в живых только одна птичка
        console.log(`Последней выжила птичка ${birdsAlive[0].name}, её счёт: ${birdsAlive[0].points}`);
        const birds = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10];
        let championBird = [bird1];
        for (let bird of birds) {
            if (bird.points > championBird[0].points) {
                championBird[0] = bird;
            }
        }
        for (let bird of birds) { //Проверяем наличие других птичек с таким же счётом
            if (bird.points === championBird[0].points && bird.name !== championBird[0].name) {
                championBird.push(bird);
            }
        }
        if (championBird.length < 2) { //Результат игры, если победила только одна птичка
            console.log(`Больше всех сородичей слопала птичка по имени ${championBird[0].name}, её счёт: ${championBird[0].points}`);
        }
        else { //Результат игры, если победило несколько пташек
            console.log(`Больше всех сородичей слопали ${championBird.length} пташек, а именно:`);
            for (let bird of championBird) {
                console.log(`${bird.name}, её счёт: ${bird.points}`);
            }

        }
        console.log('Для упрощения проверки правильности работы программы, выдаю массив со всеми птичками после игры.');
        console.log(birds);

    }
}

deathMachine();