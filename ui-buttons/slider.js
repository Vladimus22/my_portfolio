let slider = document.getElementById("myRange");
let output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener("change", function() {
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(1, 141, 59)' + x + '%, rgb(224, 224, 224) ' + x + '%)';
    slider.style.background = color;
})