const openedFilms= {};

document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories){
        const newEl=document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click",function () {
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});


function getFilmByName(filmName) {
    return films.filter( f => f.name === filmName )[0];
}

function getFilmComments(filmName){
    const film = getFilmByName(filmName);
    return film.comments;
}

function onAddCommentClick(name) {
    const authorValue = document.getElementById(`author-${name}`).value;
    const commentValue = document.getElementById(`comment-${name}`).value;
    let starsValue = document.getElementById(`stars-${name}`).value;
    if (starsValue>10){
        starsValue=10;
    }else if(starsValue<0){
        starsValue=0
    }

    const film = getFilmByName(name);
    if(authorValue!==""&&commentValue!==""&&starsValue!==""){
        film.addComment(commentValue,authorValue,starsValue);
        onCategoryChoice(film.category);
    }
    else{
        alert("Заполнены не все поля для отзыва");
    }

}

function renderCommentForm(film) {
    const content = `<div class="form-titile">Добавьте отзыв фильму «${film.name}»</div><div class="form-body"><input id="${"author-"+film.name}" class="form-author" placeholder="Ваше имя"><input id="${"comment-"+film.name}" class="form-comment" placeholder="Ваше имя"><label for="rating"><br>Ваша оценка фильму: (0-10):</label>
<input type="number" id="${"stars-"+film.name}" name="rating"
       min="0" max="10" placeholder="Ваша оценка"><button onclick="onAddCommentClick('${film.name}')">Отправить</button></div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");
    form.innerHTML = content;

    form.addEventListener("click",function (event) {
        event.stopPropagation();
        form.classList.add("chosen");
    });

    return form;
}
function colorizePoster() {  //рандомизирую цвет подложки постера
    const backgrounds =["background:red", "background:pink", "background:brown", "background:aqua", "background:royalbue", "background:beige" ];
    let background = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    return background;
}
function openFilmCard(film,newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        s+=`<div class="comment"><span class="comment-author">${c.author}</span> : ${c.text}</div>`
    });
    newEl.innerHTML +=`<div class="wrapper"><div class="poster" style=${colorizePoster()}>Место для постера</div><div class="film-info"><p>Дополнительная информация о фильме:</p><p>Бюджет: ${film.budget} USD<br>Рейтинг экспертов: ${film.expertStars}/10<br>Рейтинг пользователей: ${film.getAverageStars()}/10</p></div></div><div class="film-comments">${s}</div>`;

    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click",function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film,newEl) {
    if (openedFilms.hasOwnProperty(film.name) && openedFilms[film.name]){
        newEl.innerHTML = `<div class="film-name">${film.name}</div>`;
        openedFilms[film.name]=false;
    }else{
        openFilmCard(film,newEl);
        openedFilms[film.name]=true;
    }

}

function renderFilm(film) {
    const newEl=document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<div class="film-name">${film.name}</div>`;

    newEl.addEventListener("click", function () {
        onFilmClick(film,newEl);
    } );

    document.querySelector(".films").appendChild(newEl);


}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for(let film of films){
      renderFilm(film);
    }
}

