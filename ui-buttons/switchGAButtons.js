var color = ["#b9b8b8", "#03B652"];
var i = 0;
document.querySelector(".btn2").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector(".btn2").style.background = color[i];
});