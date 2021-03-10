/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Tamika Hayes - March 9, 2021
******************************************/

/* 
The Random Quote Generator project displays a random, inspirtational quote each time
a button is clicked. Each quote has a source (speaker attribution). 
Where relevant, a citation and year is displayed as well.
*/

/*** 
 * The `quotes` array is an array of objects. 
 * All objects include the properties 'quote' and 'source.'
 * Some objects may also include properties for 'citation' and/or 'year.'
***/
const quotes = [
  {
    quote: 'We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.',
    source: 'John F. Kennedy',
    citation: 'Address at Rice University on the Nation\'s Space Effort',
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


/***
 * The`getRandomQuote` function generates a random number and stores it in a variable.
 * The function then uses that random number as an array index value, which is in turn
 * used to generate a random quote object, stored in the variable 'randomQuote' 
 * and returned after the function is called.
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
 * The `printQuote` function calls the getRandomquote function, stores the returned
 * quote object in a variable called 'screenQuote', and uses that quote object to
 * build a string of HTML and quote properties, stored in the variable 'quoteString.'
 * The string 'quoteString' is then used to display a random quote in the browser.
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