import { useState } from "react";
import Title from "./components/Title";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";

function App() {
  const [stats, setStats] = useState({good: 0, neutral: 0, bad: 0});

  function handleChange() {

  };


  return (
    <div className="flex justify-center items-center flex-col p-5 gap-10">
      <Title text="Give Feedback" />
      <Feedback stats={stats} handleChange={handleChange}/>
      <Statistics stats={stats} setStats={setStats} />
    </div>
  );
}

export default App;
