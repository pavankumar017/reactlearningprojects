import logo from "./logo.svg";
import "./App.css";

import "./styles.css";

import React, { useState } from "react";
function App() {
  const [word, setword] = useState("");
  const [synonyms, setsunonyms] = useState([]);
  console.log(word);

  const fetchsynonym = async (word) => {
    const syn = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
    const syn_json = await syn.json();
    // .then((res) => res.json())
    // .then(setsunonyms);
    console.log(syn_json);
    setsunonyms(syn_json);
  };

  const fetchSynHandler = async function (e) {
    e.preventDefault();
    fetchsynonym(word);
  };

  const fetcsynclicked = (newword) => {
    console.log(newword);
    setword(newword);
    fetchsynonym(newword);
  };

  return (
    <div className="App">
      <form onSubmit={fetchSynHandler}>
        <label htmlFor="word-input">Your word</label>
        <input
          value={word}
          onChange={(e) => setword(e.target.value)}
          id="word-input"
        ></input>
        <button>Submit</button>
      </form>
      <ol>
        {synonyms.map((syn) => (
          <li onClick={() => fetcsynclicked(syn.word)} key={syn.word}>
            {syn.word}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
