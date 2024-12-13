addEventListener("DOMContentLoaded", recheckSpecialClasses)

function recheckSpecialClasses() {
    [...document.getElementsByClassName("anim")].forEach(x => {
        x.innerHTML = "<span class=\"character\">" + x.innerHTML.split("").join("</span><span class=\"character\">") + "</span>"
    });
    [...document.getElementsByClassName("wave")].forEach(x => {
        [...x.getElementsByClassName("character")].forEach((c, i) => {
            c.style.animationDelay = i / 10 - x.getElementsByClassName("character").length + "s" 
            c.classList.add("waveChar")
        })
    });

    [...document.getElementsByClassName("shake")].forEach(x => {
        [...x.getElementsByClassName("character")].forEach((c) => {
            c.style.animationDuration = Math.random() / 2 + 0.1 + 's'
            c.classList.add("shakeChar")
        })
    });

    [...document.getElementsByClassName("anim")].forEach(x => {
        x.classList.remove("anim")
    });
}