//  writeCards()
const people = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function  writeCards(people,event) {
    let messages = [];
    for (let i = 0; i < people.length; i++) {
    messages.push (`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return messages; 
}
console.log(writeCards(people,event));

//countdown
function countDown (number) {
    for(let i = number; i >= 0; i--)
      console.log(i);  
}
