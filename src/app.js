const modal = document.querySelector("#modal");
const trending = document.querySelector(".trending");
const yourName = document.querySelector("#your-name");
const gardenOfWords = document.querySelector("#garden-of-words");
const helloWorld = document.querySelector("#hello-world");
const fireworks = document.querySelector("#fireworks");
const whiskerAway = document.querySelector("#whisker-away");
const ponyo = document.querySelector("#ponyo");
const movingCastle = document.querySelector("#moving-castle");
const totoro = document.querySelector("#totoro");

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

trending.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q6iK6DjV_iE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

yourName.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xU47nhruN-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

gardenOfWords.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/FMabhvDoolc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

helloWorld.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/shoWFRnNoWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

fireworks.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/KG770hOuT2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

whiskerAway.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/aXc9DVfLTGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

ponyo.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/bskgNOXbdiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

movingCastle.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/iwROgK94zcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

totoro.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/92a7Hj0ijLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});
