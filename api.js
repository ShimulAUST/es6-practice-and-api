const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(result => result.json())
        .then(data => displayQuote(data));
}

const displayQuote = (quote) => {

    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;

}