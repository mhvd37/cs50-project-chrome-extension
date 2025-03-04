fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
        document.getElementById('author').innerText = `- ${randomQuote.author}`;
    })
    .catch(error => {
        document.getElementById('quote').innerText = "Could not load a quote.";
        document.getElementById('author').innerText = "";
    });