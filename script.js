const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const tweetButton = document.getElementById('tweet-button');
const newQuoteBtn = document.getElementById('new-quote');
const loaderScreen = document.getElementById('loader');
const quoteHolder = document.getElementById('quote-holder')


function loading(){
    loaderScreen.hidden = false;
    quoteHolder.hidden = true;
    
}
function stopLoading(){
    loaderScreen.hidden = true;
    quoteHolder.hidden = false;
    
}





let apiQuotes = [];
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
    stopLoading();
}

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    loading();
    try{
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();   


    }catch(error){
        // error

    }
}

function tweetIt(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');

}

tweetButton.addEventListener('click', tweetIt);
newQuoteBtn.addEventListener('click', newQuote);


getQuotes();
