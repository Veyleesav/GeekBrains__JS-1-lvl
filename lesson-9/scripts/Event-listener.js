document.addEventListener()
function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for(let film of films){
        const newEl=document.createElement("div");
        newEl.classList.add("film");
        newEl.innerText = film.name;
        document.querySelector(".films").appendChild(newEl);
    }
}
