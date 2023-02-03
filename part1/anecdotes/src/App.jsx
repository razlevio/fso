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

  function updatePoints(e) {
    setPoints({...points, [selected.index]: points[selected.index] + 1})
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl p-5 text-center">{selected.text}</h1>
      <h3 className="text-xl p-5 text-center">{points[selected.index] > 0 ? `VOTES: ${points[selected.index]}` : `No Votes Yet`}</h3>
      <button onClick={fetchAnecdote} className="text-pink-400 border border-pink-400 hover:bg-pink-400 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-2 w-54 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Generate Anecdote</button>
      <button onClick={updatePoints} className="text-sky-400 border border-sky-400 hover:bg-sky-400 hover:text-white active:bg-sky-600 font-bold uppercase px-8 py-2 w-60 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Vote</button>
    </div>
  );
}

export default App;
