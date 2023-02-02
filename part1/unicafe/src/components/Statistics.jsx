import Title from "./Title";

function Statistics({stats}) {
    return (
        <div>
            <Title text="Statistics" />
            <p>Good: {stats.good}</p>
            <p>Neutral: {stats.neutral}</p>
            <p>Bad: {stats.bad}</p>
        </div>    
    )
};

export default Statistics;