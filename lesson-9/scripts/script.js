const categories = ['Юмор', 'Хоррор', 'Фантастика','Драма', 'Триллер', 'Приключения'];
const films = [];

class Comment {
    constructor(text,author,stars){
        this.text=text;
        this.author=author;
        this.stars=stars;
    }
}

class Film {
    constructor(name, cat){
        this.name = name;
        this.category = categories[cat];
        this.budget=0;
        this.expertStars = 3;
        this.comments=[];
    }
    addComment(text,author,stars){
        this.comments.push(new Comment(text, author, Number(stars)));
    }
    getAverageStars(){
        let sumStars = 0;
        this.comments.forEach(comment => sumStars+=comment.stars);
        return (this.comments.length>0)? (sumStars/this.comments.length).toFixed(2) : 0;
    }
}
films.push(new Film("Титаник", 3));
films[0].expertStars=5;
films[0].addComment("Очень милый фильм!","Серёга", 4);
films[0].addComment("Относительно милый фильм!","Пётр", 3);
films.push(new Film("Один дома", 5));
films[1].addComment("Очень смешной фильм!","Саша СТ", 5);
films[1].addComment("Совсем не смешной фильм!","Джиган", 1);
films.push(new Film("Тупой и ещё тупее", 0));
films.push(new Film("УЖАС",1));
films.push(new Film("Гарри Поттер",2));
films.push(new Film("Грустный фильм 1",3));
films.push(new Film("Грустный фильм 2",3));
films.push(new Film("Стрелялка",4));
films[2].budget=17000;
films[2].expertStars=7.3;
films[2].addComment("Безумно смешной фильм!","Евгений", 10);
films[2].addComment("Весело, но глупо","Семён", 4);
films[2].addComment("Впервые этот фильм посмотрел в детстве и сразу скажу, что фильм понравился и прежде всего за свою легкость, здесь не надо думать над диалогами, искать замысловатый сюжет и т. д. Просто, придя после трудного рабочего дня, приятно расслабляет незамысловатый юмор, которым пропитан практически весь фильм от начала и до конца (даже когда, казалось, фильм логически закончен, ставиться жирно-смешная точка с автобусом), да, возможно юмор по большей части примитивный и любителям умных комедий он не понравится, но это и не его задача. \n" +
    "\n" +
    "Что касается актеров, то Керри и Дэниелс просто созданы для этого фильма, причем совсем не складывается впечатление о том, что кто-то один перетягивает одеяло юмора на себя больше другого, актеры прекрасно гармонируют и дополняют друг с друга; и если взять отдельные сцены каждого и сравнить их по своей комичности, то смело можно ставить знак равенства. \n" +
    "\n" +
    "Итак, любителям комедий смотреть, а поклонникам актеров смотреть обязательно. \n" +
    "\n" +
    "8 из 10 \n" +
    "\n" +
    "(просто нет предела совершенству)","Nidless", 8);

function getFilmsByCategory(cat) {
    const newFilms=[];
    for (let film of films){
        if (film.category===cat){
            newFilms.push(film);
        }
    }
    return newFilms;
}
