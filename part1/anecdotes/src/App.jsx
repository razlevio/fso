import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initalRand = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState({text: anecdotes[initalRand], index: initalRand});
  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0});

  function fetchAnecdote() {
    let rand = Math.floor(Math.random() * anecdotes.length);
    setSelected({text: anecdotes[rand], index: rand});
  };

  function updatePoints() {
    setPoints({...points, [selected.index]: points[selected.index] + 1})
  };

  function allPointsZero() {
    let values = Object.values(points);
    let sum = values.reduce((acc, term) => acc + term, 0);
    if (sum === 0) return true;
    else return false;
  };

  function mostVotesAnecdoteIndex() {
    let maxValue = 0;
    let maxIndex = 0;
    const keys = Object.keys(points);
    keys.forEach(key => {
      if(points[key] > maxValue) {
        maxValue = points[key];
        maxIndex = key;
      }
    });
    return maxIndex;
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-center max-w-4xl font-bold">ANECDOTE OF THE DAY</h1>
        <h1 className="text-4xl text-center max-w-4xl">{selected.text}</h1>
        <h3 className="text-xl text-center">{points[selected.index] > 0 ? `VOTES: ${points[selected.index]}` : `No Votes Yet`}</h3>
        <div className="flex justify-center items-center gap-3">
          <button onClick={fetchAnecdote} className="text-pink-400 border border-pink-400 hover:bg-pink-400 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-2 w-54 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Generate Anecdote</button>
          <button onClick={updatePoints} className="text-sky-400 border border-sky-400 hover:bg-sky-400 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-2 w-60 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Vote</button>
        </div>
      </div>
      <div>
        <h1 className="text-5xl p-5 text-center max-w-4xl font-bold">ANECDOTE WITH MOST VOTES</h1>
        <h1 className="text-4xl p-5 text-center max-w-4xl">{allPointsZero() ? `No Votes For Any Anecdote Yet` : anecdotes[mostVotesAnecdoteIndex()]}</h1>
        <h3 className="text-xl text-center">{allPointsZero() ? `` : `VOTES: ${points[mostVotesAnecdoteIndex()]}`}</h3>
      </div>
    </div>
  );
}

export default App;
