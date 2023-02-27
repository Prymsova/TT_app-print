import './style.scss';

const dayName = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

const Sprint = ({ sprint }) => {
  const { name, goal, startDate, endDate, imagePath } = sprint;

  const startDateInit = new Date(startDate);
  const startDateFormat = `${dayName[startDateInit.getDay()-1]} ${startDateInit.getDate()}.${startDateInit.getMonth()+1}.`;

  const endDateInit = new Date(endDate);
  const endDateFormat = `${dayName[endDateInit.getDay()-1]} ${endDateInit.getDate()}.${endDateInit.getMonth()+1}.`;

  return (
    <div className="sprint">
      <div className="sprint__details">
        <div className="sprint__details--left">
          <h2 className="sprint__name">{name}</h2>
          <h3 className="sprint__goal">{goal}</h3>
        </div>
        <div className="sprint__details--right">
          {imagePath ?
            <img src={URL.createObjectURL(imagePath)} alt="sprint obrázek" />
            : <p className="note">Nahrát obrázek</p> 
          }
        </div>
      </div>
      <div className="sprint__dates">
        {startDate &&
          <span className="sprint__date sprint__date--start">{startDateFormat}</span>
        }
        {endDate &&
          <span className="sprint__date sprint__date--end">{endDateFormat}</span>
        }
      </div>
    </div>
  )
};

export default Sprint;