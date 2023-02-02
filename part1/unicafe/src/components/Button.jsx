import _ from "lodash";

function Button({text, onClick}) {
    const lowerText = _.toLower(text);
    if(lowerText === "good") return <button value="good" onClick={onClick} className="w-24 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">{text}</button>
    else if(lowerText === "neutral") return <button value="neutral" onClick={onClick} className="w-24 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">{text}</button>
    else if(lowerText === "bad") return <button value="bad" onClick={onClick} className="w-24 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">{text}</button>
    else return <></>
};

export default Button;