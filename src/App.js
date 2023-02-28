
import React, {useState} from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState ("I attribute my success to this: I never gave or took any excuse")
  const [authors, setAuthors] = useState ("Florence Nightingale")

  const [randomNumber, setRandomNumber] = useState (0)

  // set quotes and authors
  let quotesArray = ["The way to get started is to quit talking and begin doing.",
                "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
                "Don't let yesterday take up too much of today.",
                "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
                "It's not whether you get knocked down, it's whether you get up.",
                "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."]

  let authorsArray = ["Steve Jobs",
                "Winston Churchill",
                "Will Rogers",
                "Unknown",
                "Vince Lombardi",
                "Steve Jobs"]

  // generate random numbers for quotes and authors 
    const generateRandomNumber = () => {
    let randomInteger = (Math.floor(Math.random() * 5))
    setRandomNumber (randomInteger)
    setQuotes(quotesArray[randomInteger])
    setAuthors(authorsArray[randomInteger])
  }
  return (
    <div className="App">
      <header className="App-header">
        <wrapper id="quote-box">
        <h1 id="text">Random Quote Generator</h1>
        <p id="new-quote"> {quotes} </p>
        <p id="author"> - {authors} </p>££
        <button id="button" onClick={()=>generateRandomNumber()}>Next Quote</button>
        <a href='twitter.com/intent/tweet' id='tweet-quote'>Tweet Quote</a>
        </wrapper>
      </header>
    </div>
  );
}

export default App;
