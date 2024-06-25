document.getElementById('btn').addEventListener('click',show)
var quoteDisplay = document.getElementById('quoteArea');
var prevIndex;

function show() {
   var  quotes = [
    "\"Be yourself; everyone else is already taken.\"\n― Oscar Wilde",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen"
];
var randomIndex = Math.floor(Math.random() * quotes.length);


if (randomIndex === prevIndex) {

    randomIndex+=1
    
}

prevIndex = randomIndex;
quoteDisplay.innerHTML = quotes[randomIndex];



}