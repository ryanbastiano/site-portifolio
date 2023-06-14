    function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")


const img = document.querySelector("#profile img")
if(html.classList.contains ("light")) {
    img.setAttribute("src", "./assets/icon.png"), img.setAttribute("alt", 'nova foto')
}
else {
    img.setAttribute("src", "./assets/top.png"), img.setAttribute("alt", 'foto do ryan bastiano')
}
    }