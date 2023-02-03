import { useState } from "react";
import _ from "lodash";

function Title({ text }) {
  return <h1 className="text-4xl">{text}</h1>;
}

function Button({ text, eventHandler }) {
  let lower = _.toLower(text);
  if (lower === "good")
    return (
      <button
        onClick={eventHandler}
        className="w-24 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
      >
        {text}
      </button>
    );
  else if (lower === "neutral")
    return (
      <button
        onClick={eventHandler}
        className="w-24 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {text}
      </button>
    );
  else if (lower === "bad")
    return (
      <button
        onClick={eventHandler}
        className="w-24 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        {text}
      </button>
    );
  else return <></>;
}

function Feedback({handlers}) {
  return (
    <div className="flex gap-5">
      <Button eventHandler={() => handlers.good()} text="Good" />
      <Button eventHandler={() =>handlers.neutral()} text="Neutral" />
      <Button eventHandler={() => handlers.bad()} text="Bad" />
    </div>
  );
}

function Statistic({ text, value }) {
  return (
    <tr>
      <td className="w-20">{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics({ stats }) {
  if (!stats) return <p>No feedback given</p>
  else {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={stats.good} />
          <Statistic text="Neutral" value={stats.neutral} />
          <Statistic text="Bad" value={stats.bad} />
          <Statistic text="All" value={stats.total} />
          <Statistic text="Average" value={stats.avg ? stats.avg : "-"} />
          <Statistic text="Positive" value={stats.positivePer ? `${stats.positivePer}%` : "-"} />
        </tbody>
      </table>
    );
  }
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let totalFeedback = good + neutral + bad;
  let avgScore = _.ceil(((good-bad) / totalFeedback), 2);
  let positivePercentage = _.ceil(((good / totalFeedback) * 100), 2);

  let anyFeedback = (good > 0 || neutral > 0 || bad > 0) ? true : false;

  function onGood() {
    setGood(good + 1);
  }

  function onNeutral() {
    setNeutral(neutral + 1);
  }

  function onBad() {
    setBad(bad + 1);
  }

  return (
    <div className="flex justify-center items-center flex-col p-5 gap-10">
      <Title text="Give Feedback" />
      <Feedback handlers={{good: onGood, neutral: onNeutral, bad: onBad}}/>
      <Title text="Statistics" />
      <Statistics stats={anyFeedback ? { good: good, neutral: neutral, bad: bad, total: totalFeedback, avg: avgScore, positivePer: positivePercentage} : false} />
    </div>
  );
}

export default App;
