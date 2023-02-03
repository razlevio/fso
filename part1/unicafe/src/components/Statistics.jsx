import Title from "./Title";

function Statistics({stats}) {
    return (
        <div className="flex flex-col gap-5">
            <Title text="Statistics" />
            <div>
                <p>Good: {stats.good}</p>
                <p>Neutral: {stats.neutral}</p>
                <p>Bad: {stats.bad}</p>
            </div>
        </div>    
    )
};

export default Statistics;