// change background-color 
let color = ["#8A39E1", "#B667F1", "#FA4EAB", "#FE83C6"];
let i = 0;

function bg() {
    document.querySelector("body").style.background = color[i]
    i = i + 1;
    if (i > color.length) {
        i = 0;
    }
}

setInterval(bg, 1000);

let btn = document.querySelector(".btn");
let login = document.querySelector(".sign")

btn.onclick = () => {
    login.classList.toggle("active");
}