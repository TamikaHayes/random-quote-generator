/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.',
    source: 'John F. Kennedy',
    citation: 'Address at Rice University on the Nation Space Effort',
    year: 1962
  },
  {
    quote: 'We are already life-chosen by ourselves. We are the moral inhabitants of the galaxy.',
    source: 'Toni Morrison',
    citation: 'Sarah Lawrence College Commencement Address',
    year: 1988
  },
  {
    quote: 'Above all, be the heroine of your life, not the victim.',
    source: 'Nora Ephron'
  },
  {
    quote: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
    source: 'Jane Goodall'
  },
  {
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain!',
    source: 'Dolly Parton'
  }
];
//console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random()*(array.length));
  let randomQuote = array[randomNum];
  console.log(randomNum);
  console.log(randomQuote);
  return randomQuote;
}
getRandomQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote(array) {
  let screenQuote = getRandomQuote(quotes);
  let quoteString = `<p class="quote">${screenQuote.quote}</p>` +
            `<p class="source">${screenQuote.source}` 
    if (screenQuote.citation) {
      quoteString += `<span class="citation">${screenQuote.citation}</span>`
    }
    if (screenQuote.year) {
      quoteString += `<span class="year">${screenQuote.year}</span>`
    } 
    + '</p>';
document.getElementById('quote-box').innerHTML = quoteString;
return quoteString;
}
//console.log(screenQuote);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);