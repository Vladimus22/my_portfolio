let houses = [
    {house:"Stark", points: 0, addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Lannister", points: 0, addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Tyrell", points: 0, addPoints: function(){this.points += 1; questionCount += 1;}},
    {house: "Baratheon", points: 0, addPoints: function(){this.points += 1; questionCount += 1;}},
]
let containerQuestion = document.getElementById('container-questions');
let question = document.getElementById('question');

var questionCount = 0;
let result = document.getElementById('result');
let resultMessage = document.getElementById('result-message');

let sumPoints = Math.max(houses);

containerQuestion.onclick = function(event) {
    //declare cursor 
    let cursor = event.target;
    //declare target div contains question that we will need to delete
    let target = event.target.closest('#question');
    if(cursor.tagName == "BUTTON") {
        target.style.display = "none";
    } else {
       console.log('miss');
    }    
}

function calculateResult() {
    var maxPoints = houses.reduce((prev, cur) => {
        if(prev.points > cur.points) {
            return prev;
        } else {
            return cur;
        }
    }) 
    console.log(maxPoints);
    result.style.display = "block";
    resultMessage.innerHTML = "You are " + maxPoints.house;
}

// if (questionCount = 2) {
//     containerQuestion.style.display = "none";
//     result.style.display = "block";
//     resultMessage = "You are ${sumPoints}";
// }
