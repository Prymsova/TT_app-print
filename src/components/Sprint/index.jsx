import './style.css';

const dayName = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

const Sprint = ({ sprint }) => {
  const { name, goal, startDate, endDate } = sprint;

  const startDateInit = new Date(startDate);
  const startDateFormat = `${dayName[startDateInit.getDay()-1]} ${startDateInit.getDate()}.${startDateInit.getMonth()+1}.`;

  const endDateInit = new Date(endDate);
  const endDateFormat = `${dayName[endDateInit.getDay()-1]} ${endDateInit.getDate()}.${endDateInit.getMonth()+1}.`;

  return (
    <div className="sprint">
      <div className="sprint__details">
        <h2 className="sprint__name">{name}</h2>
        <h3 className="sprint__goal">{goal}</h3>
      </div>
      <div className="sprint__dates">
        {startDate ? <span className="sprint__date sprint__date--start">{startDateFormat}</span> : null }
        {endDate ? <span className="sprint__date sprint__date--end">{endDateFormat}</span> : null }
      </div>
    </div>
  )
};

export default Sprint;