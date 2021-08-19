const range = document.querySelector('.range');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track-inner');

const valueRange = document.querySelector('.value');

valueRange.innerHTML = range.value;  

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`  
}

range.oninput = (e) => {
  updateSlider(e.target.value);
  // console.log(range.value);
  valueRange.innerHTML = range.value;  
}
updateSlider(50) // Init value