
//toggles
const toggle_1 = document.getElementById("checkbox");
const toggle_2 = document.getElementById("checkbox2");
const toggle_3 = document.getElementById("checkbox3");
//togglesLabels
let toggle1LabelOn = document.getElementById("toggle-on");
let toggle1LabelOff = document.getElementById("toggle-off");
let toggle2LabelOn = document.getElementById("toggle-on2");
let toggle2LabelOff = document.getElementById("toggle-off2");
let toggle3LabelOn = document.getElementById("toggle-on3");
let toggle3LabelOff = document.getElementById("toggle-off3");

//first state
if (toggle_1.checked) {
    toggle1LabelOn.style.display = "block";
    toggle1LabelOff.style.display = "none";
} else {
    toggle1LabelOn.style.display = "none";
    toggle1LabelOff.style.display = "block";
}   

if (toggle_2.checked) {
    toggle2LabelOn.style.display = "block";
    toggle2LabelOff.style.display = "none";
} else {
    toggle2LabelOn.style.display = "none";
    toggle2LabelOff.style.display = "block";
}    

if (toggle_3.checked) {
    toggle3LabelOn.style.display = "block";
    toggle3LabelOff.style.display = "none";
} else {
    toggle3LabelOn.style.display = "none";
    toggle3LabelOff.style.display = "block";
}   

function setToggle1() {   
    if (toggle_1.checked) {
        toggle1LabelOn.style.display = "block";
        toggle1LabelOff.style.display = "none";
    } else {
        toggle1LabelOn.style.display = "none";
        toggle1LabelOff.style.display = "block";
    }    
}

function setToggle2() {   
    if (toggle_2.checked) {
        toggle2LabelOn.style.display = "block";
        toggle2LabelOff.style.display = "none";
    } else {
        toggle2LabelOn.style.display = "none";
        toggle2LabelOff.style.display = "block";
    }    
}

function setToggle3() {   
    if (toggle_3.checked) {
        toggle3LabelOn.style.display = "block";
        toggle3LabelOff.style.display = "none";
    } else {
        toggle3LabelOn.style.display = "none";
        toggle3LabelOff.style.display = "block";
    }   
}
//  } else {
//     for (var i=0; i<toggleLabelOn.length; i+=1){
//     toggleLabelOn[i].style.display = 'none';
//     }   
//     for (var i=0; i<toggleLabelOff.length; i+=1){
//     toggleLabelOff[i].style.display = 'block';
//     } 
// }    
// function setToggle() {   
    // if (document.getElementsByClassName("checkbox").checked) {
    //     toggleLabelOn.style.display = "block";
    //     toggleLabelOff.style.display = "none";
    // } else {
    //     toggleLabelOn.style.display = "none";
    //     toggleLabelOff.style.display = "block";
    // }    
//     if (document.getElementsByClassName("checkbox").checked) {
//         for (var i=0; i<toggleLabelOn.length; i+=1){
//             toggleLabelOn[i].style.display = 'block';
//         }   
//         for (var i=0; i<toggleLabelOff.length; i+=1){
//             toggleLabelOff[i].style.display = 'none';
//         } 
//      } else {
//         for (var i=0; i<toggleLabelOn.length; i+=1){
//         toggleLabelOn[i].style.display = 'none';
//         }   
//         for (var i=0; i<toggleLabelOff.length; i+=1){
//         toggleLabelOff[i].style.display = 'block';
//         } 
//     } 
// }


 