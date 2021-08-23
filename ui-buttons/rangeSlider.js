let range = document.querySelector('.range');
const thumb = document.querySelector('.thumb');
const track = document.querySelector('.track-inner');
//relay for dimmer full power
const relay = document.getElementById('checkbox3');

const valueRange = document.querySelector('.value');

valueRange.innerHTML = range.value;  



const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%` 
}
if (relay.checked) {
  range.value = 100;
  valueRange.innerHTML = range.value;  
  console.log(range.value);
}

range.oninput = (e) => {
  updateSlider(e.target.value);
  // console.log(range.value);
  valueRange.innerHTML = range.value; 
  relay.checked = false;  
}

function Min() {
  range.value = 0;
  valueRange.innerHTML = range.value; 
  relay.checked = false;
  updateSlider(range.value); 
}

function Quarter() {
  range.value = 25;
  valueRange.innerHTML = range.value; 
  relay.checked = false;
  updateSlider(range.value); 
}

function Half() {
  range.value = 50;
  valueRange.innerHTML = range.value; 
  relay.checked = false;
  updateSlider(range.value); 
}

function SeventyFive() {
  range.value = 75;
  valueRange.innerHTML = range.value; 
  relay.checked = false;
  updateSlider(range.value); 
}

function Max() {
  range.value = 100;
  valueRange.innerHTML = range.value; 
  relay.checked =true;
  updateSlider(range.value); 
}

function switchRelay (e) {
  if (relay.checked) {
    range.value = 100;
    valueRange.innerHTML = range.value;  
    console.log(range.value);
    updateSlider(range.value);
  } else {
    range.value -= 100;
    valueRange.innerHTML = range.value;  
    console.log(range.value);
    updateSlider(range.value);
  }
}
updateSlider(range.value); // Init value //50