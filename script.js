    function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")


const img = document.querySelector("#profile img")
if(html.classList.contains ("light")) {
    img.setAttribute("src", "./assets/icon.png"), img.setAttribute("alt", 'foto de Ryan Bastiano')
}
else {
    img.setAttribute("src", "./assets/icondark.png"), img.setAttribute("alt", 'foto do ryan bastiano')
}
    }