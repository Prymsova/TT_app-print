import './style.css';
import Subtask from '../Subtask';

const Subtasks = ({ issues }) => {
  //console.log(issues);
  //console.log(issues.length)
    
  return (
    <div className="subtasks">
      <ul className="subtasks__list">
        {issues
        .map((issue, index) => issue.fields.subtasks.map(subtask => <Subtask key={subtask.key} subtask={subtask} task={issue.key} taskIndex={index}/>))
        }
      </ul>
    </div>
  )
};

export default Subtasks;