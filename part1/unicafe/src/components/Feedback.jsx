import Button from "./Button";

function Feedback({stats}) {
    
    function handleClick(e) {
        console.log(e.target.value)
    }

  return (
    <div className="flex gap-3">
      <Button onClick={handleClick} text="Good" />
      <Button onClick={handleClick} text="Neutral" />
      <Button onClick={handleClick} text="Bad" />
    </div>
  );
}

export default Feedback;
