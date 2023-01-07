import './style.css';


const Sprint = ({ sprint }) => {
    const { name, goal, startDate, endDate } = sprint;
    
    return (
        <div className="sprint">
            <p>{name}</p>
            <p>{goal}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )
};

export default Sprint;