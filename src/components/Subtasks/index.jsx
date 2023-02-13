import './style.scss';
import Subtask from '../Subtask';

const Subtasks = ({ issues }) => {
  
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