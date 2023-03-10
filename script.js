const quoteText = document.querySelector('.quote');
quoteBtn = document.querySelector('button');
authorName = document.querySelector('.author .name');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');
twitterBtn = document.querySelector('.twitter');


quoteBtn.addEventListener('click', randomQuote);

//random quote function
function randomQuote (){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quotes...';
    //fetching random quotes from API and parsing it into 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = 'New Qoute';
        quoteBtn.classList.remove('loading');
    });
}

soundBtn.addEventListener('click', () =>  {
    //the speechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);// speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener('click', () =>  {
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click', () =>  {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '_blank'); // opening a new twitter tab with passing quote in the url
})



